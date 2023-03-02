import React, { useState } from "react";
import styles from "./Form.module.css";
import "react-phone-number-input/style.css";
import { useRouter } from "next/router";


const Form = ({ popup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [toggle, setToggle] = useState(true);
  const [alertMSG, setAlertMSG] = useState("");
  const [disable, setDisable] = useState(false);
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      mobile,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMobile("");
        setBody("");
      }
    });
    if (router.pathname === "/") {
      setToggle(false);
      setAlertMSG("Form Submitted successfully");
      setDisable(false);
      setValue("");
    }
  };
  
  return (
    <div className={styles.App}>
      <form>
        <div className={styles.formWrapper}>
          <input
            type="text"
            className={popup ? styles.NameInputs : styles.NameInput}
            required
            placeholder="Enter your Full Name"
            style={{ borderBottom: "1px solid grey" }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="email"
            required
            placeholder="Enter your Email"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="phone"
            required
            placeholder="Enter your Mobile Number"
            className={popup ? styles.EmailInputs : styles.EmailInput}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            name="mobile"
          />
        </div>
        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={styles.button}
        >
          Talk to Florist
        </button>
      </form>
    </div>
  );
};

export default Form;
