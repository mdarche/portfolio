import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ToolItem from './ToolItem';

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
          <div className="tool-heading">
            <div /><h3>My Toolkit</h3><div />
          </div>
          {this.renderToolsList()}
        </div>

        <div className="row">
            <div className="resource-button">
              <Link to="/online-resources" >
                Favorite Resources
              </Link>
            </div>
        </div>

      </div>
    );
  }
}

ToolSection.propTypes = {
  tools: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return { tools: state.tools };
}

export default connect(mapStateToProps)(ToolSection);
