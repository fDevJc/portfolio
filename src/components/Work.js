import React from 'react';

function test() {
  alert(1);
}

function Work(props) {
  return (
    <div onClick={test}>
      <h2>{props.title}</h2>
      <img src={props.image} alt="portfolioimage" />
    </div>
  );
}

export default Work;
