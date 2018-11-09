import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

class MovieDetails extends React.Component {
  
  handleDelete = () => {
    axios.delete(`/api/videos/${this.props.movie._id}`)
      .then(res=> {
        this.props.history.push('/movies');
        this.props.getData();
      });
  }

  render() {
    return (
      <div>
        <div className="movie-details">
          <h2>Title: {this.props.movie.title}</h2>
          <h3>Genre: {this.props.movie.genre}</h3>
          <button 
            className="delete"
            onClick={this.handleDelete}
          >
            Delete
          </button>
          <button className="customize">
            <Link className="customize-link" to="/movie/submit">Update</Link>
          </button>
        </div>
      </div>);
  }
}

export default MovieDetails;