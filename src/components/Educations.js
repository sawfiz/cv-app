import { useState } from 'react';
import uniqid from 'uniqid';
import Education from './Education';
import '../styles/Form.css';

export default function Educations({ cv, updateCV }) {
  const [educations, setEducations] = useState(cv?.educations || []);

  function addEmptyEducation() {
    const newEducation = {
      id: uniqid(),
      Degree: '',
      Major: '',
      School: '',
      From: '',
      To: '',
    };
    setEducations([...educations, newEducation]);
  }

  function updateEducations(e, attr, id) {
    const updatedEducations = educations.map((education) => {
      if (education.id === id) {
        const learning = { ...education, [attr]: e.target.value };
        return learning;
      } else return education;
    });
    setEducations(updatedEducations);
  }

  function saveEducations() {
    updateCV('educations', educations);
  }

  function deleteEducation(id) {
    const updatedEducations = educations.filter(
      (education) => education.id !== id
    );
    setEducations(updatedEducations);
    // Do this because setExperiences() is async
    updateCV('educations', updatedEducations);
  }

  return (
    <div>
      {educations.map((education) => (
        <Education
          key={education.id}
          learning={education}
          updateEducations={updateEducations}
          saveEducations={saveEducations}
          deleteEducation={deleteEducation}
        />
      ))}
      <button onClick={addEmptyEducation}>Add an education</button>
    </div>
  );
}
