import React from 'react';
import Education from './Education';

export default function Educations({educations}) {
  return <div>
    <div className='sub-heading'>Education</div>
    {educations.map(education => <Education key={education.id} education={education} />)}
    </div>;
}
