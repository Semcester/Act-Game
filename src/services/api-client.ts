import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "97aaa13bb89a4d1b98b9c230618e02cc",
  },
});
