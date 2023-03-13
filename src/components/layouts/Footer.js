import React from 'react';

const Footer = ({ children }) => {
    return (
      <div className="">
     <footer>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-sm-12 py-3">
            <div className="copyright-box">
              <p className="copyright text-white">&copy; Copyright <strong>Mo Techs</strong>. All Rights Reserved</p>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
      </div>
    );
  };
  
  export default Footer;