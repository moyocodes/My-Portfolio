/* eslint-disable react/jsx-indent */
import React from "react";

const Contact = () => {
  return (
    <>
      <section className="portfolio bg-container" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <h1 className="title"> Contact Information</h1>
              <p className="subtitle_2">Phone: <a href="tel:+2348061953109">  +2348061953109</a> </p>
              <p className="subtitle_2">Email: <a href="mailto:moyosorejames@gmail.com" > moyosorejames@gmail.com</a></p>
            </div>
            {/* <div className="col-md-8">
              <h1 className="title"> Contact Form</h1>
              <form action="mailto:moyosorejames@gmail.com">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control-md"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control-md"
                      placeholder="Your Email"
                    />
                    <div className="invalid-feedback">
                      Please fill out this field.
                    </div>
                  </div>
                  <div className="col">
                    <textarea
                      type="text"
                      className="form-control-md "
                      placeholder=""
                    />
                  </div>
                  <div className="btn-group">
                    <button
                      type="submit"
                      className="btn btn-outline-dark btn-md btn-block"
                    >
                      {" "}
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
