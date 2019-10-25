import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Stores/Title';
import Navbar from '../LandingPage/Navbar'
import {products} from '../../data';
import CategoryDetails from './CategoryDetails';

class StoreDetails extends Component {

    state ={
        products: products,
        detailProduct: []
    }
    
    // getItem = (id) => {
        //     const product = this.state.products.find(item => item.id === id);
        //     return product;
        // }

        // handleDetails = (id) => {
    //     const product = this.getItem(id);
    //     this.setState(()=> {
        //         return { 
    //             detailProduct: product,
    //           }
    //     })
    //   }
    render() {
        const keys = Object.keys(this.state.products[0].category);
        console.log(keys)
        
        // console.log(this.state.products[0].category);
        // console.log(this.props.productDetails.detailsProducts, 'details');
        const { category, img, name } = this.props.productDetails.detailsProducts
        return (
            <div>
                <Navbar name="landing" openModal={this.openModal} closeModal={this.closeModal}/>
                <Title name="payles" />
                {/* {category.map((cat, index) => {
                    return (

                        <CategoryDetails key={index} category = {cat} />
                    )
                })} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productDetails: state.productDetails
});

export default connect(mapStateToProps)(StoreDetails)