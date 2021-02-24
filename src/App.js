import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/News/Home";
import NewsPolitics from "./pages/News/NewsPolitics";
import NewsTechnology from "./pages/News/NewsTechnology";
import NewsWorld from "./pages/News/NewsWorld";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockListPage from "./pages/StockListPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news-technology" component={NewsTechnology} />
        <Route path="/news-politics" component={NewsPolitics} />
        <Route path="/news-world" component={NewsWorld} />
        <Route path="/stock" component={StockListPage} />
        <Route path="/search" component={SearchNewsPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
