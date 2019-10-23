import React from 'react';
//import { Link } from 'react-router-dom';
import Navbar from '../LandingPage/Navbar';
import axios from 'axios';
class SignUpPro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        firstName: '',
        secondName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        city: '',
        country: '',
        username: '',
        password: '',
        countries: [],
        cities: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
   // Updating field state
    handleChange= (field, e) => {
        this.setState({
            [field]: e.target.value
            }
        );
    }

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
        console.log(this.state);
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
                <Navbar /><br/>
                <div className="text-center container">
                    <h1><strong>SignUp as a PRO Today</strong></h1>
                    <p className="text-color">Sign up to pickup orders for people.</p>
                    <div className="signup-form">
                        <form onSubmit = {this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="First Name" required value={this.state.firstName} onChange = {(e)=>  {this.handleChange('firstName',e)}} />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control form-rounded" type="text" placeholder="Last Name" required value={this.state.LastName} onChange = {(e)=>  {this.handleChange('LastName',e)}} />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <input className="form-control form-rounded margin-input" type="text" placeholder="Email Address" required value={this.state.emailAddress} onChange = {(e)=>  {this.handleChange('emailAddress',e)}} />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control form-rounded" type="number" placeholder="Phone Number" required value={this.state.phoneNumber} onChange = {(e)=>  {this.handleChange('phoneNumber',e)}} />
                                </div>
                            </div>
                            <br/>
                            <div>
                                <input className="form-control form-rounded" type="text" placeholder="Address" required value={this.state.address} onChange = {(e)=>  {this.handleChange('address',e)}} />
                            </div><br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <select className="form-control form-rounded margin-input" type="text" placeholder="City" required onChange = {(e)=> {this.handleChange('city',e)}}>
                                    <option value="">City</option>
                                    {this.state.cities.map((city, i) =>{
                                        return(<option key={i} value={city}>{city}</option>);
                                    })}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <select className="form-control form-rounded" type="text" required onChange = {(e)=>  {this.handleCountryChange('country',e)}}>
                                        <option value="">Country</option>
                                        {this.state.countries.map((country, i) =>{
                                            return(<option key={i} value={country}>{country}</option>);
                                        })}
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div>
                                <input className="form-control form-rounded" type="text" placeholder="Username" required />
                            </div><br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <input id="password-field" className="form-control form-rounded margin-input" type="password" placeholder="Password" required />
                                    <span className="p-viewer">
                                    <i id="pass-status" className="fa fa-eye" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                    </span>
                                </div>
                                <br/>
                                <div className="col-md-6">
                                    <input id="confirm-password-field" className="form-control form-rounded" type="password" placeholder="Confirm Password" required />
                                    <span className="p-viewer">
                                    <i id="confirm-pass-status" className="fa fa-eye" onClick={this.viewConfirmPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                                    </span>
                                </div>
                            </div>
                            <br/>
                            <button className="btn btn-success btn-block sign-up-button"><strong>Sign Up</strong></button>
                        </form><br/>
                        <p className="text-color">By signing up i agree to the <a href="terms.html" className="text-red">terms</a> of service and <a href="privacy-policy.html" className="text-red">privacy policy</a></p>
                    </div>
                </div>         
            </div>
        );
    }
}
export default SignUpPro;