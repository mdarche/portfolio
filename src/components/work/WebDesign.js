import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import FeaturedWork from './FeaturedWork';

class WebDesign extends Component {
  componentDidMount() {
    document.title = 'Mike Darche | Web Design';
  }

  render() {
    const heading = (this.props.webDesign[0]);
    const featured = (this.props.webDesign[1]);

    return (
      <div>
      <Heading heading={heading} />
      <FeaturedWork work={featured} show={true} />
      <FeaturedWork work={featured} show={false} />
      <FeaturedWork work={featured} show={false} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { webDesign: state.webDesign };
}

export default connect(mapStateToProps)(WebDesign);
