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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        // marginLeft: '20px',
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <FifthWrapper>
          <Slider {...settings}>
            <div className="our-partners">
            <div style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "80%", height: "100%", backgroundImage: "url("+shoprite+")"}}>

            </div>
              {/* <img src={shoprite} alt="photo1" style={{width: '50%', height: 'auto'}} /> */}
            </div>
            <div className="our-partners">
            <div style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "80%", height: "100%", backgroundImage: "url("+image1+")"}}>

                 </div>
            {/* <img src={image1} alt="photo1" style={{width: '50%', height: 'auto'}} /> */}
            </div>
            <div className="our-partners">
                {/* <img src={image2} alt="photo1" style={{width: '50%', height: 'auto'}} /> */}
                <div style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "80%", height: "100%", backgroundImage: "url("+image2+")"}}>

                 </div>
            </div>

             <div className="our-partners">
                 <div style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "80%", height: "100%", backgroundImage: "url("+image3+")"}}>

                 </div>
                {/* <img src={image3} alt="photo1" style={{width: '50%', height: 'auto'}} /> */}
            </div> 

            <div className="our-partners">
                 <div style={{backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", width: "80%", height: "100%", backgroundImage: "url("+image2+")"}}>

                 </div>
                {/* <img src={image3} alt="photo1" style={{width: '50%', height: 'auto'}} /> */}
            </div> 
          </Slider>
        </FifthWrapper>
      );
    }
}

const FifthWrapper = styled.div`
    
    padding-top: 100px;
    padding-bottom: 80px;
`;