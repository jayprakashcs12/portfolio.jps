import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import 'react-toastify/dist/ReactToastify.css';
import { RoutesComponents } from "./Data";

function App() {

  let [theme, setTheme] = useState('light');

  return (
    <React.Fragment>
      <ToastContainer position="top-center" autoClose={5000} className="pro-toast" />
      <Header theme={theme} setTheme={setTheme} />
      <Routes>
        {RoutesComponents.map((route, i) => (
          <Route key={i} path={route.path} element={<route.component theme={theme} />} />
        ))}
      </Routes>
      <Footer theme={theme} />
    </React.Fragment>
  );
}

export default App;