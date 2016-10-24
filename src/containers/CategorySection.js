import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryItem from '../components/home/CategoryItem';

class CategorySection extends Component {

  renderList() {
    return this.props.categories.map((category) => {
      return <CategoryItem category={category} key={category.id} />;
    });
  }

  render() {
    return (
      <div id="category-grid">
        <div className="container">
          <div className="row">
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories };
}

export default connect(mapStateToProps)(CategorySection);
