import React from 'react';
import PropTypes from 'prop-types';

const WeGotReview = (({ food, decor, service }) => (
  <div id="overview-wegot-review">
    <div className="overview-wegot-details-box">
      <div className="overview-wegot-rating-details">{food}</div>
      <span className="overview-wegot-details-subtitle">FOOD</span>
    </div>
    <div className="overview-wegot-details-box overview-wegot-midbox">
      <div className="overview-wegot-rating-details">{decor}</div>
      <span className="overview-wegot-details-subtitle">DECOR</span>
    </div>
    <div className="overview-wegot-details-box">
      <div className="overview-wegot-rating-details">{service}</div>
      <span className="overview-wegot-details-subtitle">SERVICE</span>
    </div>
  </div>
));


WeGotReview.propTypes = {
  food: PropTypes.string.isRequired,
  decor: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
};

export default WeGotReview;
