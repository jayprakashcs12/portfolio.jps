import React, { useState } from 'react';
import Experience from './components/pages/Experience';
import Education from './components/pages/Education';
import Personal from './components/pages/Personal';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/pages/About';
import Home from './components/pages/Home';


function App() {

  let [theme, setTheme] = useState('light'),

  routesComponents = [
    { path: '/', component: Home }, { path: '/personal-info', component: Personal }, { path: '/experience', component: Experience },
    { path: '/education', component: Education }, { path: '/contact-us', component: Contact }, { path: '/about-us', component: About },
  ];

  return (
    <React.Fragment>
      <ToastContainer position="top-center" autoClose={5000} className="pro-toast" />
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        {routesComponents.map((route, i) => (
          <Route key={i} path={route.path} element={<route.component theme={theme} />} />
        ))}
      </Routes>
      <Footer theme={theme} />
    </React.Fragment>
  );
}

export default App;