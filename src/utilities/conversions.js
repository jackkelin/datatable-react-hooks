import fx from 'money';
import rates from './fixtures/moneyRates';

// Currency Exchange Rate Data gathered from https://openexchangerates.org
fx.rates = {
  ...rates.rates
};
fx.base = 'USD';
fx.settings = { from: 'USD', to: 'GBP' };

const convertMoneyFromAndTo = (value, currency, base = fx.base) => {
  return fx.convert(1000, { from: currency, to: base });
};

export { convertMoneyFromAndTo };
