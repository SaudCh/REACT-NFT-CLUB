import React from "react";
import post1 from "../Images/post1.png";
import './css/crousal.css'

function Crousal() {
  return (
    <div className="mt-5">
      <div className="col-12 col-md-6 m-auto">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={post1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post1} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousal;
