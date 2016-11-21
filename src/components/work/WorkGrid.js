import React, { Component } from 'react';

class WorkGrid extends Component {

  renderGrid(images) {
    return images.map((image) => {
      return (
        <div className="col-sm-4 work-image">
          <img src={image} alt="work" />
        </div>
      );
    });
  }

  render() {
    const { title, description, tools, featuredImage, images } = this.props.work;

    return (
      <div className="container work-grid">

        <div className="row">
          <div className="col-sm-7">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{tools}</p>
          </div>
          <div className="col-sm-5">
            <img src={featuredImage} alt="featured" />
          </div>
        </div>

        <div className="row">
          {this.renderGrid(images)}
        </div>

      </div>
    );
  }
}

export default WorkGrid;
