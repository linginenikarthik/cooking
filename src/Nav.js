import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { useNavigate } from 'react-router-dom';
function Cauro() {
  let navigation=useNavigate()
  let mum=()=>{
    // window.location='Brands'
      navigation("/Brands")
  }
  return (
    
    
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid sticky-top">
          {/* Replace navbar brand text with the image */}
         
            <img src={"https://olivebarandkitchen.com/img/logo.png"} alt="Logo" className="navbar-brand" />
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ml-auto">
            <div className='under'></div>
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Brands" className="nav-link">Brands</Link>
                <div className='bran'>
                  <h6 onClick={mum} className='obm'>Olive Bar and Kitchen,Mumbai</h6>
                  <h6 className='obm'>Olive Bar and Kitchen,Mumbai</h6>
                  <h6>Olive Bar and Kitchen,Mumbai</h6>
                  <h6>Olive Bar and Kitchen,Mumbai</h6>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/Management" className="nav-link">Management</Link>
                <div className='mang'>
                  <h6>ad singh</h6>
                  <h6>ad singh</h6>
                  <h6>ad singh</h6>
                  <h6>ad singh</h6>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/Careers" className="nav-link">Careers</Link>
              </li>
              <li className="nav-item">
                <Link to="/Franchise" className="nav-link">Franchise</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contactus" className="nav-link">Contactus</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

     
 
    
  );
}

export default Cauro;
