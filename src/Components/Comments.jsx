import React, { useState, useEffect } from "react";
import { api } from "../api";
import Loading from "./Loading";
import Error from "./Error";
import moment from "moment";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const loadComments = async () => {
        const data = await api.getCommentsByArticleId.get(article_id);
        setComments(data);
        setIsLoading(false);
      };
      loadComments();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <section className="comments-list">
      {comments.map((comment) => (
        <div className="all-comments" key={comment.comment_id}>
          <ul className="comment-body">{comment.body}</ul>
          <ul className="comment-author">Author: {comment.author}</ul>
          <ul className="comment-votes">Votes: {comment.votes}</ul>
          <ul className="comment-date">
            Date Posted: {moment(comment.created_at).format("MMMM Do YYYY")}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Comments;
