import React, { Component } from 'react';

class Heading extends Component {

render() {
  const { banner, title, p1, p2 } = this.props.heading;

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

export default Heading;
