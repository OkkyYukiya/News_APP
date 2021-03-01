import React from "react";
import styles from "./App.module.scss";
import NewsPage from "./containers/News/News";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockListPage from "./pages/StockListPage";

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
            <Route path="/stock" component={StockListPage} />
            <Route path="/search" component={SearchNewsPage} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
