import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';


const Movie = props => (
  <li className="movie-list__item" onClick={() => props.handleClick(props.movie)} >
    <Link 
      className="movie-list__item-link" 
      to="movieDetails">{props.movie.title}
    </Link>
  </li>
);

export default Movie;