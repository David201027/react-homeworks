import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaClock, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

import Event from '../Event/Event';

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 420px));
  justify-content: center;
  gap: 24px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

function PageBoard({ events }) {
  return (
    <Board>
      {events.map((event, index) => (
        <Event
          key={`${event.name}-${index}`}
          name={event.name}
          start={event.time.start}
          end={event.time.end}
          location={event.location}
          speaker={event.speaker}
          type={event.type}
          timeIcon={<FaClock />}
          locationIcon={<FaMapMarkerAlt />}
          speakerIcon={<FaUser />}
        />
      ))}
    </Board>
  );
}

PageBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,

      time: PropTypes.shape({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PageBoard;