import React from 'react';
import Movie from './Movie';
import './MovieList.css'

const MovieList = props => (
  
  <ul className="movie-list">
    { props.movies.map(movie => <Movie 
      key={movie._id} 
      movie={movie}
      handleClick={props.handleClick} 
    />) }
  </ul>
);

export default MovieList;