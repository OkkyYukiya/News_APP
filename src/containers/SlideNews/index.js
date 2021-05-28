import React, { useContext, useEffect, useState } from "react";
import { SlideNewsUrl } from "../../apis/nyt";
import { Box } from "@material-ui/core";
import { Store } from "../../context/Store";
import SlideNewsItem from "../../components/SlideNewsItem";
import NextArrow from "../../common/SlickSettings/NextArrow";
import PrevArrow from "../../common/SlickSettings/PrevArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const randomScreen = "https://source.unsplash.com/random";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoPlaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SlideNews = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await fetch(SlideNewsUrl);
      const body = await response.json();
      setGlobalState({
        type: "SET_SLIDENEWS",
        payload: { slideNews: body.results },
      });
      setLoading(false);
    };
    if (globalState.slideNews.length === 0) {
      fetchNews();
    }
    // eslint-disable-next-line
  }, [globalState.slideNews]);

  return (
    <React.Fragment>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          style={{
            maxWidth: 700,
            height: 300,
            background: "linear-gradient(grey, darkgrey)",
            margin: "0 auto",
          }}
        ></Box>
      ) : (
        <Box style={{ maxWidth: 700, margin: "2px auto" }}>
          <Slider {...settings}>
            {globalState.slideNews.map((article) => (
              <SlideNewsItem
                key={article.url}
                title={article.title}
                image={
                  article.multimedia ? article.multimedia[2].url : randomScreen
                }
                abstract={article.abstract}
                date={article.updated_date}
                thumbnailStandard={article.thumbnail_standard}
                source={article.source}
                url={article.url}
              />
            ))}
          </Slider>
        </Box>
      )}
    </React.Fragment>
  );
};

export default SlideNews;
