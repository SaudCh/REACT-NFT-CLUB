import React from "react";
import "./css/news.css";
import forbes from "../Images/forbes.svg";
import coinDesk from "../Images/coindesk.svg";
import yahoo from "../Images/yahoo.svg";
import market from "../Images/market.svg";
import utoday from "../Images/utoday.svg";
import cnew1 from "../Images/cnews1.svg";
import cnews2 from "../Images/cnews2.svg";
import gape from "../Images/gape.svg";
import yellowBlue from "../Images/yellowBlue.svg";
import trustnodes from "../Images/trustnodes.svg";
import theSilly from "../Images/theSilly.svg";
import globe from "../Images/globe.svg";

function News() {
  return (
    <div className="news-container m-0 p-0 py-5">
      <div className="row">
        <div className="text-center">
          <h1 className="text-white text-center news-heading">
            <span className="heading-gredient">CCGBTCONE</span> IN THE NEWS
          </h1>
          <p className="text-white text-center mb-5">
            CCGBTCONE has been featured in well-known online publications due to
            its historical impact and significance.
            <br />
            These articles clearly depict the great potential of this NFT
            collection as a historical piece
            <br />
            as well as Elon’s interests in it over the years.
          </p>
          <div className="row align-items-center justify-content-center">
            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coindesk.com/markets/2018/10/23/elon-musk-sparks-speculation-with-cryptic-crypto-tweet/"
              >
                <img src={coinDesk} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.forbes.com/sites/billybambrough/2018/10/23/elon-musk-mocks-bitcoin-security-and-scams-with-tongue-in-cheek-tweet/?sh=3a53d0f42184"
              >
                <img src={forbes} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://au.finance.yahoo.com/news/elon-musk-sends-adult-themed-112320398.html"
              >
                <img src={yahoo} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.marketwatch.com/story/lasereyes-meme-campaign-goes-viral-on-twitter-in-apparent-bid-to-double-bitcoin-price-to-100-000-11614107554"
              >
                <img src={market} alt="" />
              </a>
            </div>
          </div>
          <div className="row mt-5  align-items-center justify-content-center">
            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://u.today/elon-musk-changes-his-twitter-profile-pic-to-bitcoin"
              >
                <img src={utoday} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cryptonewsreview.com/elon-musks-twitter-account-locked-after-cryptocurrency-tweet/"
              >
                <img src={cnew1} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://cryptonews.net/news/bitcoin/472907/"
              >
                <img src={cnews2} alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3  mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.cryptoglobe.com/latest/2018/10/elon-musk-tweets-about-bitcoin-gets-account-locked/"
              >
                <img src={globe} alt="" />
              </a>
            </div>
          </div>

          <div className="row mt-5 mb-5 align-items-center justify-content-center">
            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://coingape.com/elon-musk-changes-his-profile-pic-with-bitcoin-anime-btc-price-crosses-55k/"
              >
                <img src={gape} className="news-img" alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.techtimes.com/articles/261095/20210604/elon-musk-changes-twitter-dp-triggered-crypto-woman-targeting-fans-cryptocurrency.htm"
              >
                <img src={yellowBlue} className="news-img" alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.trustnodes.com/2018/10/23/elon-musk-offers-bitcoin-grimes-says-she-likes-eth-twitter-bans-hacks"
              >
                <img src={trustnodes} className="news-img" alt="" />
              </a>
            </div>

            <div className="col-5 col-md-2 me-3 mt-5 mt-md-0 news-img-container">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://thesillytv.com/heres-why-elon-musk-casey-neistat-and-other-bitcoin-advocates-have-laser-eyes-in-their-twitter-profiles/"
              >
                <img src={theSilly} className="news-img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
