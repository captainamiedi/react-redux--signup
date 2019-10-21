import React from 'react';
import styled from 'styled-components';
import phone from '../../images/Phone.png';
import playStore from '../../images/appStore.png';
import app from '../../images/playStore.png';
import mobile from '../../images/moblie2.jpg'

export default function Third() {
    return (
        <ThirdWrapper>
            <div className="d-flex justify-content-around">
                <div className="col-lg-3 text-center text-white text-center">
                    <h1 className="pt-5 mt-5 download">Download The App Now!!!</h1>
                </div>
                {/* <div> */}
                    <img src={phone} alt="phone" style={{width: '30%'}} />
                {/* </div> */}
                </div>
                <div className="d-flex justify-content-end download-app">
                    <img src={playStore} alt="play" style={{width: '15%', paddingLeft: '20px', paddingRight: '20px'}} />
                    <img src={app} alt="iphone" style={{width: '15%', paddingLeft: '20px', paddingRight: '20px'}}/>
                </div>
            {/* </div> */}
        </ThirdWrapper>
    )
}

const ThirdWrapper = styled.div`
   background-image: url(${mobile})
`;