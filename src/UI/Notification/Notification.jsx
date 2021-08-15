import PropTypes from 'prop-types';

const Notification = ({ children, type, reset }) => {
  return (
    <div className={`notification mt-4 ${type}`}>
      <button className='delete' onClick={reset}></button>
      {children}
    </div>
  );
};

Notification.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  reset: PropTypes.func
};

export default Notification;
