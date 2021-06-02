import React, { useState, useEffect, useContext } from "react";
import styles from "./News.module.css";
import ButtonTab from "../ButtonTab";
import NewsGridItem from "../../components/NewsGridItem";
import { getNewsData } from "../../apis/rapidApi";
import { Box } from "@material-ui/core";
import { Store } from "../../context/Store";
import PuffLoader from "react-spinners/PuffLoader";

const News = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const { globalState, setGlobalState } = useContext(Store);
  const changeCategory = async (categoryName) => {
    try {
      setLoading(true);
      await setGlobalState({
        type: "SET_CATEGORY",
        payload: { category: categoryName },
      });
      const res = await getNewsData(globalState.category, globalState.language);
      setGlobalState({
        type: "SET_NEWSDATA",
        payload: { newsdata: res },
      });
    } catch {
      setErr("Failed to Loading. Please Try Again");
    } finally {
      setLoading(false);
    }
  };
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
    if (!globalState.newsdata.length) {
      getNews();
    }

    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <Box className={styles.box}>
        <ButtonTab
          biz={() => changeCategory("business")}
          tech={() => changeCategory("technology")}
          polit={() => changeCategory("politics")}
          world={() => changeCategory("world")}
          prod={() => changeCategory("product")}
          sports={() => changeCategory("sports")}
        />
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" my={7}>
          <PuffLoader color={"#497C81"} loading={loading} size={80} />
        </Box>
      ) : (
        <div className={styles.root}>
          {globalState.newsdata &&
            globalState.newsdata.map((news) => (
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
          {err && <h2>{err}</h2>}
        </div>
      )}
    </React.Fragment>
  );
};

export default News;
