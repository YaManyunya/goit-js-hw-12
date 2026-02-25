import axios from "axios";

const keyAPI = "54745176-88cc855ad5905fcb142882934";
const urlAPI = "https://pixabay.com/api/";

export const perPage = 15;

export const getImagesByQuery = async (query, page = 1) => {
  
    const response = await axios.get(urlAPI, {params:{
    key: keyAPI,
    q: `${query}`,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page,
    per_page: perPage,
    }});
    return response.data;
}