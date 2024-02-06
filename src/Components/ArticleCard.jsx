import React, { useState, useEffect } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "./Error";
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
          <p className="article-list-detail">
            <ul className="article-date">Date Created: {article.created_at}</ul>
            <ul className="article-topic">Topic: {article.topic}</ul>
            <img
              className="article-img"
              src={article.article_img_url}
              alt={article.title}
            />
            <ul className="article-author">Author: {article.author}</ul>
            <ul className="article-votes">Votes: {article.votes}</ul>
            <VoteCounter />
            <ul className="article-comments">
              Comments: {article.comment_count}
            </ul>
          </p>
        </>
      ) : null}
    </>
  );
};

export default ArticleCard;