import { getDataPickerInstance } from "../plugins/materialize";

class FormUI {
  constructor(dataPickerInstance) {
    this.date = document.getElementById("datapicker");
    this.inputDate = dataPickerInstance(this.date); // receive choosen data from input
  }

  get inputDateValue() {
    return this.inputDate.toString(); // materialize - "gets a string representation of the selected date"
  }
}

const formUI = new FormUI(getDataPickerInstance);

export default formUI;
