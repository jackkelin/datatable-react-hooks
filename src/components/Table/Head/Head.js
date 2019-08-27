import React from 'react';
import renderChildren from '../renderChildren';

function Head({ children }) {
  return <thead>{renderChildren(children, { variation: 'head' })}</thead>;
}

export default Head;
