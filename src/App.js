import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { Header } from "./components/index";
import { MainHome, DataHome, Error } from "./pages/index";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainHome} />
        <Route exact path="/salesdata" component={DataHome} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
