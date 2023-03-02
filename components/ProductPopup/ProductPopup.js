import React, { useState, useEffect } from "react";
import styles from "./ProductPopup.module.css";
import Image from "next/image";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ProjectPopup = (props, linkw) => {
  const popupShowP = () => {
    setPopupsP(true);
  };
  const [popupsP, setPopupsP] = useState(false);

  let color = "transparent";
  if (props.price) color = "white";
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);
  return props.trigger ? (
    <div className={styles.popup}>
      <Popup trigger={popupsP} setTrigger={setPopupsP} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          <Form popup={true} setTrigger={setPopupsP} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        {props.downloadBrochure ? (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        ) : (
          <IoClose
            className={styles.closeBtn}
            onClick={() => {
              props.setTrigger(false);
            }}
          />
        )}

        <div className={styles.InnerGrid}>
          <div className={styles.imgWrap}>
            <Image src={props.imgsrc} width="200" height="300" alt="vkflower" />
          </div>
          <div className={styles.contentWrap}>
            <h5>{props.title}</h5>
            <p>
              <b>Size :- </b>
              {props.Size}
            </p>
            <p>
              <b>Color :- </b>
              {props.color}
            </p>
            <p>
              <b>Quantity :- </b>
              {props.quantity}
            </p>
            <p>
              <b>Availability :- </b>
              {props.availability}
            </p>
            <div className={styles.buttonDiv}>
              <div>
                <button onClick={popupShowP} className="Button">
                  Talk to Florist
                </button>
              </div>
              <div>
                <a href={props.linkw}>
                  <button className="ButtonWhatsapp">
                    {" "}
                    <FaWhatsapp className="iconWhatsapp" />
                    Whatsapp
                  </button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ProjectPopup;
