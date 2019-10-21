import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    viewPassword(){
        let passwordInput = document.getElementById('password-field');
        let passStatus = document.getElementById('pass-status');
        if (passwordInput.type === 'password')
        {
          passwordInput.type='text';
          passStatus.className='fa fa-eye-slash';
        }
        else
        {
          passwordInput.type='password';
          passStatus.className='fa fa-eye';
        }
    }
    render(){
        return(
            <div className="text-center container">
                <h1><strong>SignUp Today</strong></h1>
                <p className="text-color">Sign up to make your orders for your favourite products in <br/>
                the closet store available to you.</p>
               <div className="signup-options">
                    <button className="btn btn-light btn-block sign-up-facebook"><i className="fa fa-facebook" aria-hidden="true"></i>&nbsp; &nbsp; <strong>Sign up with Facebook</strong></button><br/>
                    <button className="btn btn-light btn-block sign-up-google"><i className="fa fa-google" aria-hidden="true"></i>&nbsp; &nbsp; <strong>Sign up with Google</strong></button><br/>
                    <Link to="/SignUp" ><button className="btn btn-success btn-block sign-up-button"><strong>Sign up</strong></button></Link><br/><br/> 
               </div>
               <hr className="signup-line" />
                <div className="signup-login">
                    <form>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 margin-username">
                                <input className="form-control form-rounded" type="text" placeholder="Username" required />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input id="password-field" className="form-control form-rounded" type="password" placeholder="Password" required />
                                <span className="p-viewer">
                                <i id="pass-status" className="fa fa-eye" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                </span>
                            </div>
                        </div>
                        <br/>
                        <button className="btn btn-success btn-block sign-in-button"><strong>Sign in</strong></button>
                    </form>
                </div><br/><br/>
                <p className="text-color">By signing up i agree to the <a href="terms.html" className="text-red">terms</a> of service and <a href="privacy-policy.html" className="text-red">privacy policy</a></p>
                
            </div>
        );
    }
}
export default Home;