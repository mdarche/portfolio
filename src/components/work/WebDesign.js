import React, { Component } from 'react';
import { connect } from 'react-redux';
import Heading from './Heading';
import FeaturedWork from './FeaturedWork';
import WorkGrid from './WorkGrid';

class WebDesign extends Component {
  componentDidMount() {
    document.title = 'Mike Darche | Web Design';
  }

  render() {
    const heading = (this.props.webDesign[0]);
    const featured = (this.props.webDesign[1]);
    const project1 = (this.props.webDesign[2]);

    return (
      <div>
      <Heading heading={heading} />
      <FeaturedWork work={featured} />
      <WorkGrid work={project1} />
      <WorkGrid work={project1} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { webDesign: state.webDesign };
}

export default connect(mapStateToProps)(WebDesign);
