import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'react-toastify/dist/ReactToastify.min.css' 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import ReduxToastr from 'react-redux-toastr'
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import'./styles.scss';
import store from './Store/store';
import LandingPage from './Component/LandingPage/Index';
import About from './Component/About/About';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Navbar from './Component/LandingPage/Navbar';
import Stores from './Component/Stores/Stores';
import StoreDetails from './Component/StoreDetails/index';
// import Modal from './Component/Reuseable/Modal';

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
      <ToastContainer autoClose={false}  />
        
        <BrowserRouter>
          {/* <Switch> */}
          {/* <Router> */}
            <div className="">

              <Route exact path="/" component={LandingPage} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path = "/store" component={Stores} />
              <Route path ="/details" component={StoreDetails} />
            </div>

          {/* </Router> */}


          {/* </Switch> */}
        </BrowserRouter>
        {/* <Modal ref={(node) => {this.modal = node}} /> */}
      </Provider>
    </React.Fragment>
  );
}

export default App;
