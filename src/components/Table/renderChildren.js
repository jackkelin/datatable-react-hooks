import React from 'react';

export default (children, { variation }) => {
  return React.Children.map(children, node =>
    React.cloneElement(node, { variation })
  );
};
