import React, { useState } from 'react';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Personal from './components/pages/Personal';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {

  let [theme, setTheme] = useState('light');

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/personal-info" element={<Personal theme={theme} />} />
        <Route path="/experience" element={<Experience theme={theme} />} />
        <Route path="/education" element={<Education theme={theme} />} />
        <Route path="/contact-us" element={<Contact theme={theme} />} />
        <Route path="/about-us" element={<About theme={theme} />} />
      </Routes>
      <Footer theme={theme} />
    </>
  );
}

export default App;