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
                    <img src="" alt="carousel" />
                    <p>second carousel</p>
                </div>
                <div>
                    <img src="" alt="carousel1" />
                    <p>third carousel</p>
                </div>
            </Carousel>
        </FirstWrapper>
    )
}

const FirstWrapper = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    
`

export default First
