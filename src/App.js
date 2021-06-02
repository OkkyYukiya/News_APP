import React from "react";
import styles from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockPage from "./pages/StockPage";
import Watch from "./pages/WatchPage";
import CovidPage from "./pages/CovidPage";
import ClipNewsPage from "./pages/ClipNewsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import PrivateRoute from "./common/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";
import StockNewsPage from "./pages/StockNewsPage";

//branch is develop_react-query

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/watch" component={Watch} />
            <Route path="/stock" component={StockPage} />
            <Route path="/covid" component={CovidPage} />
            <Route path="/search" component={SearchNewsPage} />
            <Route path="/stock-news" component={StockNewsPage} />
            <PrivateRoute path="/clip" component={ClipNewsPage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
