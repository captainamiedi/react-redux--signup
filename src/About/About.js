import React from 'react';
import './About.scss';
const About = (props) => {
        return(
            <div>
            <img src="onekiosk.jpg" alt="one kiosk" className="img-responsive" width="100%" />
                <div className="about-bg-1"><br/><br/>
                    <h1 className="text-center">About Us</h1><br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <h3 className="text-center">Header 1</h3>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center">Header 2</h3>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center">Header 3</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default About;