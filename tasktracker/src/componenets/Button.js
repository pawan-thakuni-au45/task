import React from 'react'

const Button = ({bgColor,onClick,padding,text}) => {
  return (
    <div>
    <button className='buttons' 
    style={{background:bgColor,padding:padding}}
    onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button