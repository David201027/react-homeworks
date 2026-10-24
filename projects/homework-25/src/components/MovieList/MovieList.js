import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { IMAGE_URL } from '../../services/tmdb';
import styles from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.grid}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.card}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.poster_path ? (
              <img
                className={styles.poster}
                src={`${IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            ) : (
              <div className={styles.placeholder}>No poster</div>
            )}

            <div className={styles.info}>
              <h3>{movie.title}</h3>
              <span>
                ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    })
  ).isRequired,
};

export default MovieList;