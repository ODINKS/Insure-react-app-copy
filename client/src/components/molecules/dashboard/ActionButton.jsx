import React from 'react';

const ActionButton = (props) => {
  return (

    <div className='bg-[--orange-bg] text-white py-2 px-9 rounded mr-4 relative' onClick={props.onClick}>
      {props.title}
    </div>
  );
}


export default ActionButton;
