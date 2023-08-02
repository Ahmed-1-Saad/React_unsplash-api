import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID 724nNkn5KDz6P1wUyUt_tXtuAOzBJsbPG5jXDSTcVtw",
      },
      params: {
        query: term,
      },
    }
  );

  return response.data.results;
};

export default SearchImages;
