import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = props => {
  return (<div>
    <h2>Could not save movie, please enter correct data</h2>
    <Link to="movie/submit">Go Back</Link>
  </div>)
}

export default ErrorMessage;