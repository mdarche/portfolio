import React, { Component } from 'react';

class FeaturedWork extends Component {

  renderImageList(images) {
    return images.map((image) => {
      return (
        <div className="featured-image">
          <img src={image} alt="featured" />
        </div>
      );
    });
  }

  render() {
    const { title, description, tools, images } = this.props.work;

    return (
      <div className="featured-work">

        <div className="featured-title">
          <h1>{title}</h1>
        </div>

        <div id="test" className="scroll-view collapse in">
          <div className="featured-info">
            <p>{description}</p>
            <p>TOOLS:<br />{tools}</p>
          </div>
          {this.renderImageList(images)}
        </div>

        <div className="scroll-note">Scroll &#10132;</div>

      </div>
    );
  }
}

export default FeaturedWork;
