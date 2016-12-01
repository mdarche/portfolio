import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategory } from '../../actions/index';
import Heading from './Heading';
import FeaturedWork from './FeaturedWork';

class WorkOverview extends Component {

  componentWillMount() {
    this.props.fetchCategory(this.props.params.path);
  }

  componentDidUpdate() {
    document.title = 'Mike Darche | ' + this.props.work[0].title;
  }

  render() {
    const { work } = this.props;

    if (!work) {
      return <div>Loading...</div>;
    }

    const heading = (work[0]);
    const featured = (work[1]);

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
  return { work: state.work.workpage };
}

export default connect(mapStateToProps, { fetchCategory })(WorkOverview);
