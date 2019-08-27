import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Table from '../Table';

function DataTable({ headers, rows }) {
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          {headers.map(head => (
            <Table.Cell key={shortid.generate()}>{head}</Table.Cell>
          ))}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map(row => (
          <Table.Row key={shortid.generate()}>
            {Object.keys(row).map(k => (
              <Table.Cell key={shortid.generate()}>{row[k]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

DataTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object)
};

export default DataTable;
