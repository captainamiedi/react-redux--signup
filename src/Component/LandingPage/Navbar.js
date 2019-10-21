import React from 'react'
import styled from 'styled-components';
import logo from '../../images/BLACK.png';
import {ButtonContainer} from '../Reuseable/Button'

export default function Navbar() {
    return (
        <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 container-fluid">
            <img src={logo} alt="logo" />
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-4">Home</li>
                <li className="nav-item ml-4">About Us</li>
                <li className="nav-item ml-4">Shoppers</li>
                <li className="nav-item ml-4">Stores</li>
                <li className="nav-item ml-4">Contact</li>
                <li className="nav-item ml-4">
                    <ButtonContainer className="shadow rounded p-2">
                        Login
                    </ButtonContainer>
                </li>
            </ul>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(to right, #f6f5f5, #fafafa, #fd7941, #fbab31, #fd9239);
    color: #ffffff
`;
