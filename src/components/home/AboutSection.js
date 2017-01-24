import React, { Component } from 'react';
import RetinaImage from 'react-retina-image';

const portrait = require('../../data/images/home/vectorportrait.png');
const retinaPortrait = require('../../data/images/home/vectorportrait@2x.png');

export default class AboutSection extends Component {

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
    if (window.pageYOffset > 660) {
      this.setState({ toggle: true });
    } else {
      this.setState({ toggle: false });
    }
  }

  render() {
    const headingClass = this.state.toggle ? 'toggle' : '';

    return (
      <div className="container">
        <div className="row" id="about">
          <h3 id="nameBG">MKD</h3>
          <h4 className={headingClass}>About Me</h4>

          <div className="col-md-4 portrait">
            <RetinaImage src={[portrait, retinaPortrait]} alt="Mike Darche" />
          </div>

          <div className="col-md-8">

            <p>My name is Mike and I like to build things.</p>

            <p>I'm a designer and entrepreneur as well as a self-taught programmer.</p>

            <p>I graduated from the University of Notre Dame in 2014 with a BBA in Management Entrepreneurship and a concentration in Graphic Design. Since then, I teamed up with a few friends to co-run a small web and marketing agency called <a href="http://catalyzemarketing.com">Catalyze</a>. By helping our clients grow their brands online over the last few years, I've spent countless hours learning web development and today's best digital marketing practices.</p>

            <p>My experiences have transformed my design interest into a deep appreciation for web technologies and user experience. In this portfolio, you'll find a selection of my favorite work. If you have any questions, feel free to <a href="mailto:michael@catalyzemarketing.com">contact me.</a></p>

          </div>

        </div>
      </div>
    );
  }
}
