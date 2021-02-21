import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import '../node_modules/bootstrap-social/bootstrap-social.css';
import './App.css';

class App extends Component {
  render() {
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
