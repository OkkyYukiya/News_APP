import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import StockLists from "./pages/StockLists";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stocklists" component={StockLists} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
