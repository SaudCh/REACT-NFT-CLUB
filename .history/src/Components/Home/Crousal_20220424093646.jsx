import React from "react";
import post1 from "../Images/post1.png";
import "./css/crousal.css";

function Crousal() {
  return (
    <div className="mt-5">
      {/* Crousel  */}
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
      {/* Buttons  */}
      <div className="col-12 col-md-6 m-auto d-flex flex-row justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousal;
