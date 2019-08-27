import React from 'react';
import renderChildren from '../renderChildren';

function Row({ children, variation }) {
  return <tr>{renderChildren(children, { variation })}</tr>;
}

export default Row;
