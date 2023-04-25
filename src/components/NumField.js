import React from 'react'

const NumField = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input  className='input-group mb-3'

        type="number"
        min="1"
        max="10"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default NumField