import React from 'react';
import styled from 'styled-components';

export default function Catergory(props) {
<<<<<<< HEAD
    // console.log(props.category)
=======
    console.log(props.category)
>>>>>>> 5c479e53a913762846bd4ab3f34c1c83d8c065c4
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
