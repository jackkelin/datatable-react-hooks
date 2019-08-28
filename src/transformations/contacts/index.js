import { deserialize as deserializeTags } from '../tags';
import { deserialize as deserializeDeals } from '../deals';
const getInclude = (data, contactId, param) => {
  if (!data || !data[param]) return [];
  return data[param].filter(t => {
    return t.contact === contactId;
  });
};

const getTagInclude = (data, contactTags) => {
  if (!data || !data.tags) return [];
  return contactTags.map(c => {
    return deserializeTags.item(data.tags.find(t => t.id === c.tag));
  });
};

const deserialize = (data, { withTags, withDeals }) => {
  if (!data || !data.contacts) return;
  return data.contacts.map(c => {
    return {
      attributes: {
        ...data
      },
      firstName: c.firstName,
      lastName: c.lastName,
      fullName:
        c.firstName || c.lastName ? `${c.firstName} ${c.lastName}` : undefined,
      // conditionally set include data
      ...(withDeals && {
        deals: getInclude(data, c.id, 'deals').map(d =>
          deserializeDeals.item(d)
        )
      }),
      ...(withTags && {
        tags: getTagInclude(data, getInclude(data, c.id, 'contactTags'))
      })
    };
  });
};

export { deserialize };
