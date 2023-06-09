import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({section, changeSection, clearData, loadSampleData}) {
  return (
    <aside>
      <h3>Sections</h3>
      <ul>
        <li className='section' onClick={() => changeSection('Introduction')}>Introduction</li>
        <li className='section' onClick={() => changeSection('Personal Info')}>Personal Info</li>
        <li className='section' onClick={() => changeSection('Experience')}>Experience</li>
        <li className='section' onClick={() => changeSection('Education')}>Education</li>
        <li className='section' onClick={() => changeSection('Interests')}>Interests</li>
      </ul>
      <div className="button-container">
        <button className='generate-btn' onClick={() => changeSection('Generated CV')}>Generate CV</button>
      </div>
      <div className="button-container">
        <button className='generate-btn' onClick={clearData}>Clear data</button>
      </div>
      <div className="button-container">
        <button className='generate-btn' onClick={loadSampleData}>Load sample data</button>
      </div>
    </aside>
  );
}

export default Sidebar;
