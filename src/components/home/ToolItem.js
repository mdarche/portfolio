import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ScrollReveal from '../../util/ScrollReveal';


export default class ToolItem extends Component {
  componentDidMount() {
    const config = {
      origin: 'top',
      duration: 600,
      delay: 300,
      distance: '20px',
      opacity: 0,
      scale: 1.3,
      easing: 'ease',
      mobile: true
    };
    ScrollReveal.reveal(this.refs.box1, config);
  }

  render() {
    const { url, title, image } = this.props.tool;

    return (
      <Link to={url} target="_blank">
        <div className="col-sm-3 col-xs-6 tool-container">
          <img
            className="tool-image"
            alt={title}
            src={image}
            ref='box1'
          />
          <div className="tool-title">{title}</div>
        </div>
      </Link>
    );
  }
}

ToolItem.propTypes = {
  tool: PropTypes.object.isRequired
};
