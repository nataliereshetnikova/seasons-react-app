import './SeasonDisplay.css';
import React from "react";

const seasonConfig={
    summer:{
        text:'Let\'s hit the beach',
        iconName:'yellow sun'
    },
    winter:{
        text:'Brr, it\'s cold',
        iconName:'blue snowflake'
    }
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`ui raised very padded text container segment ${season}`}>
      <h1 className="ui header">
        <i className={`${iconName} massive icon icon-left`}/>
        {text}
        <i className={`${iconName} massive icon icon-right`}/>
      </h1>
      <p>This app determines user latitude and based on that show whether it is warm or cold weather in your hemisphere.</p>
    </div>
  );
};

export default SeasonDisplay;
