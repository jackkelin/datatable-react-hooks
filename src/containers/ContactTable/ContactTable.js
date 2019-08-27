import React from 'react';
import DataTable from '../../components/DataTable';

const data = {
  headers: ['Name', 'Total Value', 'Location Deals', 'Tags'],
  rows: [
    {
      name: <a href="test">John Smith</a>,
      value: '$86,000',
      location: 'Chicago',
      deals: 'Hot deals',
      tags: 'customer, new-deals'
    }
  ]
};

function ContactTable() {
  return <DataTable headers={data.headers} rows={data.rows} />;
}

export default ContactTable;
