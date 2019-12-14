import axios from "axios";

const KEY = "AIzaSyDpWiCBqk0L7wIFq63oImeou98c24oDvyE";

export default axios.create ({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});