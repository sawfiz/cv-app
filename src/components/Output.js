import React from 'react';
import '../styles/Output.css';
import Header from './outputs/Header';
import Experiences from './outputs/Experiences';
import Educations from './outputs/Educations';

export default function Output({ cv }) {
  return (
    <div className="paper">
      <Header info={cv.personalInfo} />
      <Experiences experiences={cv.experiences} />
      <Educations educations={cv.educations} />
    </div>
  );
}
