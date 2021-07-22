import React from 'react';

function DateComponent(props) {
  return ( 
    <div>
    {props.date.getDate()}/{props.date.getMonth() + 1}/{props.date.getFullYear()}
    </div>
  )
}

export default DateComponent;