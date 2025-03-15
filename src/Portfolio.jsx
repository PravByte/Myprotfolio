import React from 'react';
import style from './assets/speakers.jpg';
import valentine from './assets/finger.jpg';
import tunes from './assets/background.jpg';
import sun from './assets/sun-1296130_1280.png';

const Portfolio = () => {
  return (
    <div style={{ fontFamily: 'cursive' }}>
      <div className="container text-center">
        <h3 className="text-warning text-center mt-4 mb-5" style={{ fontSize: '35px' }}>Projects</h3>
        <p id='out'>Built responsive and dynamic web applications using React.js, JavaScript, and Bootstrap. Leveraged React's component-based architecture to create scalable and maintainable user interfaces. Utilized Bootstrap for responsive design and seamless user experience across devices.</p>
        <div id='in' className="row mt-5">
          <div className="col-12 col-lg-3 mb-4">
            <div className="image-container position-relative">
              <img
                src={style}
                alt="Style Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">Style-conference</p>
                  <a href="https://github.com/PravByte/STYLE-CONFERENCE-REACT.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mb-4">
            <div className="image-container position-relative">
              <img
                src={valentine}
                alt="Valentine Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">History-of-valentine</p>
                  <a href="https://github.com/PravByte/Valentine-bootstrap.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mb-4">
            <div className="image-container position-relative">
              <img
                src={tunes}
                alt="Tunes Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">My-tunes</p>
                  <a href="https://github.com/PravByte/TUNES.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 mb-4">
            <div className="image-container position-relative">
              <img
                src={sun}
                alt="Weather Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">Weather Application</p>
                  <a href="https://github.com/PravByte/WEATHERAPPLICATION.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


  );
};

export default Portfolio;
