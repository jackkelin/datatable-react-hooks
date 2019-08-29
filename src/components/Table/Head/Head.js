import React from 'react';
import PropTypes from 'prop-types';
import renderChildren from '../renderChildren';

function Head({ children }) {
  return <thead>{renderChildren(children, { variation: 'head' })}</thead>;
}

Head.propTypes = {
  children: PropTypes.node
};

export default Head;
