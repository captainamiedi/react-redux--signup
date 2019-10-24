import React, { Component } from 'react'
import {products} from '../../data';
import ProductList from './ProductList';
import Title from './Title';
import Navbar from './Navbar';

export default class Stores extends Component {

    state= {
        products: products,
        search: ''
    }
    
    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state.search)
    }

     render() {
        return (
            <React.Fragment>
                <Navbar />
                <Title handleSearch={this.handleSearch} search={this.state.search} handleSubmit={this.handleSubmit} name="payles"/>
                <div className="py-5" style={{backgroundColor: '#ebebeb'}}>
                    <div className="container">
                        <div className="row">
                            {this.state.products.map((product) => {
                                return (
                                    <ProductList key={product.id} product={product} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //   <Product />
        )
    }
}
