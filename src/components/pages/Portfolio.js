/* eslint-disable react/jsx-indent */
import React from 'react';

const Portfolio = () => {
  return (
    <>
    <section className="portfolio" id="portfolio">
    <div className="container" >
      <div className="row">
      <div className="col-md-4"
      >
     <h1 className = "title"> 9</h1>
     <p className="subtitle_2"> Total Projects
     </p>
      </div>
      <div className="col-md-4"
      >
        {/* <FontAwesomeIcon icon="fas fa-clock" /> */}
     <h1 className = "title"> 14</h1>
     <p className="subtitle_2"> Happy Clients
     </p>
      </div>
      <div className="col-md-4"
      >
        <i className="fas fa-clock"></i>
     <h1 className = "title"> 4</h1>
     <p className="subtitle_2">Years of Experience
     </p>
      </div>
      <div className="col-md-4"
      >
      </div>
      </div>
 
    
    </div>
      </section>
    </>
  );
};

export default Portfolio;
