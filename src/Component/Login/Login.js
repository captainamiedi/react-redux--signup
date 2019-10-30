import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import { userActions } from '../../Store/Actions/UserAction';
//import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import  Navbar from '../LandingPage/Navbar';

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
        const { username, password} = this.state;
        // let formData = new FormData();
        // formData.append('username', username);
        // formData.append('password', password);
        if (username && password) {
            this.props.login(username, password);
        }
        // console.log(this.props);
        // console.log(formData)
        console.log(typeof(username.toString()), typeof(password));
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
        const { loggingIn, loggedIn } = this.props;
        if (loggingIn) {
            return (
                <div style={{transform: 'translate(50%, 50%)', paddingTop: '10rem' }}>
                <Loader
                    type="Audio"
                    color="#fe6948"
                    height={100}
                    width={100}
                    timeout={8000} //3 secs
                />
                </div>
            )
        } 
        else if (loggedIn){
            return (
                <Redirect to="store" />
            )} 
            else {
        return(
            <React.Fragment>
             <Navbar />
            <LoginWrapper className="text-center container">
                <div className="">
                <h1 className="log"><strong>Log In</strong></h1>
                <div className="username">
                    <input className="form-control" 
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                        name="username"
                    />
                </div>
                <div className="username">
                    <input className="form-control" 
                        type="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        name="password"
                    />
                </div>
                <div className="username">
                    <button className="btn btn-success btn-block sign-in-button" onClick={this.handleSubmit}><strong>Log in</strong></button>
                    {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                </div>
                    <p>Login with</p>
                    <div className="social">
                        <div className="social-facebook">
                            <FacebookLogin
                                appId={"'"+process.env.REACT_APP_FACEBOOK_APP_ID+"'"}
                                autoLoad
                                callback={this.responseFacebook}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} className="btn btn-light  sign-up-facebook"><strong>Facebook</strong></button>
                                )}
                            />
                        </div>
                        <div className="social-google">
                            <GoogleLogin
                                clientId= {process.env.REACT_APP_GOOGLE_APP_ID}
                                render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}className="btn btn-light sign-up-google"> <strong>Google</strong></button>
                                )}
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                    <div className="forget">
                        <Link to="">Forgot Password?</Link>
                    </div>
                    <div className="member">
                        <p>Not a Memeber yet?</p>
                        <Link to="/signup">Sign Up</Link>
                        
                    </div>
                </div>
                    {/* {loggingIn &&

                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        } */}
               {/*  */}
            </LoginWrapper>
            </React.Fragment>
        );
                    }
    }
}

const mapStateToProps = (state) => {
    const { loggingIn, loggedIn } = state.authentication;
    return { loggingIn, loggedIn };
}

const actionCreators = {
    login: userActions.login
};

const LoginWrapper = styled.div`
    .log {
        padding-top: 8%;
        padding-bottom: 28px
    }
    .login-custom{
        transform: translate(50%, 50%)
    }
    .username {
        display: flex;
        justify-content: center;
        padding: 15px
    }

    input {
        width: 30%;
        border-radius: 20px;
        padding: 22px;
    }
    .username button {
        width: 30%
    }
    .social {
        display: flex;
        justify-content: center
    }
    .redirectLoginLoader {
        min-height: calc(100vh - 10.5rem);
        padding-top: 10.5rem;
      }

    .social-facebook {
        padding: 0px 10px;
    }
    .social-facebook button{
        background: #3B5998 !important;
        color: #ffffff !important
    }
    .social-google {
        padding: 0px 10px
    }
    .social-google button {
        background: #F22727 !important;
        color: #ffffff !important
    }
    .kSInCP {
        padding: 0px !important;
    }
    .social-google button strong {
        padding: 0px 20px
    }
    .social-facebook button strong {
        padding: 0px 12px
    }
    .member {
        display: flex;
        justify-content: center;
        padding: 17px
    }
    .forget {
        padding: 15px
    }

    @media (max-width: 780px) {
        .username button {
            width: 100%
        }
        input {
            width: 100%
        }
    }
`;
export default connect(mapStateToProps, actionCreators)(Login);