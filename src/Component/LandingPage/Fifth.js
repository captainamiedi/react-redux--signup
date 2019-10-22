import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shoprite from '../../images/shprite.jpg'
import image1 from '../../images/images (1).png'
import image2 from '../../images/images.png'
import image3 from '../../images/smartmart.png'
import styled from 'styled-components';

export default class Fifth extends Component {
    render() {
      const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <FifthWrapper>
          <Slider {...settings}>
            <div>
              <img src={shoprite} alt="photo1" style={{width: '50%', height: 'auto'}} />
            </div>
            <div>
            <img src={image1} alt="photo1" style={{width: '50%', height: 'auto'}} />
            </div>
            <div>
            <img src={image2} alt="photo1" style={{width: '50%', height: 'auto'}} />
            </div>
            <div>
            <img src={image3} alt="photo1" style={{width: '50%', height: 'auto'}} />
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </FifthWrapper>
      );
    }
}

const FifthWrapper = styled.div`
    background-color: #eaeaea
`;