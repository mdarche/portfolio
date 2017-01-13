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
    this.props.fetchCategory(this.props.params.path);
  }

  renderPortfolioItems() {
    return this.props.work.map((prop, index) => {
      if (index === 1) {
        return <FeaturedWork work={prop} show={true} key={prop.id} />;
      }
      return <FeaturedWork work={prop} show={false} key={prop.id} />;
    }).slice(1);
  }

  render() {
    const { work } = this.props;
    if (!work) { return <div>Loading...</div>; }
    const heading = work[0];

    return (
      <div>
      <Heading heading={heading} />
      {this.renderPortfolioItems()}
      <div id="modal-test" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { work: state.work.workpage };
}

export default connect(mapStateToProps, { fetchCategory })(WorkOverview);
