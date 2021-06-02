import React, { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import Total from './components/Total';
import { data } from './data';
import { reducer } from './components/reducer';

const defaultState = {
  total: 0,
  listItem: data,
  totalItemNumber: 0,
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    dispatch({ type: 'TOTAL_PRICE' });
    dispatch({ type: 'TOTAL_ITEM_NUMBER' });
  }, [state.listItem]);

  const addOneToQty = id => {
    dispatch({ type: 'ADD_ONE_QTY', payload: id });
  };

  const removeOneFromQty = id => {
    dispatch({ type: 'REMOVE_ONE_FROM_QTY', payload: id });
  };

  const deleteItem = id => {
    dispatch({ type: 'DELETE_ITEM', payload: id });
  };

  return (
    <>
      <Header itemNumber={state.totalItemNumber} />
      <Title />
      {state.listItem.map(item => (
        <Item
          key={item.id}
          item={item}
          addQty={id => addOneToQty(id)}
          removeQty={id => removeOneFromQty(id)}
          _delete={id => deleteItem(id)}
        />
      ))}
      <Total total={state.total} />
    </>
  );
};

export default App;
