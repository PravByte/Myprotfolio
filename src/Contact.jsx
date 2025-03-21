import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  let navigate = useNavigate()
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submit, setSubmit] = useState([]);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',});

  const handle = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const getit = (e) => {
    e.preventDefault();

    
    let formErrors = { name: '', email: '', message: '' };
    let valid = true;

    if (!state.name) {
      formErrors.name = 'Name is required';
      valid = false;
    }
    if (!state.email) {
      formErrors.email = 'Email is required';
      valid = false;
    }
    if (!state.message) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);

    if (valid) {
      setSubmit([...submit, state]);
      console.log(state); 
       
        setState({
          name: '',
          email: '',
          message: '',
        });
    }
  }
  return (
    <div className='bg-secondary pt-4'style={{height:'90vh'}}>
      <div style={{ fontFamily: 'cursive' }} className="container">
        <p style={{
          fontSize: '35px'

        }} className='text-warning'>Contact</p>
        <div id='pr' className="row ">
          <div className="col-12 col-lg-6 mt-5">
            <h3 className='text-danger'>Personal Information</h3>
            <section id="contact" className='mt-4'>

              <p className='text-white'><strong className='text-dark'>Name:</strong> Pravin Kumar pr</p>
              <p className='text-white'><strong className='text-dark'>Age:</strong> 22</p>
              <p className='text-white'><strong className='text-dark'>Phone:</strong> +91 9791371909</p>
              <p className='text-white'><strong className='text-dark'>Email:</strong> <a href="mailto:pravinkumarpr001@gmail.com">pravinkumarpr001@gmail.com</a></p>
              <p className='text-white'><strong className='text-dark'>Current Location:</strong>No.180 Simsan Stay <br />Radha Nagar Chrompet, <br /> Chennai.</p>
            </section>

          </div>
          <div className="col-12 col-lg-6">
            <form id="contact-form" onSubmit={getit}>
              <div className="mb-3">
                <label htmlFor="name" className='form-label'>Name</label>
                <input
                  onChange={handle}
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  value={state.name}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  onChange={handle}
                  type="text"
                  id="email"
                  className="form-control"
                  name="email"
                  value={state.email}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>} 
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea
                  onChange={handle}
                  id="message"
                  name="message"
                  className="form-control"
                  value={state.message}
                  rows="4"
                ></textarea>
                {errors.message && <div className="text-danger">{errors.message}</div>} 
              </div>
              <div className="mb-3">
                <button type="submit" className='btn btn-primary rounded-3'>Send Message</button>
              </div>
            </form>
            
                  <button onClick={()=>navigate('/')} className='btn btn-success mt-3'><i class="fa-solid fa-house"></i> Home</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact