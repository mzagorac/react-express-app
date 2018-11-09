import React, { Component } from 'react';

class Form extends Component {

  state = {
    title: this.props.movie.title ? this.props.movie.title : '',
    genre: this.props.movie.genre ? this.props.movie.genre : ''
  }

  titleChangeHandler = (e) => {
    this.setState({ title: e.target.value })
  }

  genreChangeHandler = (e) => {
    this.setState({ genre: e.target.value })
  }

 render() {
   return (
    <form  className="movie-submit" onSubmit={this.props.submitMovieHandler}>
      <label>
        Title: <input 
          className="movie-submit__input" 
          name="title" 
          value={this.state.title}
          onChange={(e) => this.titleChangeHandler(e)} 
        />
      </label>
      <label>
        Genre: <input 
          className="movie-submit__input" 
          name="genre" 
          value={this.state.genre}
          onChange={(e) => this.genreChangeHandler(e)}
        />
      </label>
      <button className='movie-submit__button' type="submit">Save</button>
    </form>  
   )
 }
}

export default Form;