import React, { useState, useEffect } from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

function AboutUs() {
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
  });
  return (
    <section className={styles.aboutUs} id="about-us">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <div className={styles.left}>
        <Image src="/leftAbout.jpg" width="650" height="420" alt="VK Flora" className={styles.ImgD} />
        <Image src="/leftAbout.jpg" width="350" height="220" alt="VK Flora" className={styles.ImgM} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.innerH1}>
          About <span className={styles.innerSpan}>RVK</span>
          <br />
          Let us arrange a smile.
        </h1>
        <p className={styles.innerPara}>
          V K Flora can Supply Wholesale Flowers. Flowers are a great way to
          express your feelings to your loved ones. You can personally gift the
          flowers to your special ones or get them hand-delivered via us. We V K
          Flora Growers And Suppliers at Wilson Garden believe in customer
          satisfaction as the topmost priority to all of our clients as we make
          sure that they are completely satisfied with our service and delivery.
          Our dedicated and professional staff will provide you with a
          delightful experience.
        </p>
        <button onClick={popupShow} className="Button">Talk to Florist</button>
      </div>
       ̰
    </section>
  );
}

export default AboutUs;
