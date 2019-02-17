import React from 'react';

const weather = (props) => (
  <div className="App">
    {props.city && props.country && <p>Location : {props.city} {props.country}</p>}
    {props.temp && <p>Temperature : {props.temp}</p>}
    {props.humidity && <p>Humidity : {props.humidity}</p>}
    {props.description && <p>Condition : {props.description}</p>}
    {props.errors && <p> {props.errors}</p>}
  </div>
)

export default weather;
