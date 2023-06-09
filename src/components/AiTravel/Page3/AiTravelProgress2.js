import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../Page1/AiTravelMain.module.scss";

const AiTravelProgress2 = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div style={{ height: "100%" }} className={styles.fonts}>
      <div
        className={`${
          isDesktop ? styles.CategoryDesktop : styles.CategoryMobile
        }`}
      >
        <br></br>
        <br></br>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "16px", textAlign: "center" }}>
            <input
              type="radio"
              disabled={true}
              style={{
                marginBottom: "4px",
                appearance: "none",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                border: "5px solid #ef455a",
                backgroundColor: "#fff",
              }}
              checked={true}
            />
            <div className={styles.progress}>여행 국가</div>
          </div>
          <div style={{ marginRight: "16px", textAlign: "center" }}>
            <input
              type="radio"
              disabled={true}
              style={{
                marginBottom: "4px",
                appearance: "none",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                border: "5px solid #ef455a",
                backgroundColor: "#fff",
              }}
              checked={true}
            />
            <div className={styles.progress}>체류 기간</div>
          </div>
          <div style={{ marginRight: "16px", textAlign: "center" }}>
            <input
              type="radio"
              disabled={true}
              style={{
                marginBottom: "4px",
                appearance: "none",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                border: "5px solid #ef455a",
                backgroundColor: "#fff",
              }}
              checked={true}
            />
            <div className={styles.progress}>여행 테마</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <input
              type="radio"
              disabled={true}
              style={{
                marginBottom: "4px",
                appearance: "none",
                borderRadius: "50%",
                width: "16px",
                height: "16px",
                border: "3px solid gray",
                backgroundColor: "#fff",
              }}
              checked={true}
            />
            <div className={styles.progress}>추천 경로</div>
          </div>
        </div>
        <div className={styles.FormHorizontal}></div>
      </div>
    </div>
  );
};

export default AiTravelProgress2;
