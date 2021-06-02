import React from 'react';
import numeral from 'numeral';

const Total = props => {
  //put number to money-string 9100.21 -> '$9,100.21'
  const total = numeral(props.total).format('$0,0.00');

  return (
    <>
      <hr />
      <div className='total'>
        <p className='total_letter'>Total</p>
        <p className='total_number'>{total}</p>
      </div>
    </>
  );
};

export default Total;
