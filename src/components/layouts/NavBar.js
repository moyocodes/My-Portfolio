/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-white navbar-trans fixed-top"  id="mainNav">
        <div className="container px-4">
        <a className="navbar-brand js-scroll" >
        <img className="rounded-circle" src="/moyo.png" width="50" height="50" alt=""/>
        </a>
        
        <a className="navbar-toggler collapsed" type="button" data-toggle="collapse" href="#navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        </a>
        <div className="navbar-collapse collapse justify-content-end" id="navbarResponsive">
     <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link  nav-link-ltr text-dark" href="#home">Home</a>
    </li>
    <li className="nav-item">
    <a className="nav-link nav-link-ltr text-dark" href="#about">About</a>
    </li>
    {/* <li className="nav-item">
    <a className="nav-link nav-link-ltr text-dark" href="#projects">Projects</a>
    </li> */}
    {/* <li className="nav-item">
    <a className="nav-link  nav-link-ltr text-dark" href="#portfolio">Portfolio</a>
  </li> */}
  <li className="nav-item">
    <a className="nav-link  nav-link-ltr text-dark" href="#contact">Contact</a>
    </li>
</ul>
</div>
</div>
    </nav>
  
  );
};

export default NavBar;
