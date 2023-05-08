import React from 'react';

export default function Header({ info }) {
  return (
    <div>
      <div className='name'>
        {info['First Name']} {info['Last Name']}
      </div>
      <div className='contact-info'>
        <div>
          <div>{info.Address}</div>
          <div>{info.City}</div>
          <div>{info["Postal Code"]}</div>
        </div>
        <div>
          <div>{info.Phone}</div>
          <div>{info.Email}</div>
        </div>
      </div>
      <hr></hr>
      <div>
        <div className='sub-heading'>Description</div>
        <div className='description-text'>{info.Description}</div>
      </div>
    </div>
  );
}
