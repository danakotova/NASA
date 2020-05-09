import api from "../services/apiServices";

class Store {
  
  constructor(api) {
    this.api = api;
    this.date = 0;
    this.explanation = 0;
    this.picUrl = 0;
  }


  async init() {
    const response = await this.api.astronomyPictureOfTheDay();
    this.date = await response.date;
    this.explanation = await response.explanation;
    this.picUrl = await response.hdurl;
    return response;
  }

  getData() {
    console.log(this.date);
    console.log(this.explanation);
    console.log(this.picUrl);
  }
}

const store = new Store(api);
export default store;
