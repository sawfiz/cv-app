import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import { sampleData } from './components/sampleData';
import { emptyCV } from './components/emptyCV';

import './styles/App.css';

function App() {
  // Load data from local storage
  const savedData = localStorage.getItem('CV');
  let cvData;
  if (savedData) {
    cvData = JSON.parse(savedData);
  }

  const [cv, setCv] = useState(cvData || emptyCV);

  const [section, setSection] = useState('Introduction');

  function clearData() {
    setCv(emptyCV)
    setSection('Introduction')
  }

  function loadSampleData() {
    setCv(sampleData);
    setSection('Generated CV')
  }

  function updateCV(sectionName, contentObj) {
    const newCV = { ...cv, [sectionName]: contentObj };
    setCv(newCV);
    // Do this because setCv() is aync
    localStorage.setItem('CV', JSON.stringify(newCV));
  }

  return (
    <div className="App">
      <Header />
      <Sidebar
        section={section}
        changeSection={setSection}
        clearData={clearData}
        loadSampleData={loadSampleData}
      />
      <Main cv={cv} section={section} updateCV={updateCV} />
      <Footer />
    </div>
  );
}

export default App;
