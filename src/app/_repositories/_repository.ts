import axios from "axios";

const baseDomein: string = "http://localhost:3000";

const Repository = axios.create({
  baseURL: baseDomein,
  // withCredentials: true,
});

export default Repository;
