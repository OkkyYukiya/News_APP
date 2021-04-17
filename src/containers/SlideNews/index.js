import React, { useEffect, useState } from "react";
import { NYT_API_KEY } from "../../apis/apiKeys";
import { Box } from "@material-ui/core";
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
  autoPlaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const SlideNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=${NYT_API_KEY}`
      );
      const body = await response.json();
      setArticles(body.results);
      setLoading(false);
    };
    fetchNews();
  }, []);

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
            {articles.map((article) => (
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
