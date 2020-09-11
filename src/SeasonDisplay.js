import React, { Component } from "react";
import ReactDom from "react-dom";

const getSeason = (lat, month)=>{
 if(month>3 && month<10){
    return lat>0? 'summer': 'winter';
 } else{
     return lat>0? 'winter':'summer';
 }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
  return (
  <div>
      Seasons
      <p>{season}</p>
      </div>);
};

export default SeasonDisplay;