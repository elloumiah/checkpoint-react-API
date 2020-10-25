import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./Components/UserList";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navb from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route ecact path="/users" component={UserList} />
      </Switch>
    </div>
  );
}

export default App;