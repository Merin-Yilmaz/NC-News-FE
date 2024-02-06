import axios from "axios";

const baseUrl = "https://nc-news-api-od1r.onrender.com";

export const api = {
  articles: {
    get: async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles`);

        return response.data?.articles || [];
      } catch (err) {
        console.error("An error occurred while getting articles", err);
        throw err;
      }
    },
  },
  getArticleById: {
    get: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles/${id}`);

        return response.data?.article || [];
      } catch (err) {
        console.error(`An error occurred while getting ${article_id}`, err);
        throw err;
      }
    },
  },
  getCommentsByArticleId: {
    get: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles/${id}/comments`);

        return response.data?.comments || [];
      } catch (err) {
        console.error("An error occurred while getting comments", err);
        throw err;
      }
    },
  },
};
