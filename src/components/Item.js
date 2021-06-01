import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Item = props => {
  const { name, url, price, id, qty } = props.item;

  

  return (
    <div className='item'>
      <img src={url} alt='gkg' />

      <div className='description'>
        <p>{name}</p>
        <p className='price'>{price}</p>
        <p className='delete' onClick={() => props._delete(id)}>
          delete
        </p>
      </div>
      <div className='qty'>
        <ArrowDropUpIcon
          className='up_arrow'
          onClick={() => props.addQty(id)}
        />
        <p className='number'>{qty}</p>
        <ArrowDropDownIcon
          className='down_arrow'
          onClick={() => props.removeQty(id)}
        />
      </div>
    </div>
  );
};

export default Item;
