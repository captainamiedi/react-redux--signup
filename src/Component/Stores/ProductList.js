import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Catergory from './Catergory';
import closed from '../../images/closed_store_one_kiosk.png'
import open from '../../images/open_store.png';


export default function ProductList(props) {

    const {img, category, name, isClosed } = props.product
    const handleDetails = props.details
    console.log(typeof(handleDetails));
    let size = 4;
    return (
        <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card" onClick={ handleDetails}>
                <Link to="/details">
                <div className="img-container">
                    <div className="img-second-container">
                        <img src={img} alt="product" className="card-img-top" />
                    </div>
                </div>
                <hr/>
                <div className="one">
                    <h4 className="vendor-name">{name}</h4>
                    <div className="row row-rating">
                    <span className="fa fa-star  checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    </div>
                </div>
                <div className="container">
                    <div className="" style={{position: 'relative'}}>
                        <div className="row">
                            {category.slice(0, size).map((cat, index) => {
                                return <Catergory key={index} category={cat} />
                            })}
                            </div>
                            <div className="">
                        <div className="btn-container" disabled={isClosed ? true : false} >
                            {isClosed ? (<img src={closed} />) : (<img src={open} />)}
                        </div>
                            </div>
                        {/* </div> */}

                    </div>
                </div>
                </Link>
            </div>  
        </ProductWrapper>
    )
}

const ProductWrapper = styled.div`
&hover {
    background: rgba(0,0,0,0.7)
}
.card{
    border-color: transparent;
    transition: all 1s linear;
}

.img-container{
    position: relative;
    overflow: hidden;
    padding-bottom: 10px
    align-items: center;
}

.img-second-container {
    height: 142px;
    width: 85%;
    object-fit: fill;
    align-items: center;
}
.card-img-top{
    transition: all 1s linear; 
    width: 50%;
    object-fit: fill;
    transform: translate(71px, 10px);
    padding-top: 20px
}
.btn-container {
    transform: translate(87px, 0px);
    position: absolute;
    top: 16px;
    left: 94px;
}
.row {
    width: 80%;
    padding-left: 11px;

}
.row-rating {
    width: 50% !important
}
.one {
    display: flex;
    padding-left: 11px
}
.vendor-name{
    font-size: 1.2rem;
    padding-left: 5px;
    text-transform: capitalize;
    color: gray;
    font-family: var(--primary-font-family);
    padding-bottom: 4px;
    width: 80%
}
.checked {
    color: #FF9115;
    
}
span.fa {
    font-size: 14px;
    padding-top: 3px
}
`;
