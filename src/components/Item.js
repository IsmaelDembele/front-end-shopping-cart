import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Item = props => {
  const {name,url,price} = props.item;

  return (
    <div className='item'>
      <img src={url} alt='gkg' />

      <div className='description'>
        <p>{name}</p>
        <p>{price}</p>
        <p className='delete'>delete</p>
      </div>
      <div className='qty'>
        <ArrowDropUpIcon className='up_arrow' />
        <p className='number'>1</p>
        <ArrowDropDownIcon className='down_arrow' />
      </div>
    </div>
  );
};

export default Item;
