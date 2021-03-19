import React, { useState } from "react";
import { Box } from "@material-ui/core";
import StockGrid from "../containers/StockGrid/StockGrid";
import StockChart from "../containers/StockChart/StockChart";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import StockList from "../containers/StockList/StockList";

const styles = {
  buttonTabBox: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 30,
    backgroundColor: "#326779",
    color: "white",
  },
};

const StockPage = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <Box>
      <Box mt={1} style={styles.buttonTabBox}>
        <ButtonGroup disableElevation>
          <Button
            onClick={() => setToggle(true)}
            style={styles.button}
            fullWidth
          >
            Chart
          </Button>
          <Button
            onClick={() => setToggle(false)}
            style={styles.button}
            fullWidth
          >
            StockList
          </Button>
        </ButtonGroup>
      </Box>

      {toggle && (
        <>
          <StockGrid />
          <StockChart />
        </>
      )}
      {!toggle && <StockList />}
    </Box>
  );
};

export default StockPage;
