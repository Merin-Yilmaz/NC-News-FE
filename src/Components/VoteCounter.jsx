import React, { useState } from "react";
import { api } from "../api";
import like from "../../img/like.png";
import dislike from "../../img/dislike.png";

const VoteCounter = ({ article }) => {
  const [votes, setVotes] = useState(article.votes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  const updateVotes = async (vote) => {
    try {
      const data = await api.updateVotes.patch(article.article_id, vote);
      setVotes(data.votes);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpvote = () => {
    updateVotes("+1");
  };

  const handleDownvote = () => {
    updateVotes("-1");
  };

  return (
    <div className="article-votes">
      Votes: {votes}
      <br></br>
      <button
        type="button"
        className="btn btn-outline-success"
        disabled={hasUpvoted}
        onClick={() => {
          handleUpvote();
          setHasUpvoted(true);
        }}
      >
        Upvote <img src={like} alt="like image" height={25} width={25} />
      </button>
      <button
        type="button"
        className="btn btn-outline-danger"
        disabled={hasDownvoted}
        onClick={() => {
          handleDownvote();
          setHasDownvoted(true);
        }}
      >
        Downvote{" "}
        <img src={dislike} alt="dislike image" height={25} width={25} />
      </button>
    </div>
  );
};

export default VoteCounter;
