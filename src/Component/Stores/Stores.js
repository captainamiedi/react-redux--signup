import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetails, getProductsDetails } from '../../Store/Actions/DetailsAction';
import ProductList from './ProductList';
import Title from './Title';
import Navbar from '../LandingPage/Navbar';
import Modal from '../Reuseable/Modal';
import ModalContent from './ModalContent'

class Stores extends Component {
    state= {
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

    componentDidMount() {
        this.props.getDetails()
    }
    
    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state.search)
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        // this.setState(()=> {
        //     return { 
        //         detailProduct: product,
        //       }
        // })
        console.log('im here/......');
        this.props.getProductsDetails(product)
    }
    getItem = (id) => {
        const product = this.props.productDetails.products.find(item => item.id === id);
        // console.log(product)
        return product;
    }
    
    render() {
        // console.log(this.props.name)
        // console.log(this.props.productDetails.detailsProducts)
        return (
            <React.Fragment>
                <Navbar name="Store" openModal={this.openModal} closeModal={this.closeModal}/>
                <Title handleSearch={this.handleSearch} search={this.state.search} handleSubmit={this.handleSubmit} name="stores" store={this.props.productDetails.name}/>
                <div className="py-5" style={{backgroundColor: '#ebebeb'}}>
                    <div className="container">
                        <div className="row">
                            {this.props.productDetails.products.map((product) => {
                                return (
                                    <ProductList key={product.id} product={product} details ={() => this.handleDetails(product.id)}/>
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

const mapStateToProps = state => ({
    productDetails: state.productDetails
});

// const mapDispatchToProps = dispatch => ({
//     productDetails: () => dispatch(details())
// })

export default connect(mapStateToProps, {getDetails, getProductsDetails})(Stores);