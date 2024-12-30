import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../Portfolio/Portfolio.css'


export default function Contact() {


  const [overlay, setOverlay] = useState(false)

  return (
    <>
    <div className="container">
  <div className="Contact-Section ">
    <h2 className='mt-3 fw-bolder display-4'> Contact Component</h2>
    <div className="position-relative w-25 m-auto text-primary">
            <div className="line bg-primary"></div>
           <i class="fa-solid fa-star"></i>
           <div className="line1 bg-primary"></div>
           </div>
           <div className="row g-4 m-3">
<div className="row gy-3 mt-4">
  <div className="col-12">
    <input type="text" placeholder='Enter your name' className=' border-bottom-2 form-control' />
  </div>
  <div className="col-12">
    <input type="text" placeholder='Enter your name' className=' border-bottom-2 form-control' />
  </div>
  <div className="col-12">
    <input type="text" placeholder='Enter your name' className=' border-bottom-2 form-control' />
  </div>
  <div className="col-12">
    <input type="text" placeholder='Enter your name' className=' border-bottom-2 form-control' />
  </div>
  <div className="col-3">
    <button className='btn btn-outline-success'> Send Message</button>
  </div>

</div>

           </div>
  </div>
  </div>
    </>
  )
}
