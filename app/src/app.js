import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./app.css";
import MainPage from "./views/MainPage";

export default class App extends Component {
  render () {
    const { history, ...props } = this.props;

    return(
      <Router {...props}>
      <div className="app">
        <Route path="/" exact component={MainPage} />
      </div>
      </Router>
    );
  }
};
