import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  let navigate = useNavigate()
  useEffect(() => {
    const particlesScript = document.createElement('script');
    particlesScript.src = '/src/particles.js';
    particlesScript.type = 'text/javascript';
    particlesScript.async = true;
    document.body.appendChild(particlesScript);

    const appScript = document.createElement('script');
    appScript.src = '/src/app.js';
    appScript.type = 'text/javascript';
    appScript.async = true;
    document.body.appendChild(appScript);

    return () => {
      document.body.removeChild(particlesScript);
      document.body.removeChild(appScript);
    };
  }, []);

  
  let handle =()=>{
    navigate('/contact')
  }

  return (
    <div 
      id="particles-js" 
      style={{
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column', 
        textAlign: 'center' ,
       
      }}
    >
      <div>
        
      </div>
      <div id='home' style={{position:'absolute'}} className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">

          <div className="col-12">
            <h1 className='text-white'>Hi, I am Pravin!</h1>
          </div>
          <div className="col-12">
            <h1 
              className='lh-lg text-white' 
              // style={{ cursor: 'pointer', outline: 'none' }} 
              // contentEditable={true}
            >
              Full Stack Developer
            </h1>
          </div>
          <div className="col-12 mt-3 d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
            <button
              id="button"
              style={{ border: "1px solid white", width: "200px" }}
              className="btn lh-lg "
              onClick={handle}
            >   
              Contact me
            </button>
            <a href="../src/REFUMEF.pdf">
              <button 
                id='button2' 
                style={{ border: '1px solid white', width: '200px' }} 
                className='btn lh-lg '
              >
                Download Resume
              </button>
            </a>
          </div>
          <div id='bars' className="col-12 mt-4">
            <div style={{ fontSize: '24px' }}>
              <a href="https://wa.me/919791371909" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp me-3" style={{ color: '#25D366' }}></i>
              </a>
              <a href="https://www.instagram.com/dxtr__pr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram ms-3" style={{ color: '#E4405F' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/pravinkumar-pr-6a6191267" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin ms-4" style={{ color: '#0077B5' }}></i>
              </a>
              <a href="https://github.com/PravByte" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github ms-4" style={{ color: '#333' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
