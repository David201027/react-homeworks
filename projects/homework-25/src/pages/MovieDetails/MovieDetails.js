import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails, IMAGE_URL } from '../../services/tmdb';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || '/');

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovie() {
      setLoading(true);
      setError('');
      setMovie(null);

      try {
        const data = await getMovieDetails(movieId, controller.signal);
        setMovie(data);
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

    loadMovie();

    return () => controller.abort();
  }, [movieId]);

  return (
    <main>
      <Link className={styles.back} to={backLinkRef.current}>
        ← Go back
      </Link>

      {loading && <p>Loading movie...</p>}
      {error && <p role="alert">{error}</p>}

      {movie && !loading && !error && (
        <>
          <div className={styles.details}>
            {movie.poster_path ? (
              <img
                className={styles.poster}
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <div className={styles.placeholder}>No poster</div>
            )}

            <div>
              <h1>
                {movie.title} ({movie.release_date?.slice(0, 4) || 'N/A'})
              </h1>

              <p>
                ⭐ User score: {Math.round(movie.vote_average * 10)}%
              </p>

              <h2>Overview</h2>
              <p>{movie.overview || 'No overview available.'}</p>

              <h2>Genres</h2>
              <p>
                {movie.genres?.map(genre => genre.name).join(', ') ||
                  'Unknown'}
              </p>
            </div>
          </div>

          <section className={styles.additional}>
            <h2>Additional information</h2>

            <div className={styles.links}>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </div>

            <Outlet />
          </section>
        </>
      )}
    </main>
  );
}

export default MovieDetails;