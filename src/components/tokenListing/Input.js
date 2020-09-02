import React,{ memo } from 'react'

const Input = ({ label, value, setValue, id, plc, type= 'text', note, required=true }) => {
  return (
    <div className="item">
      <label htmlFor={id}>{label}</label>
      <input
        title={note? note: ''}
        id={id}
        value={value}
        onChange={e => setValue(e.target.value)}
        className="form-control"
        type={type}
        placeholder={plc}
        required={required}
      />
    <span className="item-msg">{note && note}</span>
    </div>
  )
}

export default memo(Input)
