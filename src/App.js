import React, { Component } from 'react';
import Main from './components/MainComponent';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap-social/bootstrap-social.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
