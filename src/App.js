import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from './hooks';
import { Navbar, Footer } from './components';
import { AboutUs, Contact, Home, Support, Team } from './pages';
import './App.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app__container scroll-smooth snap-none">
          <Navbar />
          <div className="h-[124px] md:h-20"/>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/team" element={<Team />} />
              <Route path="/support" element={<Support />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

