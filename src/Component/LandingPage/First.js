import React from 'react';
import styled from 'styled-components';
import phone from '../../images/Phone.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


function First() {
    return (
        <FirstWrapper>
            <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}  className="carousel">
                <div className="carousel-container">
                    <div>
                        <p>first carousel</p>
                        <button>search</button>
                    </div>
                    <img src={phone} alt="phone" style={{width: '25%'}}/>
                </div>
                <div>
                    <img src="" alt="photo" />
                    <p>second carousel</p>
                </div>
                <div>
                    <img src="" alt="photo1" />
                    <p>third carousel</p>
                </div>
            </Carousel>
            <div className="location-search">
                <div className="search">
                    <h3>search</h3>
                </div>
            </div>
        </FirstWrapper>
    )
}

const FirstWrapper = styled.div`
    display: flex;
    width: 100%;
    
`

export default First
