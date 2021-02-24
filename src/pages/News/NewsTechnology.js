import React from "react";
import News from "../../components/News";
import ButtonTab from "../../components/ButtonTab";

const NewsTechnology = () => {
  return (
    <React.Fragment>
      <ButtonTab />
      <News category="ScienceAndTechnology" />
    </React.Fragment>
  );
};

export default NewsTechnology;
