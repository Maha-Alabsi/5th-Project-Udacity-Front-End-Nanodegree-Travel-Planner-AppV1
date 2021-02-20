import { performAction } from "./js/app";
import { removeResult } from "./js/removeResult";
import { removeSavedItem } from "./js/removeResult";
import { saveResult } from "./js/saveResult";
import { show } from "./js/burgerMenu";
import { close } from "./js/burgerMenu";
import "./styles/style.scss";
import "./media/logo2.png";
import "./media/img15.jpg";
//font awesom
import "@fortawesome/fontawesome-free/js/all.js";
//AddEventListener to the performAction()
const search = document.getElementById("generate");
if (search != null) {
  // Event listener to add function to existing HTML DOM element
  search.addEventListener("click", performAction);
}

//AddEventListener to the removResult()
const remove = document.getElementById("remove");
const result = document.getElementById("result-container");
if (remove != null) {
  result.addEventListener("click", removeResult);
}
//AddEventListener to the saveResult()
const saveButton = document.getElementById("save");
if (saveButton != null) {
  saveButton.addEventListener("click", saveResult);
}

const removeSave = document.getElementById("remove2");
if (removeSave != null) {
  removeSave.addEventListener("click", removeSavedItem);
}
export {
  performAction,
  removeResult,
  removeSavedItem,
  saveResult,
  show,
  close,
};

alert("I EXIST !!");
