import { atom, selector, useRecoilState } from "recoil";

export const tokenState = atom({
  key: "tokenState",
  default: "",
});

export const selectedCountriesState = atom({
  key: "selectedCountries",
  default: [],
});

export const selectedSpotsState = atom({
  key: "selectedSpotsState",
  default: [],
});

export const selectedCountryNameState = atom({
  key: "selectedCountryNameState",
  default: "",
});

export const selectedOptionsState = atom({
  key: "selectedOptionsState",
  default: [],
});

export const responseState = atom({
  key: "responseState",
  default: "",
});

export const latitudeState = atom({
  key: "latitudeState",
  default: null,
});

export const longitudeState = atom({
  key: "longitudeState",
  default: null,
});

export const IdState = atom({
  key: "IdState",
  default: 0,
});

export const postState = atom({
  key: "postState",
  default: [],
});

export const selectedSpotsByCountryState = atom({
  key: "selectedSpotsByCountryState",
  default: {},
});

export const selectedSpotsByCountrySelector = selector({
  key: "selectedSpotsByCountrySelector",
  get: ({ get }) => {
    const selectedSpotsByCountry = get(selectedSpotsByCountryState);
    return selectedSpotsByCountry;
  },
});

export const updatedSelectedSpotsByCountryState = atom({
  key: "updatedSelectedSpotsByCountryState",
  default: {},
});

export const countryDurationsState = atom({
  key: "countryDurationsState",
  default: [], // 국가별 기간을 담을 상태
});

export const selectedCountryDurationsSelector = selector({
  key: "selectedCountryDurationsSelector",
  get: ({ get }) => {
    const selectedCountries = get(selectedCountriesState);
    const countryDurations = get(countryDurationsState);
    return selectedCountries.map((country, index) => {
      return countryDurations[index] || null;
    });
  },
});

export const travelDurationState = atom({
  key: "travelDurationState",
  default: [],
});

export const newResponseState = atom({
  key: "newResponseState",
  default: [],
});

export const spotImagesState = atom({
  key: "spotImagesState",
  default: {},
});

export const selectedcourseState = atom({
  key: "selectedCourse",
  default: null,
});

export const selectedSpotsArrayState = atom({
  key: "selectedSpotsArrayState",
  default: [], // 초기값은 빈 배열
});

export const combinedSelectedSpotsArrayState = atom({
  key: "combinedSelectedSpotsArrayState",
  default: [],
});

export const chatRoomsState = atom({
  key: "chatRoomsState",
  default: [],
});

export const selectedDateState = atom({
  key: "selectedDateState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: { name: "", username: "", birthdate: "" }, // include other user properties as needed
});

export const departDateState = atom({
  key: "departureDateState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const currentUserState = atom({
  key: "currentUserState",
  default: null, // 초기값 설정
});

export const postAuthorState = atom({
  key: "postAuthorState",
  default: null, // 초기값 설정
});

export const unreadMessageState = atom({
  key: "unreadMessageState",
  default: {},
});

export const usernameState = atom({
  key: "usernameState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
