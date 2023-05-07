import { useState } from 'react';
import uniqid from "uniqid";
import Experience from './Experience';
import '../styles/Form.css'

export default function Experiences({cv, updateCV}) {
  const [experiences, setExperiences] = useState(cv?.experiences || [])

  function addEmptyExperience() {
    const newExperience = {id: uniqid(), Position:'a', Company:'b', }
    setExperiences([...experiences, newExperience])
  }

  return <div>
    {experiences.map(experience => <Experience key={experience.id} job={experience}/>)}
    <button onClick={addEmptyExperience}>Add an experience</button>
    </div>;
}
