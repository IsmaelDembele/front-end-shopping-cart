import React from 'react';
import numeral from 'numeral';

const Total = props => {
  //   const total = props.total;

  //put number to money-string
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
