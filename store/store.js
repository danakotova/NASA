import api from "../services/apiServices";

class Store {
  
  constructor(api) {
    this.api = api;
    this.date = 0;
    this.explanation = 0;
    this.picUrl = 0;
  }


  async init(inputDate) {
    const response = await this.api.astronomyPictureOfTheDay(inputDate);
    return response;
  }

}

const store = new Store(api);
export default store;
