import React from 'react'

export default function Footer() {
  return (
    <footer>
<div className="container-fluid pt-4">
  <div className="row text-center gy-5">
    <div className="col-md-4 ">
      <h4>Location</h4>
      <h5>2215 John Daniel Drive</h5>
      <h5 className='pt-2'>Clark, MO 65243</h5>
    </div>
    <div className="col-md-4 ">
      <h4>Around the Web</h4>
<div id='icons' className='d-flex justify-content-center align-items-center gap-4 fs-2'>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-linkedin-in"></i>
<i class="fa-brands fa-instagram"></i>
</div>
    </div>
    <div className="col-md-4 ">
      <h5>ABOUT FREELANCER</h5>
      <h5 className=''>Freelance is a free to use, licensed Bootstrap theme created by Route</h5>
    </div>
    <div id='copyRight' className='pt-3'>
      <p>Copyright © Your Website 2021</p>
    </div> 
  </div>
 
</div>
    </footer>
  )
}
