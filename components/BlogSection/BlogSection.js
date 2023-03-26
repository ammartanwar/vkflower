import React from "react";
import styles from "./BlogSection.module.css";
import Image from "next/image";
import Link from "next/link";

function blogSection() {
  return (
    <section className={styles.blogSection} id="blog" >
      <div className={styles.blogContent}>
        <h2>Our bloom stories</h2>
        <p>
        Read our blogs here:
        </p>
      </div>
      <div className={styles.blogInner}>
      <a href="https://medium.com/@rvksumabana/one-stop-shop-for-all-floral-needs-ae1908d52d38" target="_blank" rel="noreferrer" >
        <div>
          <Image src="/blog1.jpg" width="300" height="300" alt="RVK Sumabana"  />
          <h2>One Stop Shop for all Floral Needs</h2>
          {/* <p>
          One Stop Shop for all Floral Needs
          </p> */}
        </div>
        </a>
        <a href="https://medium.com/@rvksumabana/rvksumabana-flower-farming-1627f193d585" target="_blank" rel="noreferrer">
        <div>
          <Image src="/blog2.jpg" width="300" height="300" alt="RVK Sumabana"  />
          <h2>RVKsumabana - Flower Farming?</h2>
          {/* <p>
          RVKsumabana - Flower Farming?
          </p> */}
        </div>
        </a>
        {/* <div>
          <Image src="/leftAbout.jpg" width="370" height="270" alt="RVK Sumabana" className={styles.ImgM} />
          <h2>Flower Beauty</h2>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default blogSection;
