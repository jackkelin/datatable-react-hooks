import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function Cell({ children, className, variation }) {
  const isThead = Boolean(variation === 'head');

  return React.createElement(
    isThead ? 'th' : 'td',
    {
      className: cn('Table__cell', { ['Table__cell-head']: isThead }, className)
    },
    children
  );
}

Cell.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.oneOf(['head', 'body']),
  className: PropTypes.string
};

export default Cell;
