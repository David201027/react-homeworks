import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function RestrictedRoute({ children }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
}

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RestrictedRoute;