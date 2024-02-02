import axios from "axios";
import baseUrl from "../baseUrl";

const url = `${baseUrl}/places`;

const getAllPlace = () => {
  return axios.get(url).then((res) => res.data);
};

export default {
  getAllPlace,
};
