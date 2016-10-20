import React, { Component } from 'react';

export default class Hero extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div id="hero">
            <div className="parallax">
              <div className="parallax-layer hero-layer2" />
              <div className="hero-layer1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
