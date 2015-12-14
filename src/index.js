import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, Link } from 'react-router';
import { Router, Route } from 'react-router';

import Component from './Component';
import Component from './Header';
import NewSession from './NewSession';

const NoMatch = React.createClass({
  render() {
    return <div>Not Found</div>;
  }
});

window.onload = () => {
  render((
    <div>
      <Header />
      <Router>
        <Route path='/' component={Component} />
        <Route path='/new' component={NewSession} />
        <Route path='*' component={NoMatch} />
      </Router>
    </div>
    ),
    document.querySelector('#container')
  );
};
