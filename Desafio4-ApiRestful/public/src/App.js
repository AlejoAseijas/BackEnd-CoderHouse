import React from "react";
import Cards from "./components/cards/Cards";
import Menu from "./components/navbar/Menu";
import FormApiData from "./components/form/FormApiData";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Cards />
          </Route>
          <Route exact path="/create">
            <FormApiData />
          </Route>
          <Route exact path="/edit">
            <FormApiData />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
