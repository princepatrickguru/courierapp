import React from 'react';
import './input.css';

export const Input = ({type, name, title, onChange}) => {
  return (
    <>
      <label htmlFor={name}>{title}
          <input className='input' type={type} name={name} id={name} placeholder={title} onChange={(e)=>{onChange(e)}}/>
      </label>
    </>
  )
}

// export Input;
