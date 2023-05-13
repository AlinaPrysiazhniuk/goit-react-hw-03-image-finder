import { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';

const modal = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackDropClick}>
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      modal
    );
  }
}

Modal.propTypes = {
  onClose: propTypes.func,
  largeImageURL: propTypes.string.isRequired,
};
