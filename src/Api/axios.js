import axios from "axios";
const axiosInstance = axios.create({
  //baseURL: "http://127.0.0.1:5001/clone-81748/us-central1/api",
  baseURL: "https://amazon-api-deploy-9unc.onrender.com/api",
});
export { axiosInstance };
