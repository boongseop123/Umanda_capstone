import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectedOptionsState,
  selectedCountriesState,
} from "../../../recoils/Recoil";
import axios from "axios";
import { API_URL_AI } from "../../Constant";
import { useNavigate } from "react-router";
import styles from "./AiTravelTrait.module.scss";
import { motion } from "framer-motion";
import culture from "./resources/culture_icon.png";
import fotball from "./resources/football.png";
import nature from "./resources/nature.png";
import camera from "./resources/camera.png";
import ski from "./resources/ski.png";
import fashion from "./resources/fashion.png";
import drink from "./resources/drink.png";
import movie from "./resources/movie.png";

const AiTravelTrait = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null); // 응답데이터를 저장할 상태

  const selectedCountries = useRecoilValue(selectedCountriesState);
  const [selectedOptions, setSelectedOptions] =
    useRecoilState(selectedOptionsState);

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(selectedOption)) {
        return prevSelectedOptions.filter(
          (option) => option !== selectedOption
        );
      } else {
        return [...prevSelectedOptions, selectedOption];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      // 선택된 국가와 옵션을 JSON 형식으로 변환하여 서버에 보낸다.
      const data = JSON.stringify({
        countryName: selectedCountries,
        features: selectedOptions,
      });
      console.log(data);
      const response = await axios.post(`${API_URL_AI}/getURI`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResponse(response.data); // 응답데이터를 상태로 저장
      console.log("성공적으로 서버에 데이터를 보냈습니다!");
      navigate("/ai-travel-spot-select", {
        state: { response: response.data },
      }); // 이동할 경로를 지정
    } catch (error) {
      console.error(
        "데이터를 서버에 보내는 도중에 에러가 발생했습니다:",
        error
      );
    }
  };

  return (
    <motion.div
      /* 2. 원하는 애니메이션으로 jsx를 감싸준다 */
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.container}>
        <div className={styles.title}>원하는 여행 테마를 선택해 주세요!</div>
        <div className={styles.row}>
          <div className={styles.col}>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="문화와 예술"
                value="문화와 예술"
                checked={selectedOptions.includes("문화와 예술")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>문화 · 예술</span>
              <img src={culture} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="유럽축구"
                value="유럽축구"
                checked={selectedOptions.includes("유럽축구")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>풋볼투어</span>
              <img src={fotball} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="자연풍경"
                value="자연풍경"
                checked={selectedOptions.includes("자연풍경")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>자연 · 풍경</span>
              <img src={nature} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="사진명소"
                value="사진명소"
                checked={selectedOptions.includes("사진명소")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>포토스팟</span>
              <img src={camera} alt="culture" className={styles.icon} />
            </label>
          </div>
          <div className={styles.col}>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="액티비티"
                value="액티비티"
                checked={selectedOptions.includes("액티비티")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>액티비티</span>
              <img src={ski} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="쇼핑과 패션"
                value="쇼핑과 패션"
                checked={selectedOptions.includes("쇼핑과 패션")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>쇼핑 · 패션</span>
              <img src={fashion} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="술과 음식"
                value="술과 음식"
                checked={selectedOptions.includes("술과 음식")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>펍 · 푸드</span>
              <img src={drink} alt="culture" className={styles.icon} />
            </label>
            <label className={styles.option}>
              <input
                type="checkbox"
                id="영화촬영지"
                value="영화촬영지"
                checked={selectedOptions.includes("영화촬영지")}
                onChange={handleOptionChange}
              />
              <span className={styles.checkmark}></span>
              <span className={styles.feature_name}>영화 촬영지</span>
              <img src={movie} alt="culture" className={styles.icon} />
            </label>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiTravelTrait;
