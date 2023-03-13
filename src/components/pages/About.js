import React from "react";

const About = () => {
  return (
    <>
      <section className="pt-5" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/about.jpg"
                alt="Image"
                class="cursor-pointer"
                width="370px"
                height="550px"
              />
            </div>
            <div className="col-md-6 col-md-offset-2 asidepad">
              <h1 className="title"> About Me</h1>
              {/* <p className="subtitle_1">Software Developer.</p> */}
              <p className="subtitle_1">
                Moyosore is a software developer with 4 years + of practical
                experience in Web Design, Web Development, Data Analysis, Data
                Manipulation, REST API implementation, Code
                Management/Organization, to mention a few.
                <br />
                A Bsc degree holder in Computer Science and Information
                Technology. I started coding at age 16 when i was in 100 level.
                <br /> You can find out more about me in my CV.
              </p>
              <div className="btn-group">
                <a
                  className=" "
                  href="https://docs.google.com/document/d/12U4gO2s3Fmc9EUx-9pzwT3Wl6DrL2Wx2Ze9xlB6l2bA/edit?usp=sharing"
                >
                  <button
                    type="button"
                    className="btn btn-outline-dark btn-lg btn-block"
                  >
                    {" "}
                    View CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
