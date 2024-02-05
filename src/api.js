import axios from "axios";

const baseUrl = "https://nc-news-api-od1r.onrender.com";

export const api = {
  articles: {
    get: async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles`);

        return response.data?.articles || [];
      } catch (err) {
        console.error("An error occurred while getting categories", err);
        throw err;
      }
    },
  },
};
