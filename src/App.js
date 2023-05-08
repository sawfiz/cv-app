import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  const [cv, setCv] = useState({});

  const [section, setSection] = useState('Personal Info');

  function updateCV(sectionName, contentObj) {
    setCv({ ...cv, [sectionName]: contentObj });
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
