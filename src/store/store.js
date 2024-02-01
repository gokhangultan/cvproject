import { legacy_createStore as createStore } from "redux";

export const GlobalActionTypes = {
    changeLanguage: "CHANGE_LANG",
    toggleDarkMode: "DARK_MODE",
  };
  

const initialState = {
    lang: "TR",
    darkMode: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.changeLanguage:
          return {
            ...state,
            lang: state.lang === "EN" ? "TR" : "EN",
          };
        case GlobalActionTypes.toggleDarkMode:
          return {
            ...state,
            darkMode: !state.darkMode,
          };
        default:
          return state;
      }
};

export const store = createStore(reducer);