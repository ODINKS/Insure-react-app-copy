import React from 'react'

const ActionButton = (props) => {
  return (
    <div className='bg-orange-500 text-white py-2 px-9 rounded mr-4 relative'>{props.title}</div>
  )
}

export default ActionButton