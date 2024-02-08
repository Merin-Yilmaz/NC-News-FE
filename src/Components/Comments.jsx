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
  const [counter, setCounter] = useState(article.comment_count);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const loadComments = async () => {
        const data = await api.getCommentsByArticleId.get(article.article_id);
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
      <ul className="article-comments">
        Comment Count: {article.comment_count}
      </ul>
      <div className="add-comments">
        <PostComments
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
        </div>
      ))}
    </section>
  );
};

export default Comments;
