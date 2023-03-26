import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import styles from "./FooterSection.module.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function FooterSection() {
  return (
    <section className={styles.FooterSection}>
      <div className={styles.FooterDiv}>
        <div className={styles.FooterDivInner}>
          <Link href="/">
            <Image
              src="RVK_Logo.png"
              alt="RVK Sumabana"
              quality={100}
              width="100"
              height="100"
            />
          </Link>
          <p className={styles.FooterInnerli}>
            RVK Sumabana can Supply Wholesale Flowers. Flowers are a great way
            to express your feelings to your loved ones. You can personally gift
            the flowers to your special ones or get them hand-delivered via us.
          </p>
          <div className={styles.FooterSocial}>
            <Link href="https://twitter.com/" target="_blank">
              <FaTwitter className="bIcons" />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebookF className="bIcons" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <FaLinkedinIn className="bIcons" />
            </Link>
            <Link href="https://YouTube" target="_blank">
              <FaYoutube className="bIcons" />
            </Link>
            <Link href="https://instagram.com/" target="_blank">
              <FaInstagram className="bIcons" />
            </Link>
          </div>
          <span style={{ display: "flex", textTransform: "lowercase" }}>
            <IoMailSharp className="bIcons" />
            <Link
              href="mailto:customercarervk@gmail.com"
              target="_blank"
              style={{ textTransform: "lowercase" }}
            >
              customercarervk@gmail.com
            </Link>
          </span>
          <span style={{ display: "flex", marginTop: "10px" }}>
            <BsFillTelephoneFill className="bIcons" />
            <Link href="tel:+918951718061" target="_blank">
              (+91) 895 171 8061
            </Link>
          </span>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Categories</p>
          <Link href="#">
            <p className={styles.FooterInnerli}>Fresh Flowers</p>
          </Link>
          <Link href="#">
            <p className={styles.FooterInnerli}>Foliages</p>
          </Link>
          <Link href="#">
            <p className={styles.FooterInnerli}>Special Flowers</p>
          </Link>
          <Link href="#">
            <p className={styles.FooterInnerli}>Fillers</p>
          </Link>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>RVK Sumabana</p>
          <Link href="#about-us">
            <p className={styles.FooterInnerli}>About Us</p>
          </Link>
          <Link href="#portfolio">
            <p className={styles.FooterInnerli}>Portfolio</p>
          </Link>
          <Link href="#blog">
            <p className={styles.FooterInnerli}>Blog</p>
          </Link>
          <Link href="#testimonials">
            <p className={styles.FooterInnerli}>Testimonials</p>
          </Link>
          <Link href="#contact-us">
            <p className={styles.FooterInnerli}>Contact Us</p>
          </Link>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Find Us Here</p>
          <Link href="#" target="_blank">
            <p className={styles.FooterInnerli}>
              #5/3, Opposite 5th Cross Road, Beside Shell Petroleum, Marigowda
              Road, Wilson Garden, Bangalore, Karnataka, India 560027
            </p>
          </Link>
        </div>
      </div>
      {/* <div
        className={styles.FooterDiv}
        style={{
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "#00000050",
          alignItems: "end",
        }}
      > */}
        {/* <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Branches</p>
          <p className={styles.FooterInnerP}>HOSUR</p>
          <p className={styles.FooterInnerli}>
            NO HIG.87, AVALAPALLI HUDCO, Basthi Road, PHASE VI, Hosur, Tamil
            Nadu, Pin:-635109.
          </p>
        </div>

        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>Bangalore</p>
          <p className={styles.FooterInnerli}>
            #14/2, 3rd main road, 9th Cross Rd, Wilson Garden, Bengaluru,
            Karnataka 560027
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>TRIVANDRUM</p>
          <p className={styles.FooterInnerli}>
            T.C 14/1925 Palayam University P.O, University of Kerala Senate
            House Campus, Bakery Junction, Palayam Service Road,
            Thiruvananthapuram, Kerala, Pin:-695034.
          </p>
        </div>
        <div className={styles.FooterDivInner}>
          <p className={styles.FooterInnerP}>CHANDAPURA</p>
          <p className={styles.FooterInnerli}>
            #115, SBR Complex, Hosur Main Road , Beside Murali TVS Chandapura
            Circle, Bangalore, Karnataka , Pin:-560099.
          </p>
        </div> */}
      {/* </div> */}
      <div className={styles.FooterBottom}
      style={{
        borderTop: "1px solid",
        borderBottom: "1px solid",
        borderColor: "#00000050",
        alignItems: "end",
      }}>
        <div className={styles.FooterBottomInner}>
          <p className={styles.FooterInnerB}>
            Copyright © 2022. RVK Sumabana.All Rights
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
