import React from "react";
import styles from "./ReviewsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";

function reviewsSection() {
  return (
    <section className={styles.reviewsSection} id="testimonials">
      <div className={styles.reviewsSectionDiv}>
        <Swiper
          slidesPerView={1}
          navigation={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.leftSide}>
            <div className={styles.slider}>
              <div className={styles.innerItems}>
                <Image
                  src="/leftAbout.jpg"
                  width="100"
                  height="100"
                  alt="RVK Sumabana"
                  className={styles.Image}
                />
                <p className={styles.testText}>
                  Great service by the team. Received fresh flowers for our
                  house warming ceremony. Every detail turned out to be amazing.
                </p>
                <p className={styles.authorName}>Jasmine White</p>
                <p className={styles.authorJob}>Florist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.leftSide}>
            <div className={styles.slider}>
              <div className={styles.innerItems}>
                <Image
                  src="/leftAbout.jpg"
                  width="100"
                  height="100"
                  alt="RVK Sumabana"
                  className={styles.Image}
                />
                <p className={styles.testText}>
                  Being an event management company, we always order flowers
                  from RVK and they always manage to wow us with the quality of
                  their products.
                </p>
                <p className={styles.authorName}>Jasmine White</p>
                <p className={styles.authorJob}>Florist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.leftSide}>
            <div className={styles.slider}>
              <div className={styles.innerItems}>
                <Image
                  src="/leftAbout.jpg"
                  width="100"
                  height="100"
                  alt="RVK Sumabana"
                  className={styles.Image}
                />
                <p className={styles.testText}>
                Surprised by how freshed the quality of products were and also happy to be a satisfied customer at RVK
                </p>
                <p className={styles.authorName}>Jasmine White</p>
                <p className={styles.authorJob}>Florist</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default reviewsSection;
