import React from "react";
import { Box } from "@material-ui/core";
// import StockGrid from "../containers/StockGrid";
// import StockChart from "../containers/StockChart";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Button from "@material-ui/core/Button";
// import StockList from "../containers/StockList";
// import CandleChart from "../containers/CandleChart";

// const styles = {
//   buttonTabBox: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   button: {
//     width: 150,
//     height: 30,
//     backgroundColor: "#326779",
//     color: "white",
//   },
// };

const StockPage = () => {
  // const [value, setValue] = useState(0);
  return (
    <Box>
      {/* <Box mt={1} style={styles.buttonTabBox}>
        <ButtonGroup disableElevation>
          <Button onClick={() => setValue(0)} style={styles.button} fullWidth>
            Chart
          </Button>
          <Button onClick={() => setValue(1)} style={styles.button} fullWidth>
            StockList
          </Button> */}
      {/* <Button onClick={() => setValue(2)} style={styles.button} fullWidth>
            Candle
          </Button> */}
      {/* </ButtonGroup>
      </Box>
      {value === 0 && (
        <>
          <StockGrid />
          <StockChart />
        </>
      )}
      {value === 1 && <StockList />} */}

      {/* {value === 2 && <CandleChart />} */}
    </Box>
  );
};

export default StockPage;
