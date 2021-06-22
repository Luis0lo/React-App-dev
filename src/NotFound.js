import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="error-page">
      <h2>Sorry</h2>
      <p>That page cannot be found!</p>
      <Link to="/">Click to go home</Link>
    </div>
  );
};

export default NotFound;
