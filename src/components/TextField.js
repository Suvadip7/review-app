import React from 'react'

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input  className='input-group mb-3'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default TextField