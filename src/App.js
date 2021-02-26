import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import NewsPage from "./pages/NewsPage";
// import NewsPolitics from "./pages/News/NewsPolitics";
// import NewsTechnology from "./pages/News/NewsTechnology";
// import NewsWorld from "./pages/News/NewsWorld";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockListPage from "./pages/StockListPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={<NewsPage category="Business" />} />
        <Route path="/news-technology" component={<NewsPage category="Politics" />} />
        <Route path="/news-politics" component={<NewsPage category="ScienceAndTechnology" />} />
        <Route path="/news-world" component={<NewsPage category="World" />} />
        <Route path="/stock" component={StockListPage} />
        <Route path="/search" component={SearchNewsPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
