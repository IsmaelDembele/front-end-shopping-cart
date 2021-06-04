import React, { useEffect } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Item = React.memo(props => {
  const { name, url, price, id, qty } = props.item;
  const { _delete, addQty, removeQty } = props;

  useEffect(() => {
    console.count('test');
    qty === 0 && _delete(id);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  return (
    <div className='item'>
      <img src={url} alt='gkg' />

      <div className='description'>
        <p>{name}</p>
        <p className='price'>{price}</p>
        <p className='delete' onClick={() => _delete(id)}>
          delete
        </p>
      </div>
      <div className='qty'>
        <ArrowDropUpIcon className='up_arrow' onClick={() => addQty(id)} />
        <p className='number'>{qty}</p>
        <ArrowDropDownIcon
          className='down_arrow'
          onClick={() => removeQty(id)}
        />
      </div>
    </div>
  );
});

export default Item;
