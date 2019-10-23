import React from 'react';
import Navbar from '../LandingPage/Navbar';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phoneNumber: '',
            email: '',
            message: ''
        }

    }
    
    // Updating field state
    handleChange= (field, e) => {
        this.setState({
            [field]: e.target.value
            }
        );
    }
    
    //Handling of the form when you submit
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <Navbar /><br/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-center container">
                            <h1><strong>Contact Us</strong></h1>
                            <div className="signup-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div>
                                        <input className="form-control form-rounded" type="text" placeholder="Name" required value={this.state.name} onChange = {(e)=>  {this.handleChange('name',e)}} />
                                    </div><br/>
                                    <div>
                                        <input className="form-control form-rounded" type="text" placeholder="Phone Number" required value={this.state.phoneNumber} onChange = {(e)=>  {this.handleChange('phoneNumber',e)}} />
                                    </div><br/>
                                    <div>
                                        <input className="form-control form-rounded" type="email" placeholder="Email" required value={this.state.email} onChange = {(e)=>  {this.handleChange('email',e)}} />
                                    </div><br/>
                                    <div>
                                        <textarea className="form-control form-rounded" required onChange = {(e)=>  {this.handleChange('message',e)}}>Message</textarea>
                                    </div>
                                    <br/>
                                    <button className="btn btn-success btn-block sign-up-button"><strong>Submit</strong></button>
                                </form>
                            </div>         
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                    <h2>Support</h2>
                    <p>Email: info@onekiosk.com</p>
                    <p>Tel: 08123456754</p>
                    </div>
                </div>
            </div>
        );
    }
}
export  default Contact;