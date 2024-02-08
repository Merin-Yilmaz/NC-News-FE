import axios from "axios";

const baseUrl = "https://nc-news-api-od1r.onrender.com";

export const api = {
  articles: {
    get: async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles`);

        return response.data?.articles;
      } catch (error) {
        throw new Error(alert("An error occurred while getting articles"));
      }
    },
  },
  getArticleById: {
    get: async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles/${id}`);

        return response.data?.article;
      } catch (error) {
        throw new Error(alert("An error occurred while getting this article"));
      }
    },
  },
  getCommentsByArticleId: {
    get: async (id) => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/articles/${id}/comments`
        );

        return response.data?.comments;
      } catch (error) {
        throw new Error(alert("An error occurred while getting comments"));
      }
    },
  },
  updateVotes: {
    patch: async (id, vote) => {
      try {
        const response = await axios.patch(`${baseUrl}/api/articles/${id}`, {
          inc_votes: vote,
        });

        return response.data?.votes;
      } catch (error) {
        throw new Error(alert("An error occurred while updating votes"));
      }
    },
  },
  addComment: {
    post: async (id, comment) => {
      try {
        const response = await axios.post(
          `${baseUrl}/api/articles/${id}/comments`,
          comment
        );
        return response.data?.comment;
      } catch (error) {
        throw new Error(alert("An error occurred while adding your comment"));
      }
    },
  },
  deleteComment: {
    delete: async (comment_id) => {
      try {
        const response = await axios.delete(
          `${baseUrl}/api/comments/${comment_id}`
        );
        return response.data?.comment;
      } catch (error) {
        throw new Error(alert("An error occurred while deleting your comment"));
      }
    },
  },
  topics: {
    get: async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/topics`);

        return response.data?.topics;
      } catch (error) {
        throw new Error(alert("An error occurred while getting topics"));
      }
    },
  },
};
