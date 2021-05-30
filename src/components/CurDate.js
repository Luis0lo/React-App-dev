import React, { useState } from 'react';

function CurDate() {
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function update() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(update, 1000);

  return (
    <div className="">
      <p>It's {now} you're running out of time!</p>
    </div>
  );
}

export default CurDate;
