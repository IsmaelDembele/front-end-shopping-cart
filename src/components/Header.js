import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = props => {
  const { itemNumber } = props;
  return (
    <div className='header'>
      <h1>IDCom</h1>
      <p className='item_number'>{itemNumber}</p>
      <ShoppingCartIcon className='cart' />
    </div>
  );
};

export default Header;
