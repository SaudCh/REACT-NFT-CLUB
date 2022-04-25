import React from "react";
import post1 from "../Images/slider/slider-1.jpg";
import post2 from "../Images/slider/slider-2.jpg";
import post3 from "../Images/slider/slider-3.jpg";
import post4 from "../Images/slider/slider-4.jpg";
import "./css/crousal.css";

function Crousal() {
  return (
    <div className="mt-3 row">
      {/* Crousel  */}
      <div className="col-12 col-md-12 m-auto">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner text-center">
            <div class="carousel-item active">
              <img src={post1} class="d-block cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post2} class="d-block cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post3} class="d-block cr-image" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={post4} class="d-block cr-image" alt="..." />
            </div>
          </div>
        </div>
      </div>
      {/* Buttons  */}
      <div className="" >
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="m-auto" style={{width:'max-content'}} >
            <button
              className="crousel-buttons active me-2"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="crousel-buttons me-2"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="crousel-buttons me-2"
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
