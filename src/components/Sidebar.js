import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({section, changeSection}) {
  return (
    <aside>
      <h3>Sections</h3>
      <ul>
        <li onClick={() => changeSection('Personal Info')}>Personal Info</li>
        <li onClick={() => changeSection('Experience')}>Experience</li>
        <li onClick={() => changeSection('Education')}>Education</li>
        <li onClick={() => changeSection('Interests')}>Interests</li>
      </ul>
      <div className="button-container">
        <button>Generate CV</button>
      </div>
    </aside>
  );
}

export default Sidebar;
