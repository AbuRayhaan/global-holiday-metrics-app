import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from './components/home/Home';
import City from './components/pollutant/cityDetails'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:city" element={<City />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
