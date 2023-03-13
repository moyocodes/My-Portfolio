/* eslint-disable react/jsx-indent */
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';


const Overview = () => {
  return (
    <>
      <div className="" />

      <div className="container-fluid" style={{
      backgroundImage: 
      "url('/work.jpeg')",
             height:'100vh',
             padding:'90px',
            //  fontSize:'20px',
             backgroundSize: 'cover',
             opacity: '1.8',
             backgroundRepeat: 'no-repeat',
  }}>
      <NavBar />
  
      <Home />
      </div>
  
 <About />
 {/* <Services /> */}
 {/* <Portfolio /> */}
 <Contact />
 <Footer />

    </>
  );
};

export default Overview;
