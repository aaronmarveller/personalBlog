import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Blog from './pages/blog/blog';

export default class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Blog}/>
          </Switch>
        </BrowserRouter>
    );
  }

}
