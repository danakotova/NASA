import store from "../store/store";
import '../plugins';
import './style.css';





document.addEventListener("DOMContentLoaded", () => {
  initApp();

  async function initApp() {
    await store.init();
    store.getData();
  }

  console.log(getDataPickerInstance('.datepicker'));
});
