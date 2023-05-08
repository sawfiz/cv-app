import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Experience from './Experience';
import '../styles/Form.css';

export default function Experiences({ cv, updateCV }) {
  const [experiences, setExperiences] = useState(cv?.experiences || []);
  useEffect(() => {
    updateCV('experiences', experiences);
  },[experiences]);

  function addEmptyExperience() {
    const newExperience = { id: uniqid(), Position: '', Company: '' };
    setExperiences([...experiences, newExperience]);
  }

  function updateExperiences(e, attr, id) {
    const updatedExperiences = experiences.map((experience) => {
      if (experience.id === id) {
        const job = { ...experience, [attr]: e.target.value };
        return job;
      } else return experience;
    });
    setExperiences(updatedExperiences);
  }


  function deleteExperience(id) {
    const updatedExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(updatedExperiences);
  }

  return (
    <div>
      {experiences.map((experience) => (
        <Experience
          key={experience.id}
          job={experience}
          updateExperiences={updateExperiences}
          deleteExperience={deleteExperience}
        />
      ))}
      <button onClick={addEmptyExperience}>Add an experience</button>
    </div>
  );
}
