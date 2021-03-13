import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import NewsPage from "./containers/News/News";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockPage from "./pages/StockPage";
import Watch from "./pages/WatchPage";
import CovidPage from "./pages/CovidPage";

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
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
