import { convertMoneyFromAndTo } from '../../utilities/conversions';

const getTotalValue = deals => {
  if (!deals) return 0;
  const sum = deals.reduce((acc, curr) => {
    if (curr.currency) {
      acc =
        acc +
        convertMoneyFromAndTo(
          parseInt(curr.value),
          curr.currency.toUpperCase()
        );
    }
    return acc;
  }, 0);
  return `$${sum.toLocaleString()}`;
};

const getLocationDeals = deals => {
  return deals.length;
};

// NOTE: Hard coding location until we are able to receive in API
export default data => {
  return {
    headers: ['Contact', 'Total Value', 'Location', 'Deals', 'Tags'],
    rows: data.reduce((acc, curr) => {
      if (curr.fullName) {
        acc.push({
          Name: curr.fullName,
          'Total Value': getTotalValue(curr.deals),
          'Location ': 'Chicago, IL, USA',
          Deals: getLocationDeals(curr.deals),
          Tags: curr.tags ? curr.tags.map(t => t.name).join(', ') : ''
        });
      }
      return acc;
    }, [])
  };
};
