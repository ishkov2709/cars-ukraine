export const createArrayPrice = maxPrice => {
  const arr = [];
  for (let i = 0; i <= maxPrice; i += 10) {
    if (i === 0) {
      const obj = { value: i, label: 'All' };
      arr.push(obj);
    }
    if (i !== 0) {
      const obj = { value: i, label: '$' + i };
      arr.push(obj);
    }
  }
  return arr;
};
