import React from 'react'
import image from './assets/IMG-20250117-WA0055.jpg'
const Aboutme = () => {
  return (
    <div >
      <div className="container " >
        <div className="row" style={{ fontFamily: 'cursive' }}>
          <div className="row">
          <p  style={{ fontWeight: 'light', fontSize: '35px' }} className='text-warning '>About me</p>
            <div id='abt' className="col-12 col-lg-6 mt-3">

              
              <img src={image} alt="" className='rounded-image ' />
              <p className='mt-3' style={{ textAlign: 'justify' }}>"Hi, I am Pravin. I am a fresher with knowledge of Java, SQL, web technologies, and JavaScript. I am eager to apply my skills and grow in the tech industry, focusing on both frontend and backend development."</p>
              <h3 className='text-warning' contentEditable={true} style={{ outline: 'none', }}>Education</h3>
              <p style={{ textAlign: 'justify' }}>Bachelor of Engineering in Computer Science and Business Systems
                Sri Sairam Engineering College, Chennai</p>
              <p style={{ textAlign: 'justify' }}>Graduated: 2024</p>
              <p style={{ textAlign: 'justify' }}>Relevant Coursework: Software Development, Database Management, Web Technologies, Programming Languages (Java, SQL, JavaScript), System Design, and Business Systems</p>
            </div>
            <div id='stack' className="col-12 col-lg-6 ">
              <h3 className='text-warning' contentEditable={true} style={{ outline: 'none', }}>Full-stack Developer</h3>

              <p style={{ textAlign: 'justify' }}>I am a passionate and motivated individual with a strong foundation in full-stack development. Having recently completed my education in computer science and business systems, I possess a broad range of skills in both frontend and backend technologies. My experience includes working with programming languages like Java and SQL, as well as web technologies such as HTML, CSS, Bootstrap, JavaScript, and React. I am deeply interested in creating dynamic, scalable, and interactive web applications that offer seamless user experiences. <br /> <br />

                Throughout my academic career, I focused on understanding the core principles of software development, including object-oriented programming in Java, database management, and web application design. I have developed a problem-solving mindset, allowing me to break down complex issues and find efficient solutions. I am also well-versed in database design and query optimization, which enables me to work on both the frontend and backend of applications. <br /><br />

                I have a strong desire to continuously learn and grow in the tech industry. I am eager to explore new tools, frameworks, and technologies that will allow me to stay up-to-date with the latest trends in development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme