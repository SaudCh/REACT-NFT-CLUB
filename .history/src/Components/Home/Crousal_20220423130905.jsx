import React from "react";
import post1 from "../Images/post1.png";

function Crousal() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={post1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={post1} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={post1} alt="Third slide" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Crousal;
