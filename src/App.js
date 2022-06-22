import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/Home';
import Country from './pages/country/Country';
import Footer from './components/Footer';
import './scss/App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country_code" element={<Country />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
