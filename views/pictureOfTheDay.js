class PictureUI {
  constructor() {
    this.container = document.querySelector(".picture-section .row");
  }

  renderPicture(receivedPicture) {
    this.clearContainer();

    if (receivedPicture == null) {
      this.showEmptyMsg();
      return;
    }

    const result = PictureUI.pictureTemplate(receivedPicture);
    this.container.insertAdjacentHTML("afterbegin", result);
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  showEmptyMsg() {
    const template = PictureUI.emptyMsgTemplate();
    this.container.insertAdjacentHTML("afterbegin", template);
  }

  static emptyMsgTemplate() {
    return `
    <div class="empty-msg">
      There is no picture for choosen day. Try to pick another one!
    </div>
    `;
  }

  static pictureTemplate({ date, url, copyright, explanation }) {
    return `
    <div class="card">
    <div class="card-content">
      <div class="card-header">
        <span class= "card-title"> ${date}</span>
      </div>
      <hr>
      <img class="pictureUrl" src=${url}>
      <hr>
      <div class="card-text">
      ${explanation}
       <hr>
      ${copyright ? "Copyright: " + copyright : ""}
      </div>
    </div>
  </div>`;
  }
}

const pictureUI = new PictureUI();

export default pictureUI;
