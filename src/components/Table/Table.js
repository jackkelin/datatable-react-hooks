/**
 * 
 * Table skeleton
 <Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell></Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell></Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
 * 
 * 
 */

import React from 'react';
import PropTypes from 'prop-types';

function Table({ children }) {
  return <table>{children}</table>;
}

Table.propTypes = {
  children: PropTypes.node
};

export default Table;
