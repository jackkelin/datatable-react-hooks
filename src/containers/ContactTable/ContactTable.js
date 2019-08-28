import React, { useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import DataTable from '../../components/DataTable';
import { deserialize } from '../../transformations/contacts/index.js';
import buildTableData from './buildTableData';
import sampleData from './sample.json';

const mockData = {
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
  // TODO: undo
  // const [data, isLoading, isError] = useFetch('contacts', {
  //   params: { limit: 50, include: 'deals,contactTags.tag' }
  // });
  const [data, isLoading, isError] = [sampleData, false, false];
  let tableData = useMemo(() =>
    data
      ? buildTableData(deserialize(data, { withTags: true, withDeals: true }))
      : undefined
  );
  return (
    <div>
      {isLoading && <h2>Loading App...</h2>}
      {isError && <h3>Something went wrong :(</h3>}
      {data && <DataTable headers={tableData.headers} rows={tableData.rows} />}
    </div>
  );
}

export default ContactTable;
