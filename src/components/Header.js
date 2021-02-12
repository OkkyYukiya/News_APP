import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "./Menu";
import logo from "../assets/logo-news.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Menu />
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt="" style={{ height: 30, paddingTop: 10 }} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
// import "./Header.css";
// import logo from "../assets/logo-news.png";
// import EXC_API_KEY from "../exckeys";

// const Header = () => {
//   const [prices, setPrices] = useState({});
//   const url = `http://apilayer.net/api/live?access_key=${EXC_API_KEY}&currencies=EUR,GBP,JPY&source=USD&format=1`;

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         setPrices(result.quotes);
//       });
//   }, [url]);

//   const price = (value, adjust) => {
//     const adjustPrice = Math.round(value * adjust) / adjust;
//     return adjustPrice.toString();
//   };

//   return (
//     <div className="header">
//       <div className="header-left">
//         <img src={logo} alt="" />
//       </div>

//       <div className="header-right">
//         {/* <p className="price jpy"> */}
//         {/* USD/JPY <span>105.000</span> */}
//         {/* </p> */}
//         <p className="price jpy">
//           USD/JPY
//           <br />
//           <span>{price(prices.USDJPY, 1000)}</span>
//         </p>

//         {/* <p className="price eur">
//           USD/EUR <span>0.80000</span>
//         </p> */}
//         <p className="price eur">
//           USD/EUR
//           <br />
//           <span>{price(prices.USDEUR, 100000)}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;
