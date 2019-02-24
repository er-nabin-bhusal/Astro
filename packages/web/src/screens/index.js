import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
export default index;
