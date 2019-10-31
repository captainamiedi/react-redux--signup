import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import books from '../../images/bookcase-books.jpg';
import clothes from '../../images/clothes.jpg';
import crate from '../../images/crate-food.jpg';


function First() {
    return (
        <FirstWrapper>
            <Carousel autoPlay interval={1000} infiniteLoop showThumbs={false}  className="carousel">
                <div className="carousel-container">
                    <img src={books} alt="phone" style={{width: '100%'}}/>
                </div>
                <div>
                    <img src={clothes} alt="carousel" tyle={{width: '50%'}}/>
                    {/* <p>second carousel</p> */}
                </div>
                <div>
                    <img src={crate} alt="carousel1" tyle={{width: '50%'}} />
                    {/* <p>third carousel</p> */}
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
