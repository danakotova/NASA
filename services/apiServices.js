import config from "../config/apiConfig";
import axios from "axios";


//const axios = require('axios').default;

class Api {
  constructor(config) {
    this.apiUrl = config.apiUrl;
    this.apiKey = config.apiKey;
  }

  // методы, которые формируют ссылку-запрос на API.
  async astronomyPictureOfTheDay(inputDate) {
    try {
      const response = await axios.get(
        `${this.apiUrl}/planetary/apod?api_key=${this.apiKey}`,
        {
          params: {
            date: inputDate,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return;
    }
  }
}

const api = new Api(config);

export default api;
