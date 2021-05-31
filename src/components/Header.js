import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
  return (
    <div className='header'>
      <h1>IDCom</h1>
      <ShoppingCartIcon className='cart' />
    </div>
  );
};

export default Header;
