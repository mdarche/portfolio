import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { closeModal } from '../../actions/index';

class ImageModal extends Component {

  onImageClick() {
    this.props.closeModal();
  }

  render() {
    const modalClass = this.props.toggleOn ? classnames('modal-overlay', 'show') : 'modal-overlay';

    return (
      <div className={modalClass}>
        <div className="modal-inner" onClick={this.onImageClick.bind(this)}>
          <img className="image-modal" src={this.props.image} role="presentation" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const m = state.modal;
  return {
    toggleOn: m[m.length - 1].toggleOn,
    image: m[m.length - 1].image
  };
}

export default connect(mapStateToProps, { closeModal })(ImageModal);
