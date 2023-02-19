import React from "react";
import styles from "./ContactUs.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Image from "next/image";


function ContactUs() {
  return (
    <section className={styles.ContactUs} id="contact-us">
        <div className={styles.none}></div>
      <div className={styles.right}>
      <h1 className={styles.innerH1}>
Join The 
<br/><span className={styles.innerSpan}>Colorful Bunch!</span>
        </h1>
        <div className={styles.formWrapper}>
          <input
            type="text"
            name="name"
            className={styles.NameInput}
            required
            placeholder="Enter your Full Name"
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your Email"
            className={styles.NameInput}
          />
        </div>
        <div className={styles.formWrapper}>
          <PhoneInput
            name="phone"
            rules={{ required: true }}
            defaultCountry="IN"
            placeholder="Enter Phone Number"
            className={styles.PhoneInput}
            required
          />
        </div>
        <div className={styles.ButtonDiv}>
        <button type="submit" className="Button">
          Talk to Florist
        </button>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
