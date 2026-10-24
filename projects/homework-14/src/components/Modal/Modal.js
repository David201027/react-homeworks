import React, { Component } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background: rgba(0,0,0,0.85);
`;

const ModalBox = styled.div`
  max-width: 95vw;
  max-height: 95vh;
`;

const LargeImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
`;

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = '';
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { imageUrl, alt } = this.props;

    return (
      <Overlay
        className="overlay"
        onClick={this.handleOverlayClick}
      >
        <ModalBox
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <LargeImage
            src={imageUrl}
            alt={alt || 'Large preview'}
          />
        </ModalBox>
      </Overlay>
    );
  }
}

export default Modal;