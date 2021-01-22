import React from "react";
import "./Home.css";
import Product from "./Product";
import CarouselImage from "./Carousel/CarouselImage";
import { CarouselData } from "./Carousel/CarouselData";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="image__container">
          <CarouselImage slides={CarouselData} />
        </div>
        {/* <img
          className="home__row"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="49538094"
            title="Night Owl CCTV Video Home Security Camera System with 10 Wired 5MP HD Indoor/Outdoor Cameras with Night Vision (Expandable..."
            price={549.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/41YpHZXfCTL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="DerBlue 16Pcs Round Mercury Glass Votive Candle Holders for Wedding Centerpieces, Valentines Dinner..."
            price={20.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61TKAAknR2L._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Homemory LED Tea Lights with 12 Gold Votive Candles Holders"
            price={23.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/810ns8Wk+7L._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi|24.1 MP CMOS Sensor |DIGIC 4+ Image Processor and Full H..."
            price={449.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71EWRyqzw0L._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg"
          />
          <Product
            id="12321564"
            title="Bestar, Ridgeley Collection, Modern Executive Computer Desk with Pedestal and Hutch"
            price={769}
            rating={4}
            image="https://m.media-amazon.com/images/I/514FO9jeeXL._AC_UL320_.jpg"
          />
          <Product
            id="49538094"
            title="Duramont Ergonomic Adjustable Office Chair with Lumbar Support and Rollerblade Wheels - High Back with Breathable Mesh - T..."
            price={329.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71fBIYDtiHL._AC_UL320_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="New Apple Watch Series 6 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={499.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71yOGVLGWpL._AC_SX679_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
          <Product
            id="9087525"
            title="Estee Lauder 2019 Holiday Blockbuster Gift Set $455+ Value Cool Color"
            price={129.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81itE-G6iLL._AC_UL320_.jpg"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829333"
            title="Samsung 75-inch Class QLED Q800T Series - Real 8K Resolution Direct Full Array 24X Quantum HDR 16X Smart TV with Alexa"
            price={3297.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61YRZhpXdiL._AC_UY218_.jpg"
          />
          <Product
            id="903850"
            title="Webcam 1080P 60FPS with Microphone for Streaming, Advanced AutoFocus, w/Privacy Cover and Tripod, NexiGo N680P Pro Computer Web Camera for Online Learning, Skype Zoom Teams, Mac PC Laptop Desktop"
            price={99.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/7157iSGVVPL._AC_UY218_.jpg"
          />
          <Product
            id="90829332"
            title="New Alienware m15 R3 15.6inch FHD Gaming Laptop (Luna Light) Intel Core i7-10750H 10th Gen, 16GB DDR4 RAM, 512GB SSD, Nvidia GeForce RTX 2060 6GB GDDR6, Windows 10 Home (AWm15-7272WHT-PUS)"
            price={1750.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SS6xBc4tL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
