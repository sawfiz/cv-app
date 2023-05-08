import React from 'react';
import Experience from './Experience';

export default function Experiences({ experiences }) {
  return (
    <div>
      <div className="sub-heading">Experience</div>
      {experiences.map((experience) => (
        <Experience key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
