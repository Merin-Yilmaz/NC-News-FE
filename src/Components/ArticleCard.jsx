import React, { useState, useEffect } from "react";
import { api } from "../api";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "./Error";
import Comments from "./Comments";
import Accordion from "./CommentAccordion";
import moment from "moment";
import VoteCounter from "./VoteCounter";
import background from "../../img/background.png";

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
      <div style={{ backgroundImage: `url(${background})` }}>
        <div className="article-card-detail">
          {article ? (
            <>
              <h2>{article.title}</h2>

              <ul className="article-topic">Topic: {article.topic}</ul>
              <img
                className="article-img"
                src={article.article_img_url}
                alt={article.title}
              />
              <div className="article-body-background">
              <ul className="article-author">Author: {article.author}</ul>
                <ul className="article-body">{article.body}</ul>
                <ul className="article-date">
                  Date Posted: <br></br>
                  {moment(article.created_at).format("MMMM Do YYYY")}
                </ul>

                <VoteCounter article={article} />
                <br></br>
                <div className="view-comments">
                  <Accordion contentDescriptor={"Comments"}>
                    <Comments article={article} />
                  </Accordion>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
