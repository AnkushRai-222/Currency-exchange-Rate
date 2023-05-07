import React from "react";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <div className= {styles.all}>
      <footer>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.logo_details}>
              <span className={styles.logo_name}>Currency Lab</span>
            </div>

          </div>
          <div className={styles.link_boxes}>
            <ul className={styles.box}>
              <li className={styles.link_name}>Company</li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/blog">Get started</a>
              </li>
            </ul>
           
            <ul className={styles.box}>
              <li className={styles.link_name}>Account</li>
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">My account</a>
              </li>
              <li>
                <a href="/">Prefrences</a>
              </li>
             
            </ul>
       
            <ul className={styles.input_box}>
              <li className={styles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom_details}>
          <div className={styles.bottom_text}>
            <span className={styles.copyright_text}>
              Copyright © 2023 <a href="/"> Currency Lab.</a>All rights reserved
            </span>
            <span className={styles.policy_terms}>
              <a href="/">Privacy policy</a>
              <a href="/">Terms & condition</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;