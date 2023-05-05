import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  const [section, setSection] = useState('Introduction')


  return (
    <div className="App">
      <Header className='header'/>
      <Header className='header'/>
      <Sidebar className='sidebar' section={section} changeSection={setSection}/>
      <Main className='main' section={section}/>
      <Footer className='footer'/>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
