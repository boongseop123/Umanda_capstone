import React, { useState, useEffect } from "react";

import { useMediaQuery } from "react-responsive";
import axios from "axios";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./AccompanyPage.module.scss";
import AccompanyBody from "./Body/AccompanyBody";

const AccompanyPage = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div>
      <div className={styles.Frame1}>
        <Header />
      </div>
      <div className={isDesktop ? styles.desktopFrame2 : styles.mobileFrame2}>
        <AccompanyBody />
        <Footer />
      </div>
    </div>
  );
};

export default AccompanyPage;
