import React from "react";
import News from "../../components/News";
import ButtonTab from "../../components/ButtonTab";

const NewsPolitics = () => {
  return (
    <React.Fragment>
      <ButtonTab />
      <News category="Politics" />
    </React.Fragment>
  );
};

export default NewsPolitics;
