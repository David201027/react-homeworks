import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/tmdb';
import styles from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      setLoading(true);
      setError('');

      try {
        const data = await getMovieReviews(movieId, controller.signal);
        setReviews(data.results || []);
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

    loadReviews();

    return () => controller.abort();
  }, [movieId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!reviews.length) return <p>No reviews yet.</p>;

  return (
    <ul className={styles.list}>
      {reviews.map(review => (
        <li className={styles.review} key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;