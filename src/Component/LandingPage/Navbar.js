import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, BrowserRouter, NavLink} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../../images/BLACK.png';
import Modal from '../Reuseable/Modal';

function Navbar(props) {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 container-fluid">
            <img src={logo} alt="logo" className="navbar-brand pt-1" />
            <div>
                {props.name === 'landing' ? (
                    <ul className="navbar-nav pt-1">
                    {/* <li className="nav-item mx-3"> */}
                    {/* <Link to=""> */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" onClick={props.openModal}>
                            <i className="fas fa-user-tie">{"  "} 
                                Account
                            </i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                   {/* / </Link> */}
                    {/* </li> */}
                    <li className="nav-item mx-3">
                    <Link to=""><button className="btn btn-success navbar-signup" type="submit">
                        <i className="fas fa-cart-plus">{' '}
                                Cart
                             </i>
                        </button>
                    </Link>
                    </li>
                </ul>
                ): (
                    <ul className="navbar-nav pt-1">
                        <li className="nav-item mx-3">Home</li>
                        <li className="nav-item mx-3">About Us</li>
                        <li className="nav-item mx-3">Shoppers</li>
                        <li className="nav-item mx-3">Contact Us</li>
                        <li className="nav-item mx-3">
                        <Link to="/login"><button className="btn btn-light download-app" type="submit">
                                    LOG IN
                            </button>
                        </Link>
                        </li>
                        <li className="nav-item mx-3">
                        <Link to="/login"><button className="btn btn-success navbar-signup" type="submit">
                                    SIGN UP
                            </button>
                        </Link>
                        </li>
                    </ul>
                )
                }
            </div>
                            {/* <Modal 
                   onCloseModal={props.closeModal} 
                   content = {
                       <div>modal</div>
                   } */}
                {/* /> */}
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;

    .dropdown-toggle::after {
        display: none !important
    }

    i.fa-user-tie:before {
        padding-right: 10px
    }
    i.fa-cart-plus:before {
        padding-right: 10px
    }

`;

export default Navbar

