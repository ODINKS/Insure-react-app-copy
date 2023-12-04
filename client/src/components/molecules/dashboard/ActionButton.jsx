import React from 'react'

const ActionButton = (props) => {
  return (
    <button className='bg-[--orange-bg] text-white py-2 px-9 rounded mr-4 relative' onClick={props.ActionButton}>{props.title}</button>
  )
}

export default ActionButton