import React, { useState } from 'react';
import Services from './Services';
import About from './InfoAbout';
import Home from './Home';
import Booking from './Booking';
import Events from './Events';
import Contact from './Contact';
import UserCabinet from './UserCabinet';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/stores">Услуги</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/booking">Запись</Link></li>
            <li><Link to="/events">Мероприятия</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
            <li><Link to="/usercabinet">Личный кабинет</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/usercabinet" element={<UserCabinet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
