import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, IMAGE_URL } from '../../services/tmdb';
import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadCast() {
      setLoading(true);
      setError('');

      try {
        const data = await getMovieCast(movieId, controller.signal);
        setActors(data.cast || []);
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

    loadCast();

    return () => controller.abort();
  }, [movieId]);

  if (loading) return <p>Loading cast...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!actors.length) return <p>No cast information.</p>;

  return (
    <ul className={styles.grid}>
      {actors.map(actor => (
        <li className={styles.card} key={actor.credit_id}>
          {actor.profile_path ? (
            <img
              src={`${IMAGE_URL}${actor.profile_path}`}
              alt={actor.name}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholder}>No photo</div>
          )}

          <h3>{actor.name}</h3>
          <p>Character: {actor.character || 'Unknown'}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;