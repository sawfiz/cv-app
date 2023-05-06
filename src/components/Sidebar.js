import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({section, changeSection, generateCV}) {
  return (
    <aside>
      <h3>Sections</h3>
      <ul>
        <li onClick={() => changeSection('Introduction')}>Introduction</li>
        <li onClick={() => changeSection('Personal Info')}>Personal Info</li>
        <li onClick={() => changeSection('Experience')}>Experience</li>
        <li onClick={() => changeSection('Education')}>Education</li>
        <li onClick={() => changeSection('Interests')}>Interests</li>
      </ul>
      <div className="button-container">
        <button onClick={generateCV}>Generate CV</button>
      </div>
    </aside>
  );
}

export default Sidebar;
