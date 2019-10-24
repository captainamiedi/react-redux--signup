import React from 'react';
import Navbar from './Navbar';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';
import Address from '../Address/Location';

function LandingPage() {
    return (
        <div>
            {/* <Navbar /> */}
            <div style={{height:'90vh'}}>
            <First />
            <Address/>
            </div>
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Footer />
        </div>
    )
}

export default LandingPage
