import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../services/tmdb';
import styles from './Home.module.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovies() {
      try {
        const data = await getTrendingMovies(controller.signal);
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
  }, []);

  return (
    <main className={styles.page}>
      <h1>Trending today 🔥</h1>

      {loading && <p>Loading movies...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </main>
  );
}

export default Home;