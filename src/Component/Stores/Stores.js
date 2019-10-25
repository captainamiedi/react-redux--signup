import React, { Component } from 'react'
import {products} from '../../data';
import ProductList from './ProductList';
import Title from './Title';
import Navbar from '../LandingPage/Navbar';
import Modal from '../Reuseable/Modal';
import ModalContent from './ModalContent'

export default class Stores extends Component {
    state= {
        products: products,
        search: '',
        isOpen: false
    }
    
    openModal = () => {
        this.setState({
            isOpen: true
        })
    }
    closeModal = () => {
        this.setState({
            isOpen: false
        })
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
        // console.log(this.props.name)
        return (
            <React.Fragment>
                <Navbar name="landing" openModal={this.openModal} closeModal={this.closeModal}/>
                <Title handleSearch={this.handleSearch} search={this.state.search} handleSubmit={this.handleSubmit} name="stores"/>
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
                {this.state.isOpen && 
                <Modal 
                   onCloseModal={this.closeModal} 
                   content = {
                       <ModalContent />
                   }
                />
                }
            </React.Fragment>
            //   <Product />
        )
    }
}
