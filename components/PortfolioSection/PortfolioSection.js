import React, { useState, useEffect } from "react";
import styles from "./PortfolioSection.module.css";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import Image from "next/image";

import {
  viewAllD,
  FreshFlowersD,
  FoliagesD,
} from "./PortfolioDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(true);
  const [freshFlowers, setFreshFlowers] = useState(false);
  const [foliages, setFoliages] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const [mobile, setMobile] = useState(false);

  const filtteredViewAllD = viewAllD.filter(
    (post) => post.tag === "All Categories"
  );
  const filtteredFreshFlowersD = FreshFlowersD.filter(
    (post) => post.tag === "Fresh Flowers"
  );
  const filtteredFoliagesD = FoliagesD.filter(
    (post) => post.tag === "Foliages"
  );

  return (
    <div className={styles.Course} id="portfolio">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          <Form popup={true} setTrigger={setPopups} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <div className={styles.courses}>
        <div className={styles.listButton}>
          <div className={styles.listPanel}>
            <span
              onClick={() => {
                setViewAll(true);
                setFreshFlowers(false);
                setFoliages(false);
              }}
              className={viewAll ? styles.ActiveSpan : styles.span}
            >
              Gallery
            </span>
            {viewAll ? (
              <div className={styles.mPanel}>
                <div className={styles.gridPanel}>
                  {filtteredViewAllD.map((viewAllData) => {
                    const { id, title, title1, img, para, link1, link2 } =
                      viewAllData;
                    return (
                      <div className={styles.leftSide} key={id}>
                        <div key={id}>
                          <a href={link1}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              className={styles.courseImg}
                              alt="vkflower"
                            />
                          </a>
                          {/* <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setFreshFlowers(true);
                setFoliages(false);
              }}
              className={freshFlowers ? styles.ActiveSpan : styles.span}
            >
              Videos
            </span>
            {freshFlowers ? (
              <div className={styles.mPanel}>
                <div className={styles.gridPanel}>
                    {filtteredFreshFlowersD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <div className={styles.leftSide} key={id}>
                          <div key={id}>
                            <a href={link1}>
                              <Image
                                src={img}
                                width="423"
                                height="252"
                                alt="vkflower"
                                className={styles.courseImg}
                              />
                            </a>
                            {/* <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div> */}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              ""
            )}
            <span
              onClick={() => {
                setViewAll(false);
                setFreshFlowers(false);
                setFoliages(true);
              }}
              className={foliages ? styles.ActiveSpan : styles.span}
            >
              Brochure
            </span>
            {foliages ? (
              <div className={styles.mPanel}>
                <div className={styles.gridPanel}>
                    {filtteredFoliagesD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <div className={styles.leftSide} key={id}>
                          <div key={id}>
                            <a href={link1}>
                              <Image
                                src={img}
                                width="423"
                                height="252"
                                alt="vkflower"
                                className={styles.courseImg}
                              />
                            </a>
                            {/* <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div> */}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button onClick={popupShow} className="Button">Talk to Florist</button>
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <div className={styles.gridPanelAllP}>
                {filtteredViewAllD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div key={id}>
                        <a href={link1}>
                          <Image
                            src={img}
                            width="300"
                            height="252"
                            alt="vkflower"
                            className={styles.Img}
                          />
                          {/* <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div> */}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {freshFlowers ? (
            <>
              <div className={styles.gridPanelAllP} id="Fresh">
                {filtteredFreshFlowersD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                      <div key={id}>
                        <a href={link1}>
                          <Image
                            src={img}
                            width="300"
                            height="252"
                            alt="vkflower"
                            className={styles.Img}
                          />
                          {/* <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div> */}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {foliages ? (
            <>
              <div className={styles.gridPanelAllP} id="foliages">
                {filtteredFoliagesD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSide} key={id}>
                    <div key={id}>
                      <a href={link1}>
                        <Image
                          src={img}
                          width="300"
                          height="252"
                          alt="vkflower"
                          className={styles.Img}
                        />
                        {/* <div className={styles.contentBoxAll}>
                          <h6>{title}</h6>
                          <h6>{title1}</h6>
                        </div> */}
                      </a>
                    </div>
                  </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Course;
