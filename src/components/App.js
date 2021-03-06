import React, { Component } from "react";
// import logo from "../logo.svg";
import "../styles/App.css";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
class App extends Component {
  render() {
    return (
      <div className="center w85">
        <h1>React + GraphQL</h1>
        <h2>Hacker News Clone</h2>
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
