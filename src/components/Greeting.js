import React from 'react';

function Greeting() {
  const hour = new Date().getHours();

  let greetingTime;

  if (hour < 12 && hour > 0) {
    greetingTime = 'Good Morning';
  } else if (hour > 12 && hour < 18) {
    greetingTime = 'Good Afternoon';
  } else {
    greetingTime = 'Good Evening';
  }

  return <h1>{greetingTime}</h1>;
}

export default Greeting;
