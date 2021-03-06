import React from "react";
import "./css/faq.css";

function Faq() {
  return (
    <div className="row justify-content-center my-5 py-5" id="faq">
      <h2 className="text-white text-center mb-4" style={{ fontSize:40 }}>
        FAQ
      </h2>
      <div className="col-10">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h3 class="accordion-header" id="flush-headingOne">
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
            </h3>
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
            <h3 class="accordion-header" id="flush-headingTwo">
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
            </h3>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "white" }}
            >
              <div class="accordion-body">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/elonmusk/status/1054520588734058496?s=21"
                >
                  https://twitter.com/elonmusk/status/1054520588734058496?s=21
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/elonmusk/status/1256353943765921792?s=21"
                >
                  https://twitter.com/elonmusk/status/1256353943765921792?s=21
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://web.archive.org/web/20210220005710/https://twitter.com/elonmusk"
                >
                  https://web.archive.org/web/20210220005710/https://twitter.com/elonmusk
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/cz_binance/status/1054584958830800896"
                >
                  https://twitter.com/cz_binance/status/1054584958830800896
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/CynthiaMLummis/status/1362973764724531200"
                >
                  https://twitter.com/CynthiaMLummis/status/1362973764724531200
                </a>
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h3 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                On which blockchain is the CCGBTCONE collectible located?
              </button>
            </h3>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                On the Bitcoin blockchain through the counterparty protocol -
                <a
                  href="https://counterparty.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://counterparty.io/
                </a>{" "}
                And yes, NFT’s existed even prior to Ethereum in 2015 and
                before. With the help of Emblem Vault, assets from other
                blockchains can be vaulted and traded on ethereum, on
                marketplaces like Opensea, LooksRare and others. More on that
                below.
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h3 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                What is counterparty and how to use it?
              </button>
            </h3>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-collapseFour"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://en.wikipedia.org/wiki/Counterparty_(platform)"
                >
                  https://en.wikipedia.org/wiki/Counterparty_(platform)
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://coincentral.com/counterparty-xcp-beginners-guide/"
                >
                  https://coincentral.com/counterparty-xcp-beginners-guide/
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://counterparty.io/docs/faq/"
                >
                  https://counterparty.io/docs/faq/
                </a>{" "}
                <br />
                Please follow
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/CounterpartyXCP"
                >
                  https://twitter.com/CounterpartyXCP
                </a>{" "}
                and join their socials in order to learn more
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h3 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                What is emblem vault and how to use it?
              </button>
            </h3>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-collapseFour"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://desktopcommando.medium.com/what-is-emblemvault-14aaaff92a20"
                >
                  https://desktopcommando.medium.com/what-is-emblemvault-14aaaff92a20
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://desktopcommando.medium.com/how-to-use-emblemvault-14ba241ca42a"
                >
                  https://desktopcommando.medium.com/how-to-use-emblemvault-14ba241ca42a
                </a>
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://desktopcommando.medium.com/trading-xcp-nfts-on-ethereum-matic-networks-87a89101fd58"
                >
                  https://desktopcommando.medium.com/trading-xcp-nfts-on-ethereum-matic-networks-87a89101fd58
                </a>{" "}
                <br />
                Please follow
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/CounterpartyXCP"
                >
                  https://twitter.com/CounterpartyXCP
                </a>{" "}
                and join their socials in order to learn more
              </div>
            </div>
          </div>

          <div
            class="accordion-item mb-3"
            style={{ backgroundColor: "#29415e" }}
          >
            <h3 class="accordion-header" id="flush-headingSix">
              <button
                class="accordion-button collapsed"
                style={{ backgroundColor: "#29415e", color: "white" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                How to buy?
              </button>
            </h3>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-collapseSix"
              data-bs-parent="#accordionFlushExample"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="accordion-body">
                Before you do that, please make sure to familiarise yourself
                with how emblem vault and counterparty works. There are two ways
                of buying CCGBTCONE :
                <br />
                1) On marketplaces like Opensea through Emblem Vault :
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://opensea.io/collection/emblem-vault?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Oasis%20Mining&search[stringTraits][0][values][0]=CCGBTCONE"
                >
                  https://opensea.io/collection/emblem-vault?search[sortAscending]=true&search[sortBy]=PRICE&search[stringTraits][0][name]=Oasis%20Mining&search[stringTraits][0][values][0]=CCGBTCONE
                </a>
                <br />
                <br />
                Make sure to always properly check the vault before buying :
                <br />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://desktopcommando.medium.com/a-buyers-guide-to-using-emblem-vault-on-opensea-io-bb0d0a206c1a"
                >
                  https://desktopcommando.medium.com/a-buyers-guide-to-using-emblem-vault-on-opensea-io-bb0d0a206c1a
                </a>
                2) Directly on Counterparty XCP through dispensers or dex
                orders, if available.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
