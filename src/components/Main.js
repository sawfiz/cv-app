import React from 'react';
import PersonalInfo from './PersonalInfo';
import Experiences from './Experiences';
import Educations from './Educations';
import Output from './Output';
import '../styles/Main.css';

function Main({ cv, section, updateCV }) {
  let heading = <h2>{section}</h2>;
  let content;

  switch (section) {
    case 'Introduction':
      content = (
        <div>
          <p>Fill out forms in each section.</p>
          <p>Click on the Generate CV button to generate a CV.</p>
        </div>
      );
      break;

    case 'Personal Info':
      content = <PersonalInfo cv={cv} updateCV={updateCV} />;
      break;

    case 'Experience':
      content = <Experiences cv={cv} updateCV={updateCV} />;
      break;

    case 'Education':
      content = <Educations cv={cv} updateCV={updateCV} />;
      break;

    case 'Generated CV':
      heading = '';
      content = <Output cv={cv} />;
      break;

    default:
      break;
  }
  return (
    <main>
      {heading}
      {content}
    </main>
  );
}

export default Main;
