export default function getObjectValues(obj) {
  const res = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      res.push(obj[i]);
    }
  }
  return res;
};
