import React from 'react'

const Button = ({children,className,onClick}:any) => {
  return (
    <button onClick={onClick} className={`text-white font-inter py-2 px-4 rounded-3xl bg-[#4100FA] ${className}`}>{children}</button>
  )
}

export default Button