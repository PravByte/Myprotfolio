import React from 'react'

const Skills = () => {
  return (
    <div>
      <div className="container mt-5" style={{ fontFamily: 'cursive' }}>
        <div className="row">
          <p  style={{ fontWeight: 'light', fontSize: '35px' }} className='text-warning '>Skills</p>
          <div id='pr' className="col-12 col-lg-6">
            <p style={{ fontWeight: 'light', fontSize: '25px' }} className='text-danger'>Programming Languages</p>
            <h3>Java</h3>
            <p style={{ textAlign: 'justify' }}>Proficient in Java with a strong understanding of object-oriented programming (OOP). Experienced in building Java applications, including working with core libraries and concepts such as classes, inheritance, and exception handling. Familiar with database interaction and API integration to create efficient, scalable solutions. Continuously enhancing my skills to deliver high-quality software. </p>
            <h3>Java Script</h3>
            <p style={{ textAlign: 'justify' }}>Proficient in JavaScript with a strong understanding of the Document Object Model (DOM) and event handling. Experienced in building interactive web applications using HTML, CSS, and JavaScript. Familiar with API integration and modern JavaScript features like ES6. </p>
          
          </div>
          <div id='av' className="col-12 col-lg-6">
            <h3 >React.js Developer:</h3>
            <p style={{textAlign:'justify'}}>Proficient in JavaScript with a strong understanding of the Document Object Model (DOM) and event handling. Experienced in building interactive web applications using HTML, CSS, and JavaScript. Familiar with API integration and modern JavaScript features like ES6. Continuously learning to enhance user experiences and optimize performance.</p>
            <h3 className='text-danger mt-3'>Database Management</h3>
            <h3>Sql</h3>
            <p style={{ textAlign: 'justify' }}>Proficient in SQL with a strong understanding of database design and query optimization. Experienced in writing complex queries, joins, and subqueries in SQL*Plus. Familiar with database management, data manipulation, and ensuring data integrity.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills