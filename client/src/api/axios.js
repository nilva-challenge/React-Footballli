import axios from "axios";

export const getPostPage = async (query) => {
  const res = await axios.get(`http://localhost:5000/?q=${query}`);
  return res.data;
};
