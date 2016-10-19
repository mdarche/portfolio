import React, { Component } from 'react';
import ScrollReveal from '../../../style/ScrollReveal';

export default class CategoryItem extends Component {
  componentDidMount() {
    const config = {
      origin: 'bottom',
      duration: 600,
      delay: 130,
      distance: '50px',
      opacity: 0,
      scale: 1,
      easing: 'ease',
      mobile: true
    };
    ScrollReveal.reveal(this.refs.box1, config);
  }

  render() {
    const { description, title, column } = this.props.category;

    return (
      <div className={column}>
        <div className="category-item" ref='box1' >
          <div className="temp-image" />
          <div className="category-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
