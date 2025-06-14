import React, { useState } from "react";
import Home from "./Component/Home /home";
import Book from "./Component/Order/book";
import Contact from "./Component/Contact/contact";
import Services from "./Component/Service /service";
import Tracking from "./Component/Tracking/tracking";
import Nav from "./Component/Home /Navbar/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Home /Footer/footer";
import AuthModal from "./Component/Home /Auth_page/auth";

const App = () => {
  const [authType, setAuthType] = useState(null);
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
        <div>
          <Footer
            openLogin={() => setAuthType("login")}
            openSignup={() => setAuthType("signup")}
          />

          {authType && (<AuthModal
            type={authType}
            onClose={() => setAuthType(null)}
            switchAuthType={setAuthType}
          />)}
        </div>
      </Router>
    </div>
  );
};

export default App;
