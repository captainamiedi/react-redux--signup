import React from 'react';
import styled from 'styled-components';
import {ButtonContainer} from '../Reuseable/Button';
import delivery from '../../images/adult-bike.jpg';
import store from '../../images/superstore.jpg';

export default function Fourth() {
    return (
        <FourthWrapper>
            <h2 className="text-center mt-3"><strong>Work with us</strong></h2>
            <div className="row justify-content-center">
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <img src={delivery} className="card-img-top" alt="..." />                   
                    <div className="card-body">
                        <h5 className="card-title text-capitalize">Become a delivery agent</h5>
                        <p className="card-text">Fill your cart with product from your favorite store.</p>
                        <div className="apply shadow rounded">
                            {/* <ButtonContainer> */}
                                Apply
                            {/* </ButtonContainer> */}
                        </div>
                    </div>
                </div>
                </div>  
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <img src={store} className="card-img-top" alt="..." />                   
                    <div className="card-body">
                        <h5 className="card-title only">For Store Owner</h5>
                        <p className="card-text">Fill your cart with product from your favorite store.</p>
                        <div className="apply shadow rounded">
                            {/* <ButtonContainer> */}
                                Apply
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
    background-color: #eaeaea

    .only {
        padding-bottom: 24px
    }
`;
