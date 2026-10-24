import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="search"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Search contacts..."
      />
    </label>
  );
}

export default Filter;