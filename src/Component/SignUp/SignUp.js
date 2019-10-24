import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        city: '',
        country: '',
        username: '',
        password: '',
        confirmPassword: '',
        countries: [],
        cities: [],
        checkPasswords: 'none',
        errorEmail: 'none',
        errorPhone: 'none',
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
            emailAddress: e.target.value
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
            phoneNumber: e.target.value
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


    //Handling of the form when you submit
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.firstName ===''|| this.state.lastName ==='' || this.state.emailAddress ==='' || this.state.phoneNumber ==='' || this.state.address ==='' || this.state.city ==='' ||this.state.country ==='' || this.state.username ==='' || this.state.password ==='' || this.state.confirmPassword ===''){
            return false;
        }
        else if(this.state.password===this.state.confirmPassword){
            console.log(this.state);
            return true;
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
        return(
            <div>
                <div className="text-center container">
                    <h1><strong>SignUp Today</strong></h1>
                    <p className="text-color">Sign up to make your orders for your favourite products in <br/>
                the closet store available to you.</p>
                    <div className="signup-form">
                        <form onSubmit = {this.handleSubmit} noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="First Name" required value={this.state.firstName} onChange = {(e)=>  {this.handleChange('firstName',e)}} />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control form-rounded" type="text" placeholder="Last Name" required value={this.state.LastName} onChange = {(e)=>  {this.handleChange('lastName',e)}} />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="Email Address" required value={this.state.emailAddress} onChange = {(e)=>  {this.validateEmail(e)}} />
                                    <div className="feedback-error" style={{display:this.state.errorEmail}}>
                                        Email is required
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control form-rounded" type="tel" inputmode="numeric" pattern="[0-9]*" placeholder="Phone Number" required value={this.state.phoneNumber} onChange = {(e)=>  {this.validatePhoneNumber(e)}} />
                                    <div className="feedback-error" style={{display:this.state.errorPhone}}>
                                        Phone Number is required
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                <input className="form-control form-rounded margin-input" type="text" placeholder="Address" required value={this.state.address} onChange = {(e)=>  {this.handleChange('address',e)}} />
                                </div><br/>
                                <div className="col-md-6">
                                <input className="form-control form-rounded" type="text" placeholder="Username" required  value={this.state.username} onChange = {(e)=>  {this.handleChange('username',e)}} />
                            </div>
                            </div><br/>
                            <div className="row">
                            <div className="col-md-6">
                                <select className="form-control form-rounded margin-input" type="text" required onChange = {(e)=>  {this.handleCountryChange('country',e)}}>
                                    <option value="">Country</option>
                                    {this.state.countries.map((country, i) =>{
                                        return(<option key={i} value={country}>{country}</option>);
                                    })}
                                </select>
                            </div>
                                <div className="col-md-6">
                                    <select className="form-control form-rounded" type="text" placeholder="City" required onChange = {(e)=> {this.handleChange('city',e)}}>
                                    <option value="">City</option>
                                    {this.state.cities.map((city, i) =>{
                                        return(<option key={i} value={city}>{city}</option>);
                                    })}
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <input id="password-field" className="form-control form-rounded margin-input" type="password" placeholder="Password" required  value={this.state.password} onChange = {(e)=>  {this.handleChange('password',e)}} />
                                    <span className="p-viewer2">
                                    <i id="pass-status" className="fa fa-eye" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                    </span>
                                </div>
                                <br/>
                                <div className="col-md-6">
                                    <input id="confirm-password-field" className="form-control form-rounded" type="password" placeholder="Confirm Password" required  value={this.state.confirmPassword} onChange={this.handleChangeConfirmPasswords} ref={this.confirmPasswordInput}  />
                                    <span className="p-viewer2">
                                    <i id="confirm-pass-status" className="fa fa-eye" onClick={this.viewConfirmPassword} aria-hidden="true"></i>&nbsp; &nbsp;
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
                        <p className="text-color">By signing up i agree to the <a href="terms.html" className="text-red">terms</a> of service and <a href="privacy-policy.html" className="text-red">privacy policy</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignUp;