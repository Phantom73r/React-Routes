import React from "react";
import logo from '../../assets/avataaars.svg'
export default function Home() {
  return (
    <>
      <div className="container-fluid text-white test d-flex flex-column">
        <img src={logo} width={250} alt="" />
        <h2 className="fs-1 text-uppercase">start Framework</h2>
        <div className="position-relative w-20">
            <div className="line"></div>
           <i id="star" class="fa-solid fa-star text-white"></i>
           <div className="line1"></div>
           </div>
           <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
