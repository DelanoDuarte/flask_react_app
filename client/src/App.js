import React, { Component } from 'react';
import './App.css';

import SideMenu from './layout/SideMenu'
import Login from "./login/LoginComponent";

import { LoginUtil } from "./common/login-utils";
import { Fade } from '@material-ui/core';

const loginUtils = new LoginUtil()

const LayoutApp = () => (
  <div className="App">
    <div className="App-intro">
      <SideMenu />
    </div>
  </div>
)

const LoginAppComponent = () => (
  <div>
    <Login />
  </div>
)


const IndexApp = () => {
  if (loginUtils.isUserLoggedIn())
    return <LayoutApp />

  return <LoginAppComponent />
}

class App extends Component {
  render() {
    return (
      <Fade in={true}>
        <IndexApp />
      </Fade>
    );
  }
}

export default App;
