import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ScrollReveal from '../../../scripts/ScrollReveal';

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
    const { description, title, column, image, path } = this.props.category;

    return (
      <Link to={'work/' + path}>
        <div className={column}>
          <div className="category-item" ref='box1' >
            <div className="image-container">
              <img className="category-image" src={image} alt={title} />
            </div>
            <div className="category-info">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

CategoryItem.propTypes = {
  category: PropTypes.object.isRequired
};
