import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { useState } from 'react';

type Movie = {
  title: string;
  desctiption?: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>(moviesFromServer);

  const onAdd = (current: Movie) => {
    setMovies([...movies, current]);
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <NewMovie onAdd={onAdd} />
      </div>
    </div>
  );
};
