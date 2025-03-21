import React from 'react';
import style from './assets/speakers.jpg';
import valentine from './assets/finger.jpg';
import tunes from './assets/background.jpg';
import sun from './assets/sun-1296130_1280.png';
import todolist from './assets/todo-lists-5238324_1280.jpg'
import calender from './assets/calendar-2428560_1280.jpg'
import sms from './assets/ai-generated-8963817_1280.jpg'
const Portfolio = () => {
  return (
    <div style={{ fontFamily: 'cursive' }}>
      <div className="container text-center">
        <h3 className="text-warning text-center mt-4 mb-5" style={{ fontSize: '35px' }}>Projects</h3>
        <div  className="in row mt-5">
          <div className="col-12 col-lg-3 col-md-6 mb-4">
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
                  <a href="https://github.com/PravByte/style-conference.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12  col-lg-3 col-md-6 mb-4">
            <div className="image-container position-relative">
              <img
                src={todolist}
                alt="Valentine Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">Todo-application </p>
                  <a href="https://github.com/PravByte/Todo-app.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6 mb-4">
            <div className="image-container position-relative">
              <img
                src={calender}
                alt="Tunes Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">Calendar-application</p>
                  <a href="https://github.com/PravByte/calendar-application.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 col-md-6 mb-4">
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
                  <a href="https://github.com/PravByte/weatherapplication0.git" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-light">View Project</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row in ">
          <div className="col-12 col-lg-3 col-md-6 mb-4">
            <div className="image-container position-relative">
              <img
                src={sms}
                alt="Weather Project"
                style={{ height: '220px' }}
                className="img-fluid portfolio-img rounded-3"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <p className="text-white">Student-management-system</p>
                  <a href="https://github.com/PravByte/student-management-system.git" target="_blank" rel="noopener noreferrer">
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
