import React from 'react'
import image1 from '../../assets/port1.png'
import image2 from '../../assets/port2.png'
import image3 from '../../assets/port3.png'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <>
      <div className="container">
  <div className="Contact-Section ">
    <h2 className='mt-3 fw-bolder display-4'>Portfolio Component</h2>
    <div className="position-relative w-25 m-auto text-primary">
            <div className="line bg-primary"></div>
           <i class="fa-solid fa-star"></i>
           <div className="line1 bg-primary"></div>
           </div>
           <div className="row g-4 m-3">
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image1} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image2} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image3} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image1} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image2} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">

                <div className="card-img position-relative">
                  <img src={image3} className='w-100 rounded-3' alt="" />
                </div>
                <div id='overlay' className="overlay rounded-3 position-absolute">
                <i  className="fa-solid fa-plus fa-7x text-white position-absolute top-50 start-50 translate-middle "></i> 
                </div>
              </div>
            </div>

       
      
           

           </div>
  </div>
</div>
    </  >
  )
}
