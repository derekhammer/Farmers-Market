import React from 'react';

function Location(props) {
  return (
    <div>
      <h3>Today's location</h3>
      <p>Location: {props.day.location}</p>
      <p>Hours: {props.day.hours}</p>
      <p>Booth: {props.day.booth}</p>
    </div>
  );
}

export default Location;