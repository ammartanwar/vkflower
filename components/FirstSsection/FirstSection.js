import React, { useState, useEffect } from "react";
import styles from "./FirstSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

function FirstSection() {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  return (
    <section className={styles.firstSection}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          {/* <p>Fill the below details to get started</p> */}
          <Form popup={true} setTrigger={setPopups} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          clickable: true,
        }}
        grabCursor={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.leftSide}>
          <div className={styles.slider1}>
            <div className={styles.innerItems}>
              <h1 className={styles.innerH1}>
                Send <span className={styles.innerSpan}>flowers</span> like you
                mean it.
              </h1>
              <p className={styles.innerPara}>
                Where flowers are our inspiration to create lasting memories.
                Whatever the occasion, our flowers will make it special cursus a
                sit amet mauris.
              </p>
              <button onClick={popupShow} className="Button">
                Talk to Florist
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.leftSide}>
          <div className={styles.slider2}>
            <div className={styles.innerItems}>
              <h1 className={styles.innerH1}>
                Send <span className={styles.innerSpan}>flowers</span> like you
                mean it.
              </h1>
              <p className={styles.innerPara}>
                Where flowers are our inspiration to create lasting memories.
                Whatever the occasion, our flowers will make it special cursus a
                sit amet mauris.
              </p>
              <button onClick={popupShow} className="Button">
                Talk to Florist
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.leftSide}>
          <div className={styles.slider3}>
            <div className={styles.innerItems}>
              <h1 className={styles.innerH1}>
                Send <span className={styles.innerSpan}>flowers</span> like you
                mean it.
              </h1>
              <p className={styles.innerPara}>
                Where flowers are our inspiration to create lasting memories.
                Whatever the occasion, our flowers will make it special cursus a
                sit amet mauris.
              </p>
              <button onClick={popupShow} className="Button">
                Talk to Florist
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default FirstSection;
