import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Cookies from 'js-cookie';
import './App.css';
import Home from './pages/Home';
import Room from './pages/Room';
import Login from './pages/Login';

function getSession() {
  console.log(Cookies.get());
  let jwt = Cookies.get('_session');
  if (jwt) {
    return true;
  }
  return false;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          getSession() ?
            <Home /> :
            <Redirect to="/login" />
        )} />
        <Route path="/rooms/:id"  render={() => (
          getSession() ?
            <Room /> :
            <Redirect to="/login" />
        )} />
        <Route path="/login"  render={() => (
          getSession() ?
            <Home /> :
            <Login />
        )} />
      </Switch>
    </Router>
  );
}

export default App;
