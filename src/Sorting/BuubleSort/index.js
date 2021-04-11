const index = (array) => {
  let ar = array;
  let length = ar.length;
  let temp;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (ar[j] < ar[j + 1]) {
        temp = ar[j];
        ar[j] = ar[j + 1];
        ar[j + 1] = temp;
      }
    }
  }
  return ar;
};

export default index;
