import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchNewsPage from "./pages/SearchNewsPage";
import StockListPage from "./pages/StockListPage";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stock" component={StockListPage} />
        <Route path="/search" component={SearchNewsPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
