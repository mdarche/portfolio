import React, { Component } from 'react';

class Heading extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 280) {
      this.setState({ toggle: true });
    } else {
      this.setState({ toggle: false });
    }
  }

render() {
  const { banner, title, category, p1, p2 } = this.props.heading;
  const headingClass = this.state.toggle ? 'toggle' : '';

  return (
    <div>
      <div className="banner">
        <img alt="banner" src={banner} />
        <div>
          <h2>{title}</h2>
        </div>
      </div>

      <div className="container overview">
        <div className="row">
          <div className="col-sm-2" />
          <div className="col-sm-8">
            <h3>{category}</h3>
            <h4 className={headingClass}>{title}</h4>
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
          <div className="col-sm-2" />
        </div>
      </div>


    </div>
  );
}
}

Heading.propTypes = {
  heading: React.PropTypes.object
};

export default Heading;
