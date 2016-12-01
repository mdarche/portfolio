import React, { Component } from 'react';
import ResourceSection from './ResourceSection';

class OnlineResources extends Component {

  componentDidMount() {
    document.title = 'Mike Darche | Resources';
  }

  render() {
    return (
      <div>
        <div className="resource-banner">
          <div className="night-stars">

            <div className="col-sm-4" />
            <div className="col-sm-4 text">
              <span>My Favorite</span><br />Online Resources
            </div>
            <div className="col-sm-4 moon" />

            <div className="clouds" />

          </div>
        </div>
        <ResourceSection />
      </div>
    );
  }

}

export default OnlineResources;
