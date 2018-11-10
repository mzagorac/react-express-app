import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ErrorMessage from './components/ErrorMessage';
import SaveAndUpdate from './components/SaveAndUpdate';
import './App.css';

class App extends Component {
  
  state = {
    movie: {},
    movies: [],
  }

  getData = () => {
    axios
      .get('/api/videos')
      .then(response => {
        this.setState({ movies: response.data })
      })
  }

  componentDidMount() {
    this.getData();
  }

  fetchMoviesHandler() {
    this.getData();
  }

  displayMovieHandler = (movie) => {
    this.setState({ movie });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Link  
              className="nav-link" 
              to="/movies"
              onClick={this.fetchMoviesHandler} 
            >
              Get Movies
            </Link>
            <Link 
              className="nav-link" 
              to="/movie/submit"
              onClick={() => this.setState({ movie: {} })}
            >
              Save Movie
            </Link>
          </header>
          <Route 
            path="/movieDetails"
            render={props => <MovieDetails 
              {...props}
              movie={this.state.movie}
              getData={this.getData} 
            />}  
          />
          <Route 
            path="/movies" 
            render={props => <MovieList 
              { ...props }  
              movies={this.state.movies}
              handleClick={this.displayMovieHandler} 
            />} 
          />
          <Route 
            path="/movie/submit"
            render={props => <SaveAndUpdate 
              {...props}
              error={this.state.error}
              movie={this.state.movie} 
              getData={this.getData}
            />}
          />
          <Route path="/error" component={ErrorMessage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
