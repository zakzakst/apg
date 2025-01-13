import axios from "axios";

const baseDomein: string = "https://jsonplaceholder.typicode.com";

const Repository = axios.create({
  baseURL: baseDomein,
});

export default Repository;
