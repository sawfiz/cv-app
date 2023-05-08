import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  // Load data from local storage
  const savedData = localStorage.getItem('CV');
  let cvData;
  if (savedData) {
    cvData = JSON.parse(savedData);
  } 

  const [cv, setCv] = useState(cvData || {});

  const [section, setSection] = useState('Personal Info');

  function updateCV(sectionName, contentObj) {
    const newCV = { ...cv, [sectionName]: contentObj }
    setCv(newCV);
    // Do this because setCv() is aync
    localStorage.setItem('CV', JSON.stringify(newCV));
  }

  function generateCV() {
    console.log('🚀 ~ file: App.js: ~ cv:', cv);
  }

  return (
    <div className="App">
      <Header />
      <Sidebar
        section={section}
        changeSection={setSection}
        generateCV={generateCV}
      />
      <Main cv={cv} section={section} updateCV={updateCV} />
      <Footer />
    </div>
  );
}

export default App;
