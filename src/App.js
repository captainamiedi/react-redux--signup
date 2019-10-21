import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import LandingPage from './Component/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </div>
  );
}

export default App;
