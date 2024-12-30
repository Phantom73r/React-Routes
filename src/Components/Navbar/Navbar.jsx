import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
  <nav className=" p-4 navbar navbar-expand-lg">
    <div className="container-fluid">
      <NavLink className="navbar-brand text-white text-capitalize fs-1 fw-bolder"to={'/'}>Start Framework</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to={'about'}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'portfolio'}>Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'contact'}>Contact</NavLink>
          </li>

        
      
         
        </ul>
      </div>
    </div>
  </nav>
</>

  )
}
