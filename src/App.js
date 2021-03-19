import React from "react";
import styles from "./App.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NewsPage from "./containers/News";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockPage from "./pages/StockPage";
import Watch from "./pages/WatchPage";
import CovidPage from "./pages/CovidPage";
import ClipNewsPage from "./pages/ClipNewsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import PrivateRoute from "./components/PrivateRoute";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Switch>
            <Route exact path="/">
              <NewsPage category="Business" />
            </Route>
            <Route path="/news-technology">
              <NewsPage category="ScienceAndTechnology" />
            </Route>
            <Route path="/news-politics">
              <NewsPage category="Politics" />
            </Route>
            <Route path="/news-world">
              <NewsPage category="World" />
            </Route>
            <Route path="/news-product">
              <NewsPage category="Products" />
            </Route>
            <Route path="/watch" component={Watch} />
            <Route path="/stock" component={StockPage} />
            <Route path="/covid" component={CovidPage} />
            <Route path="/search" component={SearchNewsPage} />
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
