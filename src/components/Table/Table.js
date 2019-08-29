import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

function Table({ children, columnSizes }) {
  return (
    <table className="Table">
      {columnSizes && (
        <colgroup>
          {columnSizes.map(col => {
            return (
              <col
                key={shortid.generate()}
                span="1"
                style={{ width: `${col}%` }}
              />
            );
          })}
        </colgroup>
      )}
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node,
  columnSizes: PropTypes.arrayOf(PropTypes.number)
};

export default Table;
