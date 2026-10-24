import React, { Component } from 'react';
import styled from 'styled-components';
import './Modal.css';

const OpenButton = styled.button`
  padding: 15px 28px;
  border: none;
  border-radius: 12px;
  background: #6366f1;
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #4f46e5;
    transform: translateY(-2px);
  }
`;

const Overlay = styled.div.attrs({
  className: 'modal-overlay',
})`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(15, 23, 42, 0.65);
  animation: overlayAppear 0.2s ease-out;
`;

const Dialog = styled.div.attrs({
  className: 'modal-content',
})`
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 35px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  animation: modalAppear 0.3s ease-out;
`;

const CloseIcon = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: #f1f5f9;
  color: #475569;
  font-size: 22px;

  &:hover {
    background: #fee2e2;
    color: #dc2626;
  }
`;

const Heading = styled.h2`
  margin: 0 0 14px;
  font-size: 27px;
`;

const Description = styled.p`
  margin: 0 0 28px;
  color: #64748b;
  line-height: 1.7;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const CancelButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #f1f5f9;
  color: #334155;

  &:hover {
    background: #e2e8f0;
  }
`;

const ConfirmButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  background: #6366f1;
  color: white;

  &:hover {
    background: #4f46e5;
  }
`;

class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    // Подписываемся на события клавиатуры
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    // Блокируем прокрутку страницы, пока окно открыто
    if (prevState.isOpen !== this.state.isOpen) {
      document.body.style.overflow = this.state.isOpen ? 'hidden' : '';
    }
  }

  componentWillUnmount() {
    // Убираем обработчик и возвращаем прокрутку
    document.removeEventListener('keydown', this.handleKeyDown);
    document.body.style.overflow = '';
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  handleKeyDown = event => {
    if (event.key === 'Escape' && this.state.isOpen) {
      this.closeModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <OpenButton onClick={this.openModal}>
          Open Modal
        </OpenButton>

        {isOpen && (
          <Overlay onClick={this.handleOverlayClick}>
            <Dialog
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <CloseIcon
                type="button"
                onClick={this.closeModal}
                aria-label="Close modal"
              >
                &times;
              </CloseIcon>

              <Heading id="modal-title">
                Welcome!
              </Heading>

              <Description>
                This is a React modal window built with
                class components, lifecycle methods
                and styled-components.
              </Description>

              <Actions>
                <CancelButton onClick={this.closeModal}>
                  Cancel
                </CancelButton>

                <ConfirmButton onClick={this.closeModal}>
                  Got it!
                </ConfirmButton>
              </Actions>
            </Dialog>
          </Overlay>
        )}
      </>
    );
  }
}

export default Modal;