import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const [icon, setIcon] = useState(false);

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
    <div>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <GiHamburgerMenu
            className={styles.ham}
            onClick={() => {
              showMenu();
              setIcon(false);
            }}
          />

          <div className={show ? styles.mobileWrapper : styles.hide}>
            <div className={styles.mobileMenu}>
              <span onClick={showMenu}>
                <Link href="/">Home</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#categories">Categories</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#about-us">About Us</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#portfolio">Portfolio</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#blog">Blog</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#testimonials">Testimonials</Link>
              </span>
              <span onClick={showMenu}>
                <Link href="#contact-us">Contact Us</Link>
              </span>
            </div>
          </div>
          <Link href="/">
            <Image
              src="RVK_Logo.png"
              alt="Learnbay"
              quality={100}
              width="115"
              height="115"
            />
          </Link>
          {mobile ? (
            <button onClick={popupShow} className="Button">
              Talk to Florist
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={styles.right}>
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="#categories">Categories</Link>
          </span>
          <span>
            <Link href="#about-us">About Us</Link>
          </span>
          <span>
            <Link href="#portfolio">Portfolio</Link>
          </span>
          <span>
            <Link href="#blog">Blog</Link>
          </span>
          <span>
            <Link href="#testimonials">Testimonials</Link>
          </span>
          <span>
            <Link href="#contact-us">Contact Us</Link>
          </span>
          <button onClick={popupShow} className="Button">
            Talk to Florist
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
