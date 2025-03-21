import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // add this line
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Aboutme from './Aboutme';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Nav from './Nav';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
       <Route index path='/' element={<Home/>}/>
       <Route path='/about' element={<Aboutme/>} />
       <Route path='/skills' element={<Skills/>}/>      
       <Route path='/portfolio' element={<Portfolio/>}/>
       <Route path='/contact' element={<Contact/>}/>

      </Routes>
      </BrowserRouter>
    
    </div>
  )
}
export default App