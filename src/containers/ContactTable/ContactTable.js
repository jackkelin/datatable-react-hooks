import React, { useMemo } from 'react';
import useFetch from '../../hooks/useFetch';
import DataTable from '../../components/DataTable';
import Spinner from '../../components/Spinner';
import { deserialize } from '../../transformations/contacts/index.js';
import buildTableData from './buildTableData';

function ContactTable() {
  const [data, isLoading, isError] = useFetch('contacts', {
    params: { limit: 100, include: 'deals,contactTags.tag,plusAppend' }
  });
  const tableData = useMemo(() =>
    data
      ? buildTableData(deserialize(data, { withTags: true, withDeals: true }))
      : undefined
  );
  return (
    <div>
      {isLoading && <Spinner />}
      {isError && <h3>Something went wrong, please refresh page</h3>}
      {data && (
        <DataTable
          headers={tableData.headers}
          rows={tableData.rows}
          tableProps={{ columnSizes: [30, 15, 30, 15, 10] }}
          columnProps={{ className: ['Table__cell-action'] }}
        />
      )}
    </div>
  );
}

export default ContactTable;
