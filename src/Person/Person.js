import React from 'react';

const person = (props) => {
   return (<div>
      <p>I'm {props.name} and I'm {props.age} old</p>
      <p>role: {props.children}</p>
   </div>);
}
export default person;
