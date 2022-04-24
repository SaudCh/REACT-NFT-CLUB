import React from "react";
import post1 from "../Images/post1.png";

function Crousal() {
  return (
    <div className="col-8">
      <div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              style={{ height: 8, width: 8, borderRadius: "50%" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              style={{ height: 8, width: 8, borderRadius: "50%" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              style={{ height: 8, width: 8, borderRadius: "50%" }}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
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