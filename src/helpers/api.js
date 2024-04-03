import axios from "axios";

const MY_KEY = "FhfZhPVd-yxMdAfjRCgLRgzuFeYxNO-1hwiH8reio5k";

export const requesForImages = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${MY_KEY}&query=${query}&per_page=12&page=${page}`
  );
  return response.data;
};