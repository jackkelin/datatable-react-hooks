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
}

export default data => {
  return {
    headers: ['Name', 'Total Value', 'Location Deals', 'Tags'],
    rows: data.reduce((acc, curr) => {
      if (curr.fullName) {
        console.log('curr', curr);
        acc.push({
          Name: curr.fullName,
          'Total Value': getTotalValue(curr.deals),
          'Location Deals': getLocationDeals(curr.deals),
          Tags: curr.tags ? curr.tags.map(t => t.name).join(', ') : ''
        });
      }
      return acc;
    }, [])
  };
};
