import React from 'react'

export default function Education({education}) {
  const fromDate = new Date(education.From);
  const toDate = new Date(education.To);

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
        <div className="position">{education.School}</div>
        <div>{education.Degree} {' of '} {education.Major}</div>
      </div>
    </div>
  )
}
