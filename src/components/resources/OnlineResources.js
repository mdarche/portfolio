import React from 'react';
import ResourceSection from './ResourceSection';

const OnlineResources = () => {
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
};

export default OnlineResources;
