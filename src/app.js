import store from "../store/store";
import "../plugins";
import "./style.css";
import formUI from "../views/forms";

document.addEventListener("DOMContentLoaded", () => {
  initApp();

  document.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(formUI.inputDateValue);

  });

  async function initApp() {
    await store.init();
    store.getData();
  }
});
