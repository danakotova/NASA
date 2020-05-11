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
}

const pictureUI = new PictureUI();

export default pictureUI;
