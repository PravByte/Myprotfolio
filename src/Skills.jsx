import React from 'react'
import html from '../src/assets/html-5.png'
import css from '../src/assets/css-3 (1).png'
import bootstrap from '../src/assets/bootstrap.png'
import tailwind from '../src/assets/512px-Tailwind_CSS_Logo.svg.png'
import javascript from '../src/assets/java-script (1).png'
import reactjs from '../src/assets/atom.png'
import java from '../src/assets/java.png'
import sql from '../src/assets/database.png'
import github from '../src/assets/github.png'
const Skills = () => {
  return (
    <div>
      <div className="container mt-5" style={{ fontFamily: 'cursive' }}>

        <p style={{ fontWeight: 'light', fontSize: '35px' }} className='text-warning text-center'>Skills</p>
        <div className="container cons">

          <div className="row text-center text-dark">
            <div className='col-6 col-md-3 col-lg-3'>
              <img style={{ width: '70px', height: '70px', margin: '10px', }} src={html} alt="HTML" />
              <h2 style={{ fontFamily: 'cursive' }}>Html</h2>
            </div>
            <div className="col-6  col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={css} alt="CSS" />
              <h2 style={{ fontFamily: 'cursive' }}>Css</h2>
            </div>
            <div className="col-6  col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={bootstrap} alt="Bootstrap" />
              <h2 style={{ fontFamily: 'cursive' }}>Boot Strap</h2>

            </div>

            <div className="col-6  col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={tailwind} alt="tailwind" />
              <h2 style={{ fontFamily: 'cursive' }}>Tailwind css</h2>
            </div>
          </div>

          <div className="row text-center mt-5 text-dark">
            <div className="col-6 col-md-3 col-lg-3">

              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={javascript} alt="JavaScript" />
              <h2 style={{ fontFamily: 'cursive' }}>Java script</h2>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={reactjs} alt="React" />
              <h2 style={{ fontFamily: 'cursive' }}>React js</h2>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={java} alt="Java" />
              <h2 style={{ fontFamily: 'cursive' }}>Java</h2>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <img style={{ width: '70px', height: '70px', margin: '10px' }} src={sql} alt="SQL" />
              <h2 style={{ fontFamily: 'cursive' }}>Sql</h2>
            </div>

          </div>


          <div className="container ">
            <div className="row text-center text-dark">
              <div className="col-6  col-md-3 col-lg-3  ">
                <img style={{ width: '70px', height: '70px', margin: '10px' }} src={github} alt="GitHub" />
                <h2 style={{ fontFamily: 'cursive' }}>Github</h2>
              </div>
            </div>
          </div>







        </div>
      </div>
    </div>
  )
}

export default Skills