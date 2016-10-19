import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolItem from '../components/home/ToolItem';

class ToolSection extends Component {

  renderToolsList() {
    return this.props.tools.map((tool) => {
      return <ToolItem tool={tool} key={tool.id} />;
    });
  }

  render() {
    return (
      <div className="container" id="tools-list">
        <div className="row">
          {this.renderToolsList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tools: state.tools };
}

export default connect(mapStateToProps)(ToolSection);
