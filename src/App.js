import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Total from './components/Total';
import { data } from './data';
import numeral from 'numeral';

const App = () => {
  const [total, setTotal] = useState(0);
  const [listItem, setlistItem] = useState(data);

  useEffect(() => {
    let number = 0;
    listItem.forEach(item => {
      //put string-money to number
      const currentTotal = numeral(item.price);
      number += currentTotal._value;
    });

    setTotal(number);
  }, [listItem]);

  return (
    <>
      <Header />
      <Title />
      {listItem.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <Total total={total} />
    </>
  );
};

export default App;
