import React from 'react';
import styled from 'styled-components';
import {ButtonContainer} from '../Reuseable/Button';
import delivery from '../../images/adult-bike.jpg';
import store from '../../images/superstore.jpg';
import "./style.css";


export default function Fourth() {
    return (
        <FourthWrapper>
            <h2 className="text-center mt-3" id="work-with-us">work with us</h2>
            <div className="row justify-content-center">
                <div className="col-9 mx-0 col-md-6 col-lg-4 my-3 text-center">
                <div className="house-heading">
                    <p className="first-heading"> Become a Delivery Agent</p>
                </div>
                <div className="card shadow rounded">
                    <img src={delivery} className="card-img-top" alt="..." />                   
                    <div className="card-body">
                        {/* <h5 className="card-title text-capitalize first-heading">Become a delivery agent</h5> */}
                        <p className="second-heading">Fill your cart with product from your favorite store.</p>
                        <div className="apply shadow rounded work-with-us-both">
                            {/* <ButtonContainer> */}
                            <p>Apply</p>
                                
                            {/* </ButtonContainer> */}
                        </div>
                    </div>
                </div>
                </div>  
                <div className="col-9 mx-0 col-md-6 col-lg-4 my-3 text-center">
                <div className="house-heading">
                    <p className="first-heading">For Store Owner</p>
                </div>
                <div className="card shadow rounded">
                    <img src={store} className="card-img-top" alt="..." />                   
                    <div className="card-body">
                        {/* <h5 className="card-title only first-heading">For Store Owner</h5> */}
                        <p className="second-heading">Fill your cart with product from your favorite store.</p>
                        <div className="apply shadow rounded work-with-us-both">
                            {/* <ButtonContainer> */}
                            <p>Apply</p>
                                {/* </ButtonContainer> */}
                        </div>
                    </div>
                </div>
                </div> 
            </div>
        </FourthWrapper>
    )
}

const FourthWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 30px;
    background-color: #eaeaea;
`;
