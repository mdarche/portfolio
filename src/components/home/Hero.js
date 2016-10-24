import React, { Component } from 'react';

export default class Hero extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div id="hero">
            <div className="stars">

              <div className="col-sm-3" />
              <div className="col-sm-3 sun" />


              <div className="hills-background">
                <div className="hills-foreground">

                  {/* <div className="col-sm-7" /> */}
                  <div className="site-title">
                    <h2>Mike Darche</h2>
                    <h3>designer + developer</h3>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}
