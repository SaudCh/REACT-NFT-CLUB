import React from "react";
import post1 from "../Images/slider/slider-1.jpg";
import post2 from "../Images/slider/slider-2.jpg";
import post3 from "../Images/slider/slider-3.jpg";
import post4 from "../Images/slider/slider-4.jpg";
import "./css/crousal.css";

function Crousal() {
  return (
    <div className="mt-5 container-fluid">
      {/* Crousel  */}
      <div className="col-12 col-md-6 m-auto">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner text-center d-flex align-items-center justify-content-center border">
            <div class="carousel-item active">
              <img src={post1} class="d-block cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post2} class="d-block w-100 cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post3} class="d-block w-100 cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post4} class="d-block w-100 cr-image" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* Buttons  */}
      <div className="col-2 col-md-1 m-auto">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class=" circle-container">
            <button
              className="crousel-buttons active"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="crousel-buttons"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="crousel-buttons"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              className="crousel-buttons"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousal;
