import React,{ memo } from 'react'

const Input = ({ label, value, setValue, id, plc, type= 'text', note, required=true, error }) => {
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
      {!error &&<span className="item-msg">{note && note}</span>}
      {error && <span className="item-msg text-danger">{error}</span>}
    </div>
  )
}

export default memo(Input)
