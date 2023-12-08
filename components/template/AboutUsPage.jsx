import Image from "next/image";
import React from "react";
import styles from "../style/about.module.css";
import sohrabi from "./../../assets/images/107153.JPG";

function AboutUsPage() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <div className={styles.boxPersenalContainer}>
        <div className={styles.boxPersenalTextContainer}>
          <h1>Mohammad Sohrabi</h1>
          <h4>Web programmer and developer</h4>
        </div>
        <Image
          className={styles.aboutImage}
          src={sohrabi}
          alt="Mohammad Sohrabi"
          width={500} // تنظیم عرض تصویر
          height={500} // تنظیم ارتفاع تصویر
        />
      </div>
      <div className={styles.boxContainer}>
        <p>
          <span className={styles.emoji}>🚀 Welcome to Our World of Code!</span>
          <br />
          We're not just a team; we're a bunch of tech enthusiasts, passionate
          coders, and creative problem solvers! Our journey revolves around the
          fascinating realm of technology, where every line of code is a step
          towards innovation.
        </p>
        <p>
          <span className={styles.emoji}>Who Are We?</span>
          <br />
          We are the architects of the digital future, weaving intricate
          solutions with the threads of code. Our team is fueled by a shared
          love for technology, a knack for coding wizardry, and an unwavering
          commitment to pushing the boundaries.
        </p>
        <p>
          <span className={styles.emoji}>What Defines Us?</span>
          <br />
          In our world, challenges are opportunities, bugs are puzzles, and
          every project is a canvas waiting for the strokes of creativity. We
          don't just write code; we craft digital experiences that leave a
          lasting impression.
        </p>
        <p>
          <span className={styles.emoji}>Our Approach: Tech with a Heart</span>
          <br />
          Behind the screens and lines of code, there's a team with a heart for
          innovation. We believe in making technology accessible, enjoyable, and
          impactful. Our approach is not just about writing flawless code but
          creating solutions that resonate with users.
        </p>
        <p>
          Join us on this exciting journey through the digital landscape, where
          each day brings new possibilities and every project is a chance to
          make a difference. Welcome to our hub of creativity, innovation, and
          endless lines of code!
        </p>
        <p>
          Ready to embark on a coding adventure with us?
          <br />
          Happy coding! 🚀✨
        </p>
      </div>
      <p>If you have any questions or comments, contact us:</p>
      <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.emailIcon}>📧</span> Email: mohammadsohrabi141@gmail.com
            </li>
            <li>
              <span className={styles.phoneIcon}>📞</span> Phone: 09186333667
            </li>
          </ul>
        </div>
      
    </div>
  );
}

export default AboutUsPage;
