import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import FeaturedWork from './FeaturedWork';

class WebDesign extends Component {

  render() {
    const heading = (this.props.webDesign[0]);
    const featured1 = (this.props.webDesign[1]);

    return (
      <div>
      <Heading heading={heading} />
      <FeaturedWork work={featured1} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { webDesign: state.webDesign };
}

export default connect(mapStateToProps)(WebDesign);
