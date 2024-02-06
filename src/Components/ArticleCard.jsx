import React, { useState, useEffect } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "./Error";
import Comments from "./Comments";
import Accordion from "./CommentAccordion";
import moment from "moment";
import VoteCounter from "./VoteCounter";

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const loadArticle = async () => {
        const data = await api.getArticleById.get(article_id);
        setArticle(data);
        setIsLoading(false);
      };
      loadArticle();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [article_id]);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      {article ? (
        <>
          <h2>{article.title}</h2>
          <div className="article-list-detail">
            <ul className="article-date">
              Date Created: <br></br>
              {moment(article.created_at).format("MMMM Do YYYY")}
            </ul>
            <ul className="article-topic">Topic: {article.topic}</ul>
            <ul className="article-author">Author: {article.author}</ul>
            <img
              className="article-img"
              src={article.article_img_url}
              alt={article.title}
            />
            <ul className="article-body">{article.body}</ul>

            <VoteCounter article={article} />
            <br></br>
            <ul className="article-comments">
              Comment Count: {article.comment_count}
            </ul>
            <div className="view-comments">
              <Accordion contentDescriptor={"Comments"}>
                <Comments article_id={article_id} />
              </Accordion>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ArticleCard;
