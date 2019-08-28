import { getContactDeals, deserialize } from './contacts';
import contactsJSON from './contacts.json';

describe('getContactInclude', () => {
  it('should return an array', () => {
  })
});

describe('getTagInclude', () => {
  it('should return an array', () => {
  })
});

xdescribe('deserialize', () => {
  it('should match snapshot', () => {
    const deserializedData = deserialize(JSON.parse(contactsJSON));
    expect(deserializedData).toMatchSnapshot();
  });
});
