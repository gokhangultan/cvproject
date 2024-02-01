import { GlobalActionTypes } from "../store";

export const changeLanguage = () => {
    return {type: GlobalActionTypes.changeLanguage}
}

export const toggleDarkMode = () => {
  return { type: GlobalActionTypes.toggleDarkMode };
};