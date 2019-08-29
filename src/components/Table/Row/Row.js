import React from 'react';
import PropTypes from 'prop-types';
import renderChildren from '../renderChildren';
import cn from 'classnames';

function Row({ children, variation }) {
  return (
    <tr
      className={cn('Table__row', {
        ['Table__row-head']: Boolean(variation === 'head')
      })}
    >
      {renderChildren(children, { variation })}
    </tr>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.string
};

export default Row;
