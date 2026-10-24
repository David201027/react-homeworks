import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { searchMovies } from '../../services/tmdb';
import styles from './Movies.module.css';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [input, setInput] = useState(query);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setInput(query);
  }, [query]);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setError('');
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function loadMovies() {
      setLoading(true);
      setError('');

      try {
        const data = await searchMovies(query, controller.signal);
        setMovies(data.results || []);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMovies();

    return () => controller.abort();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const value = input.trim();

    if (value) {
      setSearchParams({ query: value });
    }
  };

  return (
    <main className={styles.page}>
      <h1>Search movies</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          placeholder="Enter movie title..."
          aria-label="Movie title"
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && !error && query && movies.length === 0 && (
        <p>No movies found.</p>
      )}

      {!loading && !error && <MovieList movies={movies} />}
    </main>
  );
}

export default Movies;