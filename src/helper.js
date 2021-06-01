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
    //put string-money to number
    const currentTotal = numeral(item.price);
    myTotal += currentTotal._value*item.qty;
  });
  return myTotal;
};

export const resetId = myArray=>{
    myArray.forEach((item,index)=>{
        item.id = index+1;
    });
}