import React from 'react';

export default function Experience({ experience }) {
  const fromDate = new Date(experience.From);
  const toDate = new Date(experience.To);

  return (
    <div className="entry">
      <div>
        <div className='date'>
          {fromDate.getFullYear()}-
          {fromDate.toLocaleString('en-US', { month: '2-digit' })}
        {' '} ~ {' '} 
          {toDate.getFullYear()}-
          {toDate.toLocaleString('en-US', { month: '2-digit' })}
        </div>
      </div>
      <div>
        <div className="position">{experience.Position}</div>
        <div>{experience.Company}</div>
        <div className="location">{experience.Location}</div>
        <div className="">{experience.Responsibilities}</div>
      </div>
    </div>
  );
}
