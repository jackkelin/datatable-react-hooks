import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

function Spinner({ type }) {
  const getType = () => {
    switch (type) {
      case 'light':
        return 'Spinner-light';
      case 'dark':
        return 'Spinner-dark';
      default:
        return 'Spinner-dark';
    }
  };
  return <div className={getType()} />;
}

Spinner.propTypes = {
  type: PropTypes.oneOf(['light', 'dark'])
};

Spinner.defaultProps = {
  type: 'dark'
};

export default Spinner;
