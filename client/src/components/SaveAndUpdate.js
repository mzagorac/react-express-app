import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';
import './SaveMovie.css';

class SaveMovie extends Component {

  submitMovieHandler = (e) => {
    e.preventDefault();

    if (this.props.movie.title) {
      axios.put(`/api/videos/${this.props.movie._id}`, {
        title: e.target.title.value,
        genre: e.target.genre.value 
      })
      .then(() => {
        this.props.history.push('/movies')
        this.props.getData()
      })
      .catch(err => {
        this.setState({ error: err.message })
        this.props.history.push('/error')
      } )  
    } else {
      axios.post('/api/videos', {
        title: e.target.title.value,
        genre: e.target.genre.value 
      })
      .then(() => {
        this.props.history.push('/movies')
        this.props.getData()
      })
      .catch(err => {
        this.setState({ error: err.message })
        this.props.history.push('/error')
      })
    }
  }

  render() { 
    return ( 
      <Form  
        movie={this.props.movie} 
        submitMovieHandler={this.submitMovieHandler} 
      />
    );
  }
}      
export default SaveMovie;