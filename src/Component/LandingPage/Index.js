import React, { Component } from 'react';
import Navbar from './Navbar';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Footer from './Footer';
import Address from '../Address/Location';
import Modal from '../Reuseable/Modal';

class LandingPage extends Component {

    // state = {
    //     isOpen: false
    // }

    // openModal = () => {
    //     this.setState({
    //         isOpen: true
    //     })
    // }
    // closeModal = () => {
    //     this.setState({
    //         isOpen: false
    //     })
    // }
    render () {
        return (
            <div>
                <Navbar />
                {/* <div style={{height:'90vh'}}> */}
                <First />
                <Address/>
                {/* </div> */}
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Footer />
                {/* <Modal 
                   onCloseModal={this.closeModal} 
                   content = {
                       <div>modal</div>
                   }
                /> */}
            </div>
        )
    }
}

export default LandingPage
