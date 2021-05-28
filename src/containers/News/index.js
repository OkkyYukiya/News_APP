import React, { useState, useEffect, useContext } from "react";
import styles from "./News.module.css";
import ButtonTab from "../../components/ButtonTab";
import NewsGridItem from "../../components/NewsGridItem";
import { getNewsData } from "../../apis/rapidApi";
import { Box } from "@material-ui/core";
import { Store } from "../../context/Store";
import PuffLoader from "react-spinners/PuffLoader";

const News = () => {
  const [loading, setLoading] = useState(false);
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const res = await getNewsData(globalState.category, globalState.language);
      setGlobalState({
        type: "SET_NEWSDATA",
        payload: { newsdata: res },
      });
      setLoading(false);
    };
    const category = globalState.category;
    console.log(category);

    getNews();

    // eslint-disable-next-line
  }, [globalState.category, globalState.language]);

  return (
    <React.Fragment>
      <Box className={styles.box}>
        <ButtonTab />
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" my={7}>
          <PuffLoader color={"#497C81"} loading={loading} size={80} />
        </Box>
      ) : (
        <div className={styles.root}>
          {globalState.newsdata.map((news) => (
            <NewsGridItem
              key={news.url}
              description={news.description}
              name={news.name}
              url={news.url}
              image={news.image?.thumbnail?.contentUrl}
              providerImage={news.provider[0].image?.thumbnail?.contentUrl}
              providerName={news.provider[0].name}
              datePublished={news.datePublished}
              category={globalState.category}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default News;
