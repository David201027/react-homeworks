import PropTypes from 'prop-types';
import styled from 'styled-components';

const EventCard = styled.div`
  padding: 24px;

  background-color: #ffffff;
  border-radius: 8px;
  border-left: 5px solid
    ${({ $type }) => {
      if ($type === 'vip') return '#e0a800';
      if ($type === 'paid') return '#6f42c1';
      return '#28a745';
    }};

  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
`;

const EventName = styled.h2`
  margin: 0 0 14px;

  font-size: 21px;
  font-weight: 600;
`;

const EventType = styled.span`
  display: inline-block;
  margin-bottom: 15px;
  padding: 5px 10px;

  border-radius: 4px;

  background-color: ${({ $type }) => {
    if ($type === 'vip') return '#fff3cd';
    if ($type === 'paid') return '#eee5f8';
    return '#d4edda';
  }};

  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 10px 0;

  font-size: 14px;
  color: #555;

  svg {
    flex-shrink: 0;
    font-size: 16px;
  }
`;

function Event({
  name,
  start,
  end,
  location,
  speaker,
  type,
  timeIcon,
  locationIcon,
  speakerIcon,
}) {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const date = startDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const startTime = startDate.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  const endTime = endDate.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <EventCard $type={type}>
      <EventName>{name}</EventName>

      <EventType $type={type}>{type}</EventType>

      <Info>
        {timeIcon}
        {date}, {startTime} — {endTime}
      </Info>

      <Info>
        {locationIcon}
        {location}
      </Info>

      <Info>
        {speakerIcon}
        {speaker}
      </Info>
    </EventCard>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

  timeIcon: PropTypes.node.isRequired,
  locationIcon: PropTypes.node.isRequired,
  speakerIcon: PropTypes.node.isRequired,
};

export default Event;