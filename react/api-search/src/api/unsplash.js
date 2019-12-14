import axios from "axios";

const API = {

  getArticles (search) {
    
    return (axios.get ("https://api.unsplash.com//search/photos", {
      params: { query: search},
      headers: {
        Authorization: "Client-ID 19e0d26f748900b8b9bf34dae6aaebeea6c09ed2f93fa030f9df9719b768c30c"
      }
    }));
  }
}

export default API;