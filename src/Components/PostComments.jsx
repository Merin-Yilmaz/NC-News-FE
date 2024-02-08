import { api } from "../api";
import { useState } from "react";
import moment from "moment";
import { useContext } from "react";
import UserContext from "./UserContext";

const PostComments = ({ article_id, setComments, comments }) => {
  const [commentArea, setCommentArea] = useState("");
  const loggedInUser = useContext(UserContext);

  const submitComment = async (comment) => {
    try {
      const data = await api.addComment.post(article_id, {
        body: comment,
        username: loggedInUser.username,
      });
      console.log(data);
      setComments(() => [data, ...comments]);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickHandler = () => {
    submitComment(commentArea);
  };

  const onChangeHandler = (event) => {
    setCommentArea(event.target.value);
  };

  return (
    <section className="add-comments-main-container">
      <div className="comment-container">
        <h4>Add Comment</h4>
        <textarea value={commentArea} onChange={onChangeHandler} required />
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={onClickHandler}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default PostComments;
