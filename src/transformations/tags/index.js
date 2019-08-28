const _deserialize = data => ({
  attributes: {
    ...data
  },
  id: data.id,
  name: data.tag
});

const deserialize = {
  set: data => {
    if (!data) return;
    return data.map(d => _deserialize(d));
  },
  item: data => {
    if (!data) return;
    return _deserialize(data);
  }
};

export { deserialize };
