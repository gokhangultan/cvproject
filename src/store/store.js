import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';

export const GlobalActionTypes = {
    changeLanguage: "CHANGE_LANG",
    toggleDarkMode: "DARK_MODE",
    setData: "SET_DATA"
  };
  
  const localLang = localStorage.getItem("lang");
  const localTheme = localStorage.getItem("darkMode");

const initialState = {
    lang: localLang === null ? "EN" : JSON.parse(localLang),
    localLang: false,
    darkMode: localTheme !== null ? JSON.parse(localTheme) : false,
    data: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.changeLanguage:
          return {
            ...state,
            lang: state.lang === "EN" ? "TR" : "EN" ,
          };
          case GlobalActionTypes.changeLanguage:
          return {
            ...state,
            localLang: !state.localLang ,
          };
          
        case GlobalActionTypes.toggleDarkMode:
          return {
            ...state,
            darkMode: !state.darkMode,
          };
        case GlobalActionTypes.setData:
          return {
            ...state,
            data: action.payload,
          }
        default:
          return state;
      }
};

export const store = createStore(reducer, applyMiddleware(logger));