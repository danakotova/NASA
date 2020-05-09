import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  format: 'yyyy-mm-dd'
});

export function getDataPickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);