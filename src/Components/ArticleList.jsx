import { useEffect, useState } from "react";
import { api } from "../api";
import { useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import Error from "./Error";
import background from "../../img/background.png";
import TopicsMenu from "./TopicsMenu";
import SortBy from "./SortBy";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topicFromQuery = searchParams.get("topic");
  const sortFromQuery = searchParams.get("sort");
  const orderFromQuery = searchParams.get("order") || "asc";

  useEffect(() => {
    try {
      const loadArticles = async () => {
        let data = [];
        if (sortFromQuery) {
          data = await api.sortArticlesBy.get(sortFromQuery, orderFromQuery);
        } else {
          data = await api.articles.get();
        }
        getFilteredArticles(data, topicFromQuery);
        setIsLoading(false);
      };
      loadArticles();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (topicFromQuery) {
      getFilteredArticles(articles, topicFromQuery);
    }
  }, [topicFromQuery]);

  const getFilteredArticles = (articles, topic) => {
    let filteredArticles = articles;
    if (topic && topic !== "") {
      filteredArticles = articles.filter((article) => article.topic === topic);
    }

    setArticles(filteredArticles);
  };

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <section className="articles-list-container">
          <div className="articles-list-column">
            <TopicsMenu />
          </div>
          <div className="articles-list-column">
            {topicFromQuery ? (
              <h3>Topic: {topicFromQuery}</h3>
            ) : (
              <h2>Articles</h2>
            )}
            <div className="articles-list-column">
              <SortBy />
            </div>
            {articles.map((article) => (
              <div className="all-articles" key={article.article_id}>
                <a href={`/articles/${article.article_id}`}>
                  <ul className="article-list-title">{article.title}</ul>
                </a>
                <img
                  className="article-list-img"
                  src={article.article_img_url}
                  alt={article.title}
                />
                <p>
                  <span className="span-author">Author: {article.author}</span>
                  <span className="span-votes">Votes: {article.votes}</span>
                  <span className="span-comment">
                    Comment Count: {article.comment_count}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ArticleList;
