import React from 'react';


export default function TextInput({ fieldName, data, handleChange }) {
  return (
    <li className="row">
      <label>{fieldName}</label>
      <input value={data} onChange={(e) => handleChange(e, fieldName)}></input>
    </li>
  );
}
