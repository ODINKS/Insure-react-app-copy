import React from 'react'

const Button = (props) => {
    const {description, width} = props

  return (
    <div>
      <button className={`bg-[#e76927] text-white font-bold px-6 py-3 rounded-[8px] text-bold text-sm m-2 hover:bg-[#ffa074] hover:text-[#ffffff] ${width}`}>
        <a href="">{description}</a>
      </button>
    </div>
  )
}

export default Button
