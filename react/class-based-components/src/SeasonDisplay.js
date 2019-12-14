import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {

   "winter": {
      message: "Burr, it is chilly",
      iconName: "snowflake" 
   },
   "summer": {
      message: "Let's hit the beach",
      iconName: "sun"
   }
};

const getSeason = (lat, month) => {

   if (month > 2 && month <9) {
      if (lat > 0) return ("summer");
      else return ("winter");
   }
   else {
      if (lat > 0) return ("winter");
      else return ("summer");
   }
}

const SeasonDisplay = (props) => {

   let season = getSeason (props.lat, new Date().getMonth);
   let {message, iconName} = seasonConfig[season];

   return (
      <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
         <h1>{message}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
      </div>
   );
}

export default SeasonDisplay;