import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner'
import { userActions } from '../../Store/Actions/UserAction';
import axios from 'axios';
import Navbar from '../LandingPage/Navbar';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';


class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        country: '',
        username: '',
        password: '',
        confirmPassword: '',
        countries: [],
        cities: [],
        checkPasswords: 'none',
        errorEmail: 'none',
        errorPhone: 'none',
        googleInfo: {}
        }
        this.confirmPasswordInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeConfirmPasswords = this.handleChangeConfirmPasswords.bind(this);
    }
   // Updating field state
    handleChange= (field, e) => {
        this.setState({
            [field]: e.target.value
            }
        );
    }

    validateEmail = (e) => {
        this.setState({
            email: e.target.value
            }
        );
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(re.test(e.target.value))){
            this.setState({
                errorEmail: 'block'
            });
        }else{
            this.setState({
                errorEmail: 'none'
            });
        }
      }
    
    validatePhoneNumber = (e) => {
        this.setState({
            phone: e.target.value
            }
        );
        let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(!(re.test(e.target.value))){
            this.setState({
                errorPhone: 'block'
            });
        }else{
            this.setState({
                errorPhone: 'none'
            });
        }
      }

    // checking if passwords match
    handleChangeConfirmPasswords= (e) => {
        let gottenValue = e.target.value;
        if(gottenValue !== this.state.password || gottenValue===''){
            this.setState({
               confirmPassword: gottenValue,
               checkPasswords: 'block'
                });
                this.confirmPasswordInput.current.focus();
                this.confirmPasswordInput.current.style.border = "thick solid #0000FF"; 
        }else{
            this.setState({
                confirmPassword: e.target.value,
                checkPasswords: 'none'
            });
        }    
    }

    
    //updating city field
    handleCountryChange= (field, e) => {
        this.setState({
            [field]: e.target.value
        });
        let countrySelected = e.target.value;
        if(countrySelected.length > 0){
            axios.get("https://city-api.herokuapp.com/?country="+countrySelected)
            .then((response) => {
                console.log(response);
                if(response.status === 200){
                    this.setState({
                        cities: response.data.cities
                    });
                }
            });
        }else{
            this.setState({
                cities: []
            });
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


    //Handling of the form when you submit
    handleSubmit = (e) => {
        e.preventDefault();
        // if(this.state.firstName ===''|| this.state.lastName ==='' || this.state.emailAddress ==='' || this.state.phoneNumber ==='' || this.state.address ==='' || this.state.city ==='' ||this.state.country ==='' || this.state.username ==='' || this.state.password ==='' || this.state.confirmPassword ===''){
        //     console.log('invalid........'); 
        //     return false;
        // }
        // else
         if(this.state.password === this.state.confirmPassword){
            const 
            {
                firstname, lastname, password, email, state, country, phone
            } = this.state;
            const user = {
                firstname, lastname, password, email, state, country, phone
            }
            console.log(user);
            this.props.register(user)
            // return true;
        }else if(this.state.password!==this.state.confirmPassword){
            return false;
        }
    }

    componentDidMount(){
        axios.get("https://city-api.herokuapp.com/?countries=true")
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                this.setState({
                    countries: response.data.countries
                });
            }
        });
    }

    //Beginning of Password and confirm Password hide and show functions
    viewPassword = () => {
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
    viewConfirmPassword = () => {
        let passwordInput = document.getElementById('confirm-password-field');
        let passStatus = document.getElementById('confirm-pass-status');
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
    //-End of Passwords hide and show

    render(){
        const { registering, registered  } = this.props;
        if (registering) {
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
        } else if (registered) {
            return (
                <Redirect to="login" />
            )
        } 
        return(
            <div>
                <Navbar />
                <SignUpWrapper className="text-center container pt-4 mt-4">
                    <h1><strong>Sign Up</strong></h1>
                    <div className="signup-form">
                        <form onSubmit = {this.handleSubmit} noValidate>
                            <div className="row">

                                <div className="col-md-3 col-sm-d-block">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="First Name" required value={this.state.firstname} onChange = {(e)=>  {this.handleChange('firstname',e)}} />
                                </div>

                                <div className="col-md-3 .d-sm-block">
                                    <input className="form-control form-rounded" type="text" placeholder="Last Name" required value={this.state.Lastname} onChange = {(e)=>  {this.handleChange('lastname',e)}} />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-3">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="Email Address" required value={this.state.email} onChange = {(e)=>  {this.validateEmail(e)}} />
                                    <div className="feedback-error" style={{display:this.state.errorEmail}}>
                                        Email is required
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control form-rounded" type="tel" inputMode="numeric" pattern="[0-9]*" placeholder="Phone Number" required value={this.state.phone} onChange = {(e)=>  {this.validatePhoneNumber(e)}} />
                                    <div className="feedback-error" style={{display:this.state.errorPhone}}>
                                        Phone Number is required
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-3">
                                <input className="form-control form-rounded margin-input" type="text" placeholder="Address" required value={this.state.address} onChange = {(e)=>  {this.handleChange('address',e)}} />
                                </div><br/>
                                <div className="col-md-3">
                                <input className="form-control form-rounded" type="text" placeholder="Username" required  value={this.state.username} onChange = {(e)=>  {this.handleChange('username',e)}} />
                            </div>
                            </div><br/>
                            <div className="row">
                            <div className="col-md-3">
                                <select className="form-control form-rounded margin-input" type="text" required onChange = {(e)=>  {this.handleCountryChange('country',e)}}>
                                    <option value="">Country</option>
                                    {this.state.countries.map((country, i) =>{
                                        return(<option key={i} value={country}>{country}</option>);
                                    })}
                                </select>
                            </div>
                                <div className="col-md-3">
                                    <select className="form-control form-rounded" type="text" placeholder="City" required onChange = {(e)=> {this.handleChange('state',e)}}>
                                    <option value="">City</option>
                                    {this.state.cities.map((city, i) =>{
                                        return(<option key={i} value={city}>{city}</option>);
                                    })}
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-3">
                                    <input id="password-field" className="form-control form-rounded margin-input" type="password" placeholder="Password" required  value={this.state.password} onChange = {(e)=>  {this.handleChange('password',e)}} />
                                    <span className="p-viewer">
                                    <i id="pass-status" className="fa fa-eye p-viewer2 p-viewer4" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                    </span>
                                </div>
                                <br/>

                                <div className="col-md-3">
                                    <input id="confirm-password-field" className="form-control form-rounded" type="password" placeholder="Confirm Password" required  value={this.state.confirmPassword} onChange={this.handleChangeConfirmPasswords} ref={this.confirmPasswordInput}  />
                                    <span className="p-viewer">
                                    <i id="confirm-pass-status" className="fa fa-eye p-viewer2 p-viewer3" onClick={this.viewConfirmPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                    </span>
                                    <div className="feedback-error" style={{display:this.state.checkPasswords}}>
                                        Passwords do not match
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div style={{width: '30%', margin: '0 auto'}}>
                            <button className="btn btn-success btn-block sign-up-button"><strong>Sign Up</strong></button>
                            </div>
                        </form><br/>
                        <p className="with">Sign Up with</p>
                        <div className="social ">
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
                    </div>
                    <div className="forget">
                        <Link to="">Forgot Password?</Link>
                    </div>
                    <div className="member">
                        <p>Already a member?</p>
                        <Link to="/login">Login</Link>  
                    </div>
                </SignUpWrapper>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { registering, registered } = state.registration;
    return { registering, registered};
}

const actionCreators = {
    register: userActions.register
}

const SignUpWrapper = styled.div`
    background: #ffffff;
    .row {
        transform: translate(25%, 10px);
    }
    .with {
        color: 1d1d1d;
        font-family: var(--secondary-font-family)
    }
    ::placeholder {
        color: 1d1d1d;
        padding-left: 20px;
        text-align: center
    }
    .social {
        display: flex;
        justify-content: center
    }

    .social-facebook {
        padding: 0px 10px
    }
    .social-facebook button{
        background: #3B5998 !important;
        color: #ffffff !important
    }
    
    .social-google button {
        background: #F22727 !important;
        color: #ffffff !important
    }
    .social-google button strong {
        padding: 0px 20px
    }
    .member {
        display: flex;
        justify-content: center;
        padding: 17px
    }
    .forget {
        padding: 15px
    }

    @media (max-width: 768px) {
        .row {
            transform: translate(10px, 10px)
        }
        .col-md-3 {
            padding: 4px 30px;
        }
        .p-viewer{
            position: relative
        }
       
        .p-viewer2 {
            position: absolute;
            top: -28px;
            left: 144px; 
        }
        .p-viewer3 {
            position: absolute;
            top: -28px;
            left: 144px; 
        }
        .p-viewer4 {
            position: absolute;
            top: -48px;
            left: 144px; 
        }
    }
`;
export default connect(mapStateToProps, actionCreators)(SignUp);