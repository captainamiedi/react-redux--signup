import React from 'react';
import { Link } from 'react-router-dom';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            googleInfo: {}
        }
    }

    // Updating input state
    handleChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
            }
        );
    }

    // handling of the form when you click on submit
    handleSubmit= (e)=> {
        e.preventDefault();
        console.log(this.state);
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
    responseFacebook = (response) => {
        console.log(response);
      }
  
    responseGoogle = (response) => {
        console.log(response);
        if(response){
            if(typeof response.profileObj !== 'undefined'){
                this.setState({
                    googleInfo: response.profileObj
                });
                alert(this.state.googleInfo.givenName + ' ' + this.state.googleInfo.familyName + ' is logged in');
            }else{
                this.setState({
                    googleInfo: {}
                });
            }
        }
      }
    render(){
        return(
            <div className="text-center container">
                <h1><strong>SignUp Today</strong></h1>
                <p className="text-color">Sign up to make your orders for your favourite products in <br/>
                the closet store available to you.</p>
               <div className="signup-options">
                    <FacebookLogin
                        appId={"'"+process.env.REACT_APP_FACEBOOK_APP_ID+"'"}
                        autoLoad
                        callback={this.responseFacebook}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} className="btn btn-light btn-block sign-up-facebook"><i className="fa fa-facebook" aria-hidden="true"></i>&nbsp; &nbsp;<strong>Sign up with Facebook</strong></button>
                        )}
                    />
                    <br />
            
                    <GoogleLogin
                        clientId= {process.env.REACT_APP_GOOGLE_APP_ID}
                        render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}className="btn btn-light btn-block sign-up-google"><i className="fa fa-google" aria-hidden="true"></i>&nbsp; &nbsp; <strong>Sign up with Google</strong></button>
                        )}
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    /><br/>
                    {/*<button className="btn btn-light btn-block sign-up-facebook"><i className="fa fa-facebook" aria-hidden="true"></i>&nbsp; &nbsp; <strong>Sign up with Facebook</strong></button><br/>
        <button className="btn btn-light btn-block sign-up-google"><i className="fa fa-google" aria-hidden="true"></i>&nbsp; &nbsp; <strong>Sign up with Google</strong></button><br/> */}
                    <Link to="/SignUp" ><button className="btn btn-success btn-block sign-up-button"><strong>Sign up</strong></button></Link><br/><br/> 
               </div>
               <hr className="signup-line" />
                <div className="signup-login">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 margin-input">
                                <input name="username" className="form-control form-rounded" type="text" placeholder="Username" required value={this.state.username} onChange={this.handleChange} />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <input name="password" id="password-field" className="form-control form-rounded" type="password" placeholder="Password" required value={this.state.password} onChange={this.handleChange} />
                                <span className="p-viewer">
                                <i id="pass-status" className="fa fa-eye" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                </span>
                            </div>
                        </div>
                        <br/>
                        <button className="btn btn-success btn-block sign-in-button"><strong>Log in</strong></button>
                    </form>
                    {this.state.googleInfo.givenName}
                </div><br/><br/>
                <p className="text-color">By signing up i agree to the <a href="terms.html" className="text-red">terms</a> of service and <a href="privacy-policy.html" className="text-red">privacy policy</a></p>
                
            </div>
        );
    }
}
export default Login;