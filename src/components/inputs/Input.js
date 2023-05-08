import React from 'react';


export default function Input({ type, fieldName, data, handleChange }) {
  return (
    <li className="row">
      <label>{fieldName}</label>
      <input type={type} value={data} onChange={(e) => handleChange(e, fieldName)}></input>
    </li>
  );
}
