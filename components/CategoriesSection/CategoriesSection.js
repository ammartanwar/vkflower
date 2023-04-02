import React, { useState, useEffect } from "react";
import styles from "./CategoriesSection.module.css";
import Popup from "../Popup/Popup";
import Form from "../Form/Form";
import ProjectPopup from "../ProductPopup/ProductPopup";
import Image from "next/image";

import {
  viewAllD,
  FreshFlowersD,
  FoliagesD,
  ForFillersD,
  specialFlowersD,
  freshFlowersD,
  BouquetsD,
  PlantsD,
} from "./CategoriesDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(true);
  const [freshFlowers, setFreshFlowers] = useState(false);
  const [freshFlowersM, setFreshFlowersM] = useState(true);
  const [foliages, setFoliages] = useState(false);
  const [fillers, setFillers] = useState(false);
  const [specialFlowers, setSpecialFlowers] = useState(false);
  const [bouquets, setBouquets] = useState(false);
  const [plants, setPlants] = useState(false);
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [Size, setSize] = useState();
  const [availability, setAvailability] = useState();
  const [quantity, setQuantity] = useState();
  const [color, setColor] = useState();
  const [linkw, setLinkw] = useState();

  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const [popupsP, setPopupsP] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const popupShowP = () => {
    setPopupsP(true);
  };
  const showMenu = () => {
    setShow(!show);
  };

  const filtteredViewAllD = viewAllD.filter(
    (post) => post.tag === "All Categories"
  );
  const filtteredFreshFlowersD = FreshFlowersD.filter(
    (post) => post.tag === "Fresh Flowers"
  );
  const filtteredFoliagesD = FoliagesD.filter(
    (post) => post.tag === "Foliages"
  );
  const filtteredForFillersD = ForFillersD.filter(
    (post) => post.tag === "For Fillers"
  );
  const filtteredspecialFlowersD = specialFlowersD.filter(
    (post) => post.tag === "Special Flowers"
  );

  return (
    <div className={styles.Course} id="categories">
      <ProjectPopup
        trigger={popups}
        setTrigger={setPopups}
        title={title}
        imgsrc={img}
        Size={Size}
        quantity={quantity}
        color={color}
        availability={availability}
        linkw={linkw}
      />
      <Popup trigger={popupsP} setTrigger={setPopupsP} className="popupModal">
        <div className="RightPopup">
          <h5>Join the Colorful Bunch!</h5>
          <Form popup={true} setTrigger={setPopupsP} />
        </div>
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
      </Popup>
      <div className={styles.displayD}>
        <div className={styles.courses}>
          <div className={styles.listButton}>
            <div className={styles.listPanel}>
              <span
                onClick={() => {
                  setViewAll(true);
                  setFreshFlowers(false);
                  setFoliages(false);
                  setSpecialFlowers(false);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={viewAll ? styles.ActiveSpan : styles.span}
              >
                All Categories
              </span>
              {viewAll ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredViewAllD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setSpecialFlowers(false);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={freshFlowers ? styles.ActiveSpan : styles.span}
                id="FreshFlower"
              >
                Fresh Flowers
              </span>
              {freshFlowers ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredFreshFlowersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setSpecialFlowers(false);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={foliages ? styles.ActiveSpan : styles.span}
              >
                Foliages
              </span>
              {foliages ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredFoliagesD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setFoliages(false);
                  setSpecialFlowers(true);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={specialFlowers ? styles.ActiveSpan : styles.span}
              >
                Special Flowers
              </span>
              {specialFlowers ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredspecialFlowersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setFoliages(false);
                  setFillers(true);
                  setSpecialFlowers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={fillers ? styles.ActiveSpan : styles.span}
              >
                Fillers
              </span>
              {fillers ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredForFillersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
            <button onClick={popupShowP} className="Button">
              Talk to Florist
            </button>
          </div>
          <div className={styles.middlePanel}>
            {viewAll ? (
              <>
                <div className={styles.gridPanelAllP}>
                  {filtteredViewAllD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div className={styles.leftSideAllP} key={id}>
                        <div key={id}>
                          <a href={link1}>
                            <Image
                              src={img}
                              width="300"
                              height="252"
                              alt="vkflower"
                              className={styles.ImgAll}
                            />
                          </a>
                          <div className={styles.contentBoxAll}>
                            <h6>{title}</h6>
                          </div>
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
                <div className={styles.gridPanelAllP} P id="Fresh">
                  {filtteredFreshFlowersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
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
                <div className={styles.gridPanelAllP} P id="foliages">
                  {filtteredFoliagesD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}
            {fillers ? (
              <>
                <div className={styles.gridPanelAllP} P id="fillers">
                  {filtteredForFillersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}
            {specialFlowers ? (
              <>
                <div className={styles.gridPanelAllP} P id="specialFlowers">
                  {filtteredspecialFlowersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
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
      <div className={styles.displayM}>
        <div className={styles.courses}>
          <div className={styles.listButton}>
            <div className={styles.listPanel}>
              <span
                onClick={() => {
                  setFreshFlowersM(true);
                  setFoliages(false);
                  setSpecialFlowers(false);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={freshFlowersM ? styles.ActiveSpan : styles.span}
                id="FreshFlower"
              >
                Fresh Flowers
              </span>
              {freshFlowersM ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredFreshFlowersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setFreshFlowersM(false);
                  setFoliages(true);
                  setSpecialFlowers(false);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={foliages ? styles.ActiveSpan : styles.span}
              >
                Foliages
              </span>
              {foliages ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredFoliagesD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setFreshFlowersM(false);
                  setFoliages(false);
                  setSpecialFlowers(true);
                  setFillers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={specialFlowers ? styles.ActiveSpan : styles.span}
              >
                Special Flowers
              </span>
              {specialFlowers ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredspecialFlowersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
                  setFreshFlowersM(false);
                  setFoliages(false);
                  setFillers(true);
                  setSpecialFlowers(false);
                  setBouquets(false);
                  setPlants(false);
                }}
                className={fillers ? styles.ActiveSpan : styles.span}
              >
                Fillers
              </span>
              {fillers ? (
                <div className={styles.mPanel}>
                  <div className={styles.gridPanel}>
                    {filtteredForFillersD.map((viewAllData) => {
                      const {
                        id,
                        title,
                        img,
                        Size,
                        color,
                        availability,
                        quantity,
                        linkw,
                        link1,
                      } = viewAllData;
                      return (
                        <div
                          className={styles.leftSide}
                          key={id}
                          onClick={() => {
                            popupShow();
                            setTitle(title);
                            setImg(img);
                            setSize(Size);
                            setAvailability(availability);
                            setColor(color);
                            setQuantity(quantity);
                            setLinkw(linkw);
                          }}
                        >
                          <div key={id}>
                            <Image
                              src={img}
                              width="423"
                              height="252"
                              alt="vkflower"
                              className={styles.courseImg}
                            />
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                            </div>
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
            <button onClick={popupShowP} className="Button">
              Talk to Florist
            </button>
          </div>
          <div className={styles.middlePanel}>
            {viewAll ? (
              <>
                <div className={styles.gridPanelAllP}>
                  {filtteredViewAllD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div className={styles.leftSideAllP} key={id}>
                        <div key={id}>
                          <a href={link1}>
                            <Image
                              src={img}
                              width="300"
                              height="252"
                              alt="vkflower"
                              className={styles.ImgAll}
                            />
                          </a>
                          <div className={styles.contentBoxAll}>
                            <h6>{title}</h6>
                          </div>
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
                <div className={styles.gridPanelAllP} P id="Fresh">
                  {filtteredFreshFlowersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
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
                <div className={styles.gridPanelAllP} P id="foliages">
                  {filtteredFoliagesD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}
            {fillers ? (
              <>
                <div className={styles.gridPanelAllP} P id="fillers">
                  {filtteredForFillersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}
            {specialFlowers ? (
              <>
                <div className={styles.gridPanelAllP} P id="specialFlowers">
                  {filtteredspecialFlowersD.map((viewAllData) => {
                    const {
                      id,
                      title,
                      img,
                      Size,
                      color,
                      availability,
                      quantity,
                      linkw,
                      link1,
                    } = viewAllData;
                    return (
                      <div
                        key={id}
                        onClick={() => {
                          popupShow();
                          setTitle(title);
                          setImg(img);
                          setSize(Size);
                          setAvailability(availability);
                          setColor(color);
                          setQuantity(quantity);
                          setLinkw(linkw);
                        }}
                      >
                        <div className={styles.leftSideAllP} key={id}>
                          <div key={id}>
                            <div>
                              <Image
                                src={img}
                                width="300"
                                height="252"
                                alt="vkflower"
                                className={styles.ImgAll}
                              />
                            </div>
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                            </div>
                          </div>
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
    </div>
  );
};

export default Course;
