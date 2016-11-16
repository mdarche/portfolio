import React, { Component } from 'react';

class FeaturedWork extends Component {

  render() {
    const { title, description, tools, classId } = this.props.work;

    return (
      <div className="featured-work">

        <div className="featured-title">
          <h1>{title}</h1>
        </div>

        <div className="scrollView">
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>

      </div>
    );
  }
}

export default FeaturedWork;
