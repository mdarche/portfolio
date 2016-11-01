import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResourceItem from './ResourceItem';

class ResourceSection extends Component {

  renderList(props) {
    console.log(props);
    return props.map((info) => {
      return <ResourceItem info={info} key={info.id} />;
    });
  }

  render() {
    return (
      <div className="container-fluid resource-grid">

        <div className="row">
          <div className="col-sm-12 resource-category">Web & Graphic Design</div>
          {this.renderList(this.props.designTools)}
        </div>

        <div className="row">
          <div className="col-sm-12 resource-category">Web & Native Development</div>
          {this.renderList(this.props.devTools)}
        </div>

        <div className="row">
          <div className="col-sm-12 resource-category">Design Thinking</div>
          {this.renderList(this.props.designThinkingTools)}
        </div>

        <div className="row">
          <div className="col-sm-12 resource-category">Project Management</div>
          {this.renderList(this.props.projectTools)}
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    designTools: state.designTools,
    designThinkingTools: state.designThinkingTools,
    devTools: state.devTools,
    projectTools: state.projectTools,
   };
}

export default connect(mapStateToProps)(ResourceSection);
