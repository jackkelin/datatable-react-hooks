import React from 'react';
import PropTypes from 'prop-types';

function Cell({ children, variation }) {
  const isThead = Boolean(variation === 'head');
  const style = {
    color: isThead ? 'red' : 'black'
  };
  return React.createElement(
    isThead ? 'th' : 'td',
    {
      style,
      scope: 'col'
    },
    children
  );
}

Cell.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.oneOf(['head', 'body'])
};

export default Cell;
