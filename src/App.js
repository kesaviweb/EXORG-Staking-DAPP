import React,{useState} from "react";
import { Switch, Route } from "react-router-dom";
import StakingPage2 from "./pages/StakingPage2";

const App = () => {


  return (
    <>
    <Switch>
      <Route path="/" exact>
        <StakingPage2  />
      </Route>
    </Switch>
  </>
  );
};

export default App;
