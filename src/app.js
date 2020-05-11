import store from "../store/store";
import "../plugins";
import "./style.css";
import formUI from "../views/forms";
import pictureUI from "../views/pictureOfTheDay"

document.addEventListener("DOMContentLoaded", () => {
  
  document.addEventListener("submit", (event) => {
    event.preventDefault();
    initApp(formUI.inputDateValue);
  });

  async function initApp(inputDate) {
    const receivedPicture = await store.init(inputDate);
    pictureUI.renderPicture(receivedPicture);
    
  }
});
