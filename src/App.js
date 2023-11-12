import "./styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./components/picture/Image.png";
import logo from "./components/picture/building.png";
import PhoneAnonymizer from "./components/PhyoneAnonymizer";
import Carousel from "react-bootstrap/Carousel";

const App = () => {
  const phoneNumber = "8123 4567";

  return (
    <div className="App">
      <header className="App-header">
        <div className="all">
          <div className="rumah">
            <div className="flag">
              <div className="base">
                <div className="coms">
                  <h1>LAUNCHING SOON</h1>
                </div>
              </div>
              <div className="tri">
                <div className="arrow-right"></div>
              </div>
            </div>
            <div className="kotak">
              <div className="square"></div>
              <div className="square2"></div>
            </div>
          </div>
          <div className="Default">
            <div className="image">
              <div className="imagecomponent">
                <Carousel interval={null}>
                  <Carousel.Item>
                    <img className="img1" src={img1} alt="gamb" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img1" src={img1} alt="gamb" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="img1" src={img1} alt="gamb" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="details">
              <div className="detailscomponent1">
                <div className="big1">
                  <div className="sec1">
                    <div className="logocom">
                      <div className="logo">
                        <img className="imgs" src={logo} alt="gamb" />
                      </div>
                    </div>

                    <div className="name-address">
                      <h1 className="hed">Forett At Bukit Timah</h1>
                      <p className="sml">70 Anchorvale Crescent · D21</p>
                    </div>
                  </div>

                  <div className="sec2">
                    <div className="addresdet">
                      <h3 className="addresd">Condo · 2021 · Freehold</h3>
                      <h3 className="addresd">
                        231 units · 1, 2, 3, 4 bedrooms
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="big2">
                  <div className="Pricing">
                    <div className="prices">
                      <h2 className="prc-min">$2,609</h2>
                      <h2 className="gaps">-</h2>
                      <h2 className="prc-max">$3,043</h2>
                      <h2 className="prc-max">psf</h2>
                    </div>
                    <p className="smlprc">Prices from $1,99M</p>
                  </div>
                </div>
              </div>

              <div className="accordion">
                <div className="description">
                  <div className="tab">
                    <label htmlFor="acc1" className="rad">
                      <h1 className="desc">See description</h1>
                    </label>
                    <input
                      type="checkbox"
                      name="acc"
                      id="acc1"
                      className="rad"
                    />

                    <div className="inner">
                      <div className="phoneNumber">
                        <h1 className="numberconts">Phone number: </h1>
                        <div className="point">
                          <PhoneAnonymizer phoneNumber={phoneNumber} />
                        </div>
                      </div>

                      <div className="moredetails">
                        <div className="moredetails1">
                          <div className="about">
                            <small>ABOUT</small>
                            <h1>Forett At Bukit Timah</h1>
                          </div>

                          <div className="describ">
                            <p className="descripts">
                              Superb 3 bedroom in sentosa for a very affordable
                              price and a very nearby bus station. <br /> Forett
                              At Bukit Timah" is a luxurious residential project
                              that offers convenience and beauty in a
                              prestigious location in Singapore. Located on
                              Bukit Timah Road, the project provides various
                              types of properties, including spacious
                              three-bedroom units with modern designs. In
                              addition to advanced housing facilities, the
                              project also offers the natural beauty of its
                              surroundings. Bukit Timah is known as an upscale
                              residential area with stunning natural landscapes
                              and easy access to various facilities and services
                              nearby. Just a few steps from the nearest bus
                              station, residents can easily explore the city or
                              reach other important destinations. With Freehold
                              status, "Forett At Bukit Timah" is a promising
                              investment for the future, offering a high quality
                              of life in a luxurious environment.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="call">
                        Please call Alex B (CEA No: R0123456) @ 82345678 or the
                        owner (83456789) to arrange for a viewing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
