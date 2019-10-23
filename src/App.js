import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import LandingPage from './Component/LandingPage/Index';
import About from './Component/About/About';
import Navbar from './Component/LandingPage/Navbar';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Switch> */}
          {/* <Router> */}
            <div className="">
        <Navbar />

              <Route exact path="/" component={LandingPage} />
              <Route path="/about" component={About} />
            </div>

          {/* </Router> */}


          {/* </Switch> */}
        </BrowserRouter>
        {/* <LandingPage /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
