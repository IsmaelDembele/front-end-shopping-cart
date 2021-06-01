export const totalQuantity = myArray => {
  let total = 0;

  myArray.forEach(el => {
    total += el.qty;
  });

  return total;
};
