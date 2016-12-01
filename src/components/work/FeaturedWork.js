import React, { Component } from 'react';
import classnames from 'classnames';

class FeaturedWork extends Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
  }

  renderImageList(images) {
    return images.map((image) => {
      return (
        <div className="featured-image">
          <img src={image} alt="featured" />
        </div>
      );
    });
  }

  click() {
      if (this.state.show) {
        this.setState({ show: false });
      } else {
        this.setState({ show: true });
      }
  }

  render() {
    const { title, description, tools, images } = this.props.work;
    const buttonText = !this.state.show ? 'View Project' : 'Hide Project';
    const accordionClass = classnames('scroll-view', { show: this.state.show });
    const noteClass = classnames('scroll-note', { show: this.state.show });

    return (
      <div className="featured-work">
        <div className="featured-title">
          <h1>{title}</h1>
          <button
            className="view-button"
            onClick={this.click.bind(this)}
          >
            {buttonText}
          </button>
        </div>
        <div className={accordionClass}>
          <div className="featured-inner">
            <p>{description}</p>
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
  show: React.PropTypes.bool.isRequired,
  work: React.PropTypes.object
};

export default FeaturedWork;
