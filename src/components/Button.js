import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <button 
    className='h-10 px-4 text-white rounded-full bg-slate-900 text-sm font-medium focus:ring-4 focus:ring-slate-300 hover:bg-slate-700'
    onClick={onClick}
    >
    {text}
    </button>
    )
}

export default Button