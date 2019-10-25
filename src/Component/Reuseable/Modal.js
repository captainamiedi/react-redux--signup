import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Modal({ content, onCloseModal }) {
  return (
    <ModalContainer>
      <div className="overlay">
        <div className="custom-modal">
          <button type="button" className="custom-close" onClick={onCloseModal}>&times;</button>
          <div className="custom-modalContent">
             {content}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}

Modal.propTypes = {
  content: PropTypes.element.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};


const ModalContainer = styled.div`
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.custom-modal {
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: #fff;
  border: 1px solid #666;
  width: 700px;
  border-radius: 6px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}
.custom-modal .custom-close {
  position: absolute;
  width: 20px;
  height: 20px;
  top: -10px;
  right: -10px;
  opacity: 0.8;
  font-size: 0.8rem;
  font-weight: bold;
  text-decoration: none;
  color: #ececec;
  background-color: #000000;
  padding: 0px;
  border-radius: 100%;
}
.custom-modal .custom-close:hover {
  opacity: 1;
}
.custom-modal .custom-modalContent {
  overflow: auto;
  padding: 10px;
}
`;

export default Modal;