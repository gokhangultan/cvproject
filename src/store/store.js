import { legacy_createStore as createStore } from "redux";

export const GlobalActionTypes = {
    changeLanguage: "CHANGE_LANG",
    toggleDarkMode: "DARK_MODE",
  };
  

const initialState = {
    lang: "TR",
    darkMode: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.changeLanguage:
          return {
            ...state,
            lang: state.lang === "TR" ? "EN" : "TR" ,
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