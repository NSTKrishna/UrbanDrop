import React from 'react'
import Home from './Component/Home /home'
import Book from './Component/Book/book'
import Contact from './Component/Contact/contact'
import Services from './Component/Service /service'
import Tracking from './Component/Tracking/tracking'
import Nav from './Component/Home /Navbar/nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App