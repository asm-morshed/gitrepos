import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserName from './Components/UserName';
import ProfileGithub from './Components/ProfileGithub';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserName />
          <ProfileGithub />
        </div>
      </Provider>
    );
  }
}

export default App;
