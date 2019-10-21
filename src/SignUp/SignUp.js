import React from 'react';
//import { Link } from 'react-router-dom';
import './SignUp.scss';
class SignUp extends React.Component {
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
                <h1><strong>SignUp</strong></h1>
                <div className="signup-form">
                    <form>
                        <div>
                            <input className="form-control form-rounded" type="text" placeholder="Name" required />
                        </div><br/>
                        <div>
                            <input className="form-control form-rounded" type="text" placeholder="Address" required />
                        </div><br/>
                        <div>
                            <input className="form-control form-rounded" type="text" placeholder="Username" required />
                        </div><br/>
                        <div>
                            <input id="password-field" className="form-control form-rounded" type="password" placeholder="Password" required />
                            <span className="p-viewer">
                            <i id="pass-status" className="fa fa-eye" onClick={this.viewPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                            </span>
                        </div>
                        <br/>
                        <div>
                            <input id="confirm-password-field" className="form-control form-rounded" type="password" placeholder="Confirm Password" required />
                            <span className="p-viewer">
                            <i id="confirm-pass-status" className="fa fa-eye" onClick={this.viewConfirmPassword} aria-hidden="true"></i>&nbsp; &nbsp;
                            </span>
                        </div>
                        <br/>
                        <button className="btn btn-success btn-block sign-up-button"><strong>Sign Up</strong></button>
                    </form>
                </div>         
            </div>
        );
    }
}
export default SignUp;