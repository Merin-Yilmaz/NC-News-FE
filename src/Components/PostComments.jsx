import { api } from "../api";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const PostComments = ({
  article_id,
  setComments,
  comments,
  setCount,
  count,
}) => {
  const [commentArea, setCommentArea] = useState("");
  const loggedInUser = useContext(UserContext);

  const submitComment = async (comment) => {
    try {
      if (commentArea.length > 0) {
        const data = await api.addComment.post(article_id, {
          body: comment,
          username: loggedInUser.username,
        });
        setCount(count + 1);
        setComments(() => [data, ...comments]);
        setCommentArea("");
        alert("Your comment will be added");
      } else {
        alert("Sorry, you can't submit an empty comment!");
      }
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
        <textarea
          onChange={onChangeHandler}
          value={commentArea}
          required
          cols="40"
          rows="4"
        />
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
