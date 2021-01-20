import React from 'react';

//components
import Icon from '../Icon/Icon';

const ratingView = (props) => {
  const defaultStarsCount = 5;

  return (
    <div className={`rating-view rating-view-${props.rating ? props.rating : 0}`}>
      {
        [...(new Array(Number(props.starsCount ? props.starsCount : defaultStarsCount)))].map((item, index) => {
            return <Icon key={index} name="icon-star"/>
        })
      }
    </div>
  );
};

export default ratingView;
