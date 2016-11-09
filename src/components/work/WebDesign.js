import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';

class WebDesign extends Component {

  render() {
    return (
      <div>
      <Banner />

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tools: state.tools };
}

export default connect(mapStateToProps)(WebDesign);
