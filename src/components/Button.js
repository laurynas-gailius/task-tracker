import React from 'react'

const Button = ({ text, onClick, color }) => {

  const classNames = `
  h-10
  px-4
  text-white
  rounded-full
  ${color}
  text-sm
  font-medium 
  focus:ring-4
  focus:ring-slate-300
  hover:bg-slate-700
  `

  return (
    <button 
    className={classNames}
    onClick={onClick}
    >
    {text}
    </button>
    )
}

export default Button