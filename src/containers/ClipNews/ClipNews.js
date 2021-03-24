import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { db } from "../../firebase";
import { useAuth } from "../../Store/AuthProvider";
import ClipNewsGrid from "../../components/ClipNewsGrid";
import AttachFileIcon from "@material-ui/icons/AttachFile";

const ClipNews = () => {
  const [clips, setClips] = useState([
    {
      category: "",
      datePublished: "",
      description: "",
      image: "",
      name: "",
      providerImage: "",
      providerName: "",
      timastamp: null,
      url: "",
    },
  ]);
  const { currentUser } = useAuth();
  const USER_ID = currentUser.uid;

  useEffect(() => {
    const unSub = db
      .collection("users")
      .doc(USER_ID)
      .collection("clips")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setClips(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            category: doc.data().category,
            datePublished: doc.data().datePublished,
            description: doc.data().description,
            image: doc.data().image,
            name: doc.data().name,
            providerImage: doc.data().providerImage,
            providerName: doc.data().providerName,
            timestamp: doc.data().timestamp,
            url: doc.data().url,
          }))
        );
      });

    return () => {
      unSub();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Box mt={0.4} display="flex" alignItems="flex-end">
        <AttachFileIcon fontSize="large" />
        <Typography variant="h5">Clip News</Typography>
      </Box>

      <Box>
        {clips[0] ? (
          clips.map((clip, index) => {
            return (
              <ClipNewsGrid
                key={index.toString()}
                description={clip.description}
                name={clip.name}
                url={clip.url}
                image={clip.image}
                providerImage={clip.providerImage}
                providerName={clip.providerName}
                datePublished={clip.datePublished}
                category={clip.category}
                docId={clip.id}
              />
            );
          })
        ) : (
          <Box display="flex" my={5}>
            <Typography variant="h4">Clip your favarite news</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ClipNews;
