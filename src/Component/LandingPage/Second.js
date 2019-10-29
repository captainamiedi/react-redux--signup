import React from 'react';
import styled from 'styled-components';
import {ButtonContainer} from '../Reuseable/Button';

function Second() {
    return (
        <SecondWrapper>
            <h2 className="text-center mt-3"><strong>How it works</strong></h2>
            <div className="row justify-content-center cont">
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <i className="fas fa-shopping-cart mt-5 fa-3x"></i>  
                    <p className="numbering">1</p>                  
                    <div className="card-body">
                        <h5 className="card-title disc">You browse your favorite store</h5>
                        <p className="card-text disc-bottom">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow rounded">
                    <i className="fas fa-shopping-bag mt-5 fa-3x"></i>
                    <p className="numbering">2</p> 
                    <div className="card-body">
                        <h5 className="card-title disc">We shop for you as we would for ourselves</h5>
                        <p className="card-text disc-bottom">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
                {/* </div> */}
                <div className="col-9 mx-0 col-md-6 col-lg-3 my-3 text-center">
                <div className="card shadow ">
                    <i className="fas fa-truck mt-5 fa-3x"></i>
                    <p className="numbering">3</p> 
                    <div className="card-body">
                        <h5 className="card-title disc">We deliver your order in 0ne hour</h5>
                        <p className="card-text disc-bottom">fill your cart with product from your favorite store</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="text-center">

                <p className="p-3"><button className="btn-success learn-more" type="submit">
                    Learn more
                    </button></p>
            </div>
        </SecondWrapper>
    )
}

const SecondWrapper = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    background-color: #FA9B42;
`;
export default Second
