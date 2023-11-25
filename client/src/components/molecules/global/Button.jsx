import React from 'react'
import { Link } from 'react-router-dom'
import "../../../styles/style.css"

const Button = (props) => {
    const {description, width, fontSize, route} = props

  return (
    <div>
      <button className={`bg-[#e76927] text-white px-6 py-3 rounded-[8px] text-bold m-2 hover:bg-[#ffa074] hover:text-[#ffffff] align-self-center ${width} ${fontSize}`}>
        <Link to={route}>{description}</Link>
      </button>
    </div>
  )
}

export default Button
