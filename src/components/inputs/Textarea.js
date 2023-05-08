import React from 'react';

export default function Textarea({ fieldName, data, handleChange }) {
  return (
    <li className="row">
      <label>{fieldName}</label>
      <textarea
        value={data}
        onChange={(e) => handleChange(e, fieldName)}
      ></textarea>
    </li>
  );
}
