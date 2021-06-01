import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Total from './components/Total';
import { data } from './data';
import { totalQuantity, totalPrice, resetId } from './helper';

const App = () => {
  const [total, setTotal] = useState(0);
  const [listItem, setlistItem] = useState(data);
  const [totalItemNumber, setTotalItemNumber] = useState(0);

  useEffect(() => {
    setTotal(totalPrice(listItem));
    setTotalItemNumber(totalQuantity(listItem));
  }, [listItem]);

  const addOneItem = id => {
    const index = id - 1;
    const tempArray = [...listItem];
    tempArray[index].qty += 1;
    setlistItem(tempArray);
  };

  const removeOneItem = id => {
    const index = id - 1;
    const tempArray = [...listItem];
    tempArray[id - 1].qty -= 1;
    setlistItem(tempArray);
    listItem[index].qty === 0 && deleteItem(id);
  };

  const deleteItem = id => {
    console.log(id);
    const newlistItem = listItem.filter(item => {
      return id !== item.id;
    });

    resetId(newlistItem);
    setlistItem(newlistItem);
  };

  return (
    <>
      <Header itemNumber={totalItemNumber} />
      <Title />
      {listItem.map(item => (
        <Item
          key={item.id}
          item={item}
          addQty={id => addOneItem(id)}
          removeQty={id => removeOneItem(id)}
          _delete={id => deleteItem(id)}
        />
      ))}
      <Total total={total} />
    </>
  );
};

export default App;
