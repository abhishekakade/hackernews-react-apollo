import React, { Component } from "react";
// import logo from "../logo.svg";
import "../styles/App.css";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";

class App extends Component {
  render() {
    return (
      <div className="" style={{ textAlign: "center" }}>
        <h1>GraphQL + React</h1>
        <h2>How to GraphQL</h2>
        <h3>List of Links</h3>
        <LinkList />
        <h3>Add new Link</h3>
        <CreateLink />
      </div>
    );
  }
}

export default App;
