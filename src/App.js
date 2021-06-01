import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Total from './components/Total';
import { data } from './data';
import { totalQuantity } from './helper';

const App = () => {
  const [total, setTotal] = useState(0);
  const [listItem, setlistItem] = useState(data);
  const [totalItemNumber, setTotalItemNumber] = useState(0);

  useEffect(() => {
    let myTotal = 0;
    listItem.forEach(item => {
      //put string-money to number
      const currentTotal = numeral(item.price);
      myTotal += currentTotal._value;
      setTotalItemNumber(totalQuantity(listItem));
    });

    setTotal(myTotal);
  }, [listItem]);

  const addOneItem = (id) => {
    // console.log(e.target, id);
    const tempArray = [...listItem];
    tempArray[id - 1].qty += 1;
    setlistItem(tempArray);
  };

  const removeOneItem = (id) => {
    const tempArray = [...listItem];
    tempArray[id - 1].qty -= 1;
    setlistItem(tempArray);
  };

  return (
    <>
      <Header itemNumber={totalItemNumber} />
      <Title />
      {listItem.map(item => (
        <Item
          key={item.id}
          item={item}
          addQty={(id) => addOneItem(id)}
          removeQty={(id) => removeOneItem(id)}
        />
      ))}
      <Total total={total} />
    </>
  );
};

export default App;
