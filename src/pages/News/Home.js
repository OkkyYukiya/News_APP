import React from "react";
import News from "../../components/News";
import ButtonTab from "../../components/ButtonTab";

const Home = () => {
  return (
    <React.Fragment>
      <ButtonTab />
      <News category="Business" />
    </React.Fragment>
  );
};

export default Home;
