import React from 'react';
class Contact extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center container">
                        <h1><strong>Contact Us</strong></h1>
                        <div className="signup-form">
                            <form>
                                <div>
                                    <input className="form-control form-rounded" type="text" placeholder="Name" required />
                                </div><br/>
                                <div>
                                    <input className="form-control form-rounded" type="text" placeholder="Phone Number" required />
                                </div><br/>
                                <div>
                                    <input className="form-control form-rounded" type="email" placeholder="Email" required />
                                </div><br/>
                                <div>
                                    <textarea className="form-control form-rounded" required>Message</textarea>
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
        );
    }
}
export  default Contact;