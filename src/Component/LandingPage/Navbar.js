import React from 'react'
import { Link, BrowserRouter, NavLink} from 'react-router-dom'
import styled from 'styled-components';
import logo from '../../images/BLACK.png';

function Navbar() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 container-fluid">
            <img src={logo} alt="logo" className="navbar-brand pt-1" />
            <div>
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
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
`;

export default Navbar
