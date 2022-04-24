import React from "react";
import "./css/faq.css";

function Faq() {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-10">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is CCGBTCONE?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                CCGBTCONE is a vintage collectible minted July 26th 2017 on the
                Bitcoin blockchain through the counterparty protocol. It’s also
                part of the Oasis Mining collection which consists of 66
                different cards from different artists. It was used by Elon Musk
                on many important occasions.
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3 "
            style={{ backgroundColor: "#29415e" }}
          >
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                When was it used by Elon Musk (proof)?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "white" }}
            >
              <div class="accordion-body">
                https://twitter.com/elonmusk/status/1054520588734058496?s=21
                https://twitter.com/elonmusk/status/1256353943765921792?s=21
                https://web.archive.org/web/20210220005710/https://twitter.com/elonmusk
                https://twitter.com/cz_binance/status/1054584958830800896
                https://twitter.com/CynthiaMLummis/status/1362973764724531200
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
