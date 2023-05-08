import { useState } from 'react';
import uniqid from 'uniqid';
import Experience from './Experience';
import '../styles/Form.css';

export default function Experiences({ cv, updateCV }) {
  const [experiences, setExperiences] = useState(cv?.experiences || []);

  function addEmptyExperience() {
    const newExperience = { id: uniqid(), Position: 'a', Company: 'b' };
    setExperiences([...experiences, newExperience]);
  }

  function updateExperiences(e, attr, id) {
    const updatedExperiences = experiences.map(experience => {
      if (experience.id === id) {
        const job = {...experience, [attr]: e.target.value}
        return job;
      }
      else return experience;
    })
    setExperiences(updatedExperiences)
  }

  function saveExperience() {
    updateCV('experiences', experiences)
  }

  return (
    <div>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          job={experience}
          updateExperiences={updateExperiences}
          saveExperience = {saveExperience}
        />
      ))}
      <button onClick={addEmptyExperience}>Add an experience</button>
    </div>
  );
}
