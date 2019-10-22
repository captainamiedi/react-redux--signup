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
                <li className="nav-item mx-3">
                    {/* <BrowserRouter>                     */}
                        {/* <Link to="/about">Home</Link> */}
                    {/* </BrowserRouter> */}
                    <NavLink to="/about">Home</NavLink>
                    </li>
                <li className="nav-item mx-3">About Us</li>
                <li className="nav-item mx-3">Shoppers</li>
                <li className="nav-item mx-3">Contact Us</li>
                <li className="nav-item mx-3"><button className="text-white btn btn-outline-success pt-0 shadow rounded border-0 rounded-pill" type="submit">Login</button></li>
            </ul>
            </div>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    background-image: linear-gradient(to right, #f5f3f2 0%, #f74639 50%, #f79d1e 100%);
    color: #ffffff
`;

export default Navbar
