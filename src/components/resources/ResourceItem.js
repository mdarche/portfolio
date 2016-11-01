import React, { Component } from 'react';
import ScrollReveal from '../../../styles/ScrollReveal';

export default class ResourceItem extends Component {
  componentDidMount() {
    const config = {
      origin: 'bottom',
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
    const { title, image, type, description, url } = this.props.info;

    return (
      <div className="col-xs-12 col-md-6 col-lg-3 online-resource" ref='box1'>
        <a href={url} target="_blank" rel="noopener noreferrer">

          <div className="resource-image">
            <img alt={title} src={image} />
          </div>

          <div className="resource-info">
            <h4>{title}</h4>
            <p>{type}</p>
            <p>{description}</p>
          </div>

        </a>
      </div>
    );
  }
}
