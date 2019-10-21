import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="footer">
                <h5>CUSTOMERS</h5>
                <ul>
                    <li>Sign in</li>
                    <li>Support</li>
                    <li>FAQs</li>
                    <li>Testimony</li>
                </ul>
            </div>
            <div className="footer">
                <h5 className="text-end">ABOUT US</h5>
                <ul>
                    <li>Our Story</li>
                    <li>Office</li>
                    <li>Press</li>
                </ul>
            </div>
            <div className="footer">
                <h5>FOLLOW US</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Pinterest</li>
                </ul>
            </div>
            <div className="footer">
                <button>Try it for free</button>
                <p>Sign up for one kiosk pro for free 7-day trail.</p>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background-color: #fc9838;
    display: flex;
    justify-content: space-evenly;
    padding-top: 35px
`;