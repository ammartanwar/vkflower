import React from "react";
import styles from "./BlogSection.module.css";
import Image from "next/image";

function blogSection() {
  return (
    <section className={styles.blogSection} id="blog" >
      <div className={styles.blogContent}>
        <h2>From our Blog</h2>
        <p>
          A perfect blend of creativity, energy, communication, happiness and
          love. Let us arrange a smile for you.
        </p>
      </div>
      <div className={styles.blogInner}>
        <div>
          <Image src="/leftAbout.jpg" width="370" height="270" alt="VK Flora" className={styles.ImgM} />
          <h2>Flower Power</h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per
          </p>
        </div>
        <div>
          <Image src="/leftAbout.jpg" width="370" height="270" alt="VK Flora" className={styles.ImgM} />
          <h2>Local Florists</h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per
          </p>
        </div>
        <div>
          <Image src="/leftAbout.jpg" width="370" height="270" alt="VK Flora" className={styles.ImgM} />
          <h2>Flower Beauty</h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per
          </p>
        </div>
      </div>
    </section>
  );
}

export default blogSection;
