import React, { useState, useEffect } from "react";
import { api } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import moment from "moment";
import PostComments from "./PostComments";
import { useContext } from "react";
import UserContext from "./UserContext";

const Comments = ({ article }) => {
  const loggedInUser = useContext(UserContext);
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(article.comment_count);
  const [error, setError] = useState();

  const loadComments = async () => {
    const data = await api.getCommentsByArticleId.get(article.article_id);
    setComments(data);
    setCount(data.length);
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      loadComments();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  const deleteComment = async (commentId) => {
    try {
      const data = await api.deleteComment.delete(commentId);
      loadComments();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <section className="comments-list">
      <ul className="article-comments">Comment Count: {count}</ul>
      <div className="add-comments">
        <PostComments
          setCount={setCount}
          count={count}
          setComments={setComments}
          comments={comments}
          article_id={article.article_id}
        />
      </div>
      {comments.map((comment) => (
        <div className="all-comments" key={comment.comment_id}>
          <ul className="comment-body">{comment.body}</ul>

          <ul className="comment-author">
            {" "}
            <img
              className="user-img"
              src={loggedInUser.avatar_url}
              alt={`avatar for user ${loggedInUser.username}`}
            />
            Author: {comment.author}
          </ul>
          <ul className="comment-votes">Votes: {comment.votes}</ul>
          <ul className="comment-date">
            Date Posted: {moment(comment.created_at).format("MMMM Do YYYY")}
          </ul>
          <form onSubmit={() => alert("Your comment will be removed")}>
            <button
              className="btn btn-outline-dark"
              onClick={() => deleteComment(comment.comment_id)}
            >
              {" "}
              Delete
            </button>
          </form>
        </div>
      ))}
    </section>
  );
};

export default Comments;
