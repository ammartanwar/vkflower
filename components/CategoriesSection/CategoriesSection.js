import React, { useState, useEffect } from "react";
import styles from "./CategoriesSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectPopup from "../ProductPopup/ProductPopup";
import Image from "next/image";

import {
  viewAllD,
  FreshFlowersD,
  FoliagesD,
  ForFillersD,
  specialFlowersD,
  BouquetsD,
  PlantsD,
} from "./CategoriesDetails";

const Course = () => {
  const [viewAll, setViewAll] = useState(true);
  const [freshFlowers, setFreshFlowers] = useState(false);
  const [foliages, setFoliages] = useState(false);
  const [fillers, setFillers] = useState(false);
  const [specialFlowers, setSpecialFlowers] = useState(false);
  const [bouquets, setBouquets] = useState(false);
  const [plants, setPlants] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState(3.2);
  const [img, setImg] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
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
  const filtteredBouquetsD = BouquetsD.filter(
    (post) => post.tag === "Bouquets"
  );
  const filtteredPlantsD = PlantsD.filter((post) => post.tag === "Plants");

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setValue(1.1);
      setMobile(true);
    } else if (width <= 641) {
      setValue(1.6);
    } else if (width <= 800) {
      setValue(2);
    } else if (width <= 961) {
      setValue(2.3);
    } else if (width <= 1025) {
      setValue(2.6);
    } else if (width <= 1280) {
      setValue(2.8);
    } else if (width <= 1281) {
      setValue(2.9);
    }
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);

  return (
    <div className={styles.Course} id="categories">
      <ProjectPopup
        trigger={popups}
        setTrigger={setPopups}
        title={title}
        desc={desc}
        imgsrc={img}
      />
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
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
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
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredFreshFlowersD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredFoliagesD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
                          <div className={styles.gridImg}>
                            <a href={link1}>
                              <Image
                                src={img}
                                width="423"
                                height="252"
                                alt="vkflower"
                                className={styles.courseImg}
                              />
                            </a>
                          </div>
                          <div className={styles.contentBox}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredspecialFlowersD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredForFillersD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                setFillers(false);
                setSpecialFlowers(false);
                setBouquets(true);
                setPlants(false);
              }}
              className={bouquets ? styles.ActiveSpan : styles.span}
            >
              Bouquets
            </span>
            {bouquets ? (
              <div className={styles.mPanel}>
                <div className={styles.gridPanel}>
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredBouquetsD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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
                setFillers(false);
                setSpecialFlowers(false);
                setBouquets(false);
                setPlants(true);
              }}
              className={plants ? styles.ActiveSpan : styles.span}
            >
              Plants
            </span>
            {plants ? (
              <div className={styles.mPanel}>
                <div className={styles.gridPanel}>
                  <Swiper
                    slidesPerView={value}
                    spaceBetween={mobile ? 10 : 20}
                    pagination={{
                      clickable: true,
                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {filtteredPlantsD.map((viewAllData) => {
                      const { id, title, title1, img, para, link1, link2 } =
                        viewAllData;
                      return (
                        <SwiperSlide className={styles.leftSide} key={id}>
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
                            <div className={styles.contentBox}>
                              <h6>{title}</h6>
                              <h6>{title1}</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <button onClick={popupShow} className="Button">
            Talk to Florist
          </button>
        </div>
        <div className={styles.middlePanel}>
          {viewAll ? (
            <>
              <div className={styles.gridPanelAll}>
                {filtteredViewAllD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSideAll} key={id}>
                      <div key={id}>
                        <a href={link1}>
                          <Image
                            src={img}
                            width="423"
                            height="252"
                            alt="vkflower"
                            className={styles.ImgAll}
                          />
                          <div className={styles.contentBoxAll}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div>
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
                    <div
                      key={id}
                      onClick={() => {
                        popupShow();
                        setTitle(title);
                        setDesc(desc);
                        setImg(img);
                      }}
                    >
                      <div className={styles.leftSideAllP} key={id}>
                        <div key={id}>
                          <a>
                            <Image
                              src={img}
                              width="300"
                              height="252"
                              alt="vkflower"
                              className={styles.ImgAll}
                            />
                            <div className={styles.contentBoxAll}>
                              <h6>{title}</h6>
                              <p>{desc}</p>
                            </div>
                          </a>
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
              <div className={styles.gridPanelAllP} id="foliages">
                {filtteredFoliagesD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
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
                          <div className={styles.contentBoxAll}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div>
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
          {fillers ? (
            <>
              <div className={styles.gridPanelAllP} id="fillers">
                {filtteredForFillersD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
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
                          <div className={styles.contentBoxAll}>
                            <h6>{title}</h6>
                            <h6>{title1}</h6>
                          </div>
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
          {specialFlowers ? (
            <>
              <div className={styles.gridPanelAllP} id="specialFlowers">
                {filtteredspecialFlowersD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSideAllP} key={id}>
                      <a href={link1}>
                        <Image
                          src={img}
                          width="300"
                          height="252"
                          alt="vkflower"
                          className={styles.ImgAll}
                        />
                        <div className={styles.contentBoxAll}>
                          <h6>{title}</h6>
                          <h6>{title1}</h6>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {bouquets ? (
            <>
              <div className={styles.gridPanelAllP} id="bouquets">
                {filtteredBouquetsD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSideAllP} key={id}>
                      <a href={link1}>
                        <Image
                          src={img}
                          width="300"
                          height="252"
                          alt="vkflower"
                          className={styles.ImgAll}
                        />
                        <div className={styles.contentBoxAll}>
                          <h6>{title}</h6>
                          <h6>{title1}</h6>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {plants ? (
            <>
              <div className={styles.gridPanelAllP} id="plants">
                {filtteredPlantsD.map((viewAllData) => {
                  const { id, title, title1, img, para, link1, link2 } =
                    viewAllData;
                  return (
                    <div className={styles.leftSideAllP} key={id}>
                      <a href={link1}>
                        <Image
                          src={img}
                          width="300"
                          height="252"
                          alt="vkflower"
                          className={styles.ImgAll}
                        />
                        <div className={styles.contentBoxAll}>
                          <h6>{title}</h6>
                          <h6>{title1}</h6>
                        </div>
                      </a>
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
