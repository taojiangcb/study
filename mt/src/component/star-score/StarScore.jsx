import "./StarScore.scss"
import React, { Component, Fragment } from 'react'
import { Tracer } from "chrome-trace-event";

export const StarScore = wm_poi_score => {
  // let startData = props.startData;
  let score = wm_poi_score;
  let str_v = String(score).split('.');
  let integer = Number(str_v[0]);
  let decimals = Number(str_v[1]);
  let half = decimals < 5 && decimals > 0;
  if (decimals == 0) half = false;
  integer += decimals > 5 ? 1 : 0;
  let gary = 5 - (integer + (half ? 1 : 0));
  console.log(integer,gary,half);
  let starts = [];
  var i = 0;
  if (integer > 0) {
    for (i; i < integer; i++) {
      starts.push(<i key={i + 'f'} className="star star-icon"></i>)
    }
  }

  if (half) {
    starts.push(<i key={half} className="star star-half"></i>)
  }  

  if (gary > 0) {
    i = 0;
    for (i; i < gary; i++) {
      starts.push(<i key={i + 'g'} className="star star-gary"></i>)
    }
  }


  return starts;
}