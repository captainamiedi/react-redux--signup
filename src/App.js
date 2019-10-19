import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import LandingPage from './Component/LandingPage/Index';

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
