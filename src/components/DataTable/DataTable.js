import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Table from '../Table';

function DataTable({ headers, rows, tableProps, columnProps }) {
  const getColumnProps = index => {
    if (!columnProps) return {};
    let result = {};
    for (let prop in columnProps) {
      columnProps[prop].forEach((item, cIndex) => {
        if (cIndex === index) {
          result[prop] = item;
        }
      });
    }
    return result;
  };

  return (
    <Table {...tableProps}>
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
            {Object.keys(row).map((k, index) => (
              <Table.Cell key={shortid.generate()} {...getColumnProps(index)}>
                {row[k]}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

DataTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.object),
  tableProps: PropTypes.object,
  columnProps: PropTypes.object
};

export default DataTable;
