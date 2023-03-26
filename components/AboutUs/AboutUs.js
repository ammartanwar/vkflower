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
  }, []);
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
        <Image
          src="/leftAboutD.jpg"
          width="650"
          height="420"
          alt="RVK Sumabana"
          className={styles.ImgD}
        />
        <Image
          src="/leftAboutM.jpg"
          width="350"
          height="220"
          alt="RVK Sumabana"
          className={styles.ImgM}
        />
      </div>
      <div className={styles.right}>
        <h1 className={styles.innerH1}>
          About <span className={styles.innerSpan}>RVK Sumabana</span>
          <br />
          Let us arrange a smile.
        </h1>
        <p className={styles.innerPara}>
          RVK Sumabana can Supply Wholesale Flowers. Flowers are a great way to
          express your feelings to your loved ones. We are growers and suppliers
          of over 30 varieties of colourful flowers and 10 varieties of
          foliages. We guarantee the best quality farm fresh flowers at
          wholesale price. We are currently providing service in pan India.
          We believe in 100% customer care and satisfaction.
        </p>
        <button onClick={popupShow} className="Button">
          Talk to Florist
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
