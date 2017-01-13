import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import RetinaImage from 'react-retina-image';
import { openModal } from '../../actions/index';

class FeaturedWork extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
  }

  click() {
      if (this.state.show) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
  }

  onImageClick(image) {
    this.props.openModal(image);
  }

  renderImageList(images) {
    return images.map((image) => {
      return (
        <div className="featured-image" key={image[0].toString()}>
          <RetinaImage
            onClick={this.onImageClick.bind(this, image[1])}
            src={[image[0], image[1]]}
            alt="featured"
          />
        </div>
      );
    });
  }

  render() {
    const { title, p1, p2, tools, images } = this.props.work;
    const buttonText = !this.state.show ? 'View Project' : 'Hide Project';
    const accordionClass = classnames('scroll-view', { show: this.state.show });
    const noteClass = classnames('scroll-note', { show: this.state.show });

    return (
      <div className="featured-work">
        <div className="featured-title">
          <h1>{title}</h1>
          <button className="view-button" onClick={this.click.bind(this)}>
            {buttonText}
          </button>
        </div>
        <div className={accordionClass}>
          <div className="featured-inner">
            <p>{p1}</p>
            <p>{p2}</p>
            <p>TOOLS:<br />{tools}</p>
          </div>
          {this.renderImageList(images)}
        </div>
        <div className={noteClass}>Scroll &#10132;</div>
      </div>
    );
  }
}

FeaturedWork.propTypes = {
  show: PropTypes.bool.isRequired,
  work: PropTypes.shape({
    title: PropTypes.string,
    p1: PropTypes.string,
    p2: PropTypes.string,
    tools: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
  })
};

export default connect(null, { openModal })(FeaturedWork);
