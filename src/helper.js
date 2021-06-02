import numeral from 'numeral';

export const totalQuantity = myArray => {
  let total = 0;
  myArray.forEach(el => {
    total += el.qty;
  });
  return total;
};

export const totalPrice = myArray => {
  let myTotal = 0;
  myArray.forEach(item => {
    //put string-money to number '$100.45' -> 100.45
    const currentTotal = numeral(item.price);
    myTotal += currentTotal._value * item.qty;
  });
  return myTotal;
};

export const myPosition = (listItem, id) => {
  let position = -1;
  listItem.forEach((item, i) => {
    if (item.id === id) position = i;
  });
  return position;
};
