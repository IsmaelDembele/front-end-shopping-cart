import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Item from './components/Item';
import { listItem } from './data';

const App = () => {
  return (
    <>
      <Header />
      <Title />
      {listItem.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default App;
