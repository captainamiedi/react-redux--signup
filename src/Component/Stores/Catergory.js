import React from 'react';
import styled from 'styled-components';

export default function Catergory(props) {
    console.log(props.category)
    return (
        <CatergoryWrapper>
            <div className="category">
                <p className="name">{props.category}</p>
            </div>
        </CatergoryWrapper>
    )
}

const CatergoryWrapper = styled.div`
    display: flex;
.category{
    font-size: 12px;
    padding: 0px 4px;
    height: 27px
}
.category p {
    border: 1px solid gray;
    border-radius: 10px;
    padding: 0px 9px
}
`;
