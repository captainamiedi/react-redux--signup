import React from 'react';
import styled from 'styled-components';

export default function ModalContent() {
    return (
        <ContentWrapper>
            <div className="text-center text-capitalize">
                <h5>account</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="text-capitalize list-group-item">Information and Password</li>
                <li className="text-capitalize list-group-item">One Kiosk Pro</li>
                <li className="text-capitalize list-group-item">get your store listed</li>
                <li className="text-capitalize list-group-item">become a shopper</li>
                <li className="text-capitalize list-group-item">orders</li>
                <li className="text-capitalize list-group-item">delivery</li>
                <li className="text-capitalize list-group-item">payment method</li>
                <li className="text-capitalize list-group-item">credits</li>
            </ul>
            
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`

`;