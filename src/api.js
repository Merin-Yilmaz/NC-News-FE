import axios from "axios";

const baseUrl = "https://nc-news-api-od1r.onrender.com";

export const api = {
  articles: {
    get: async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/articles`);

        return response.data?.articles;
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

        return response.data?.article;
      } catch (err) {
        console.error("An error occurred while getting this article", err);
        throw err;
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
      } catch (err) {
        console.error("An error occurred while getting comments", err);
        throw err;
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
      } catch (err) {
        console.error("An error occurred while updating votes", err);
        throw err;
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
      } catch (err) {
        console.error("An error occurred while adding your comment", err);
        throw err;
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
      } catch (err) {
        console.error("An error occurred while deleting your comment", err);
        throw err;
      }
    },
  },
};
