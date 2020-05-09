import config from "../config/apiConfig";
import axios from "axios";

//const axios = require('axios').default;

class Api {
  constructor(config) {
    this.apiUrl = config.apiUrl;
    this.apiKey = config.apiKey;
  }

  // методы, которые формируют ссылку-запрос на API.
  async astronomyPictureOfTheDay() {
    try {
      const response = await axios.get(
        `${this.apiUrl}/planetary/apod?api_key=${this.apiKey}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(config);

export default api;
