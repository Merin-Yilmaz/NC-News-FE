import { useEffect, useState } from "react";
import { api } from "../../api";
import Loading from "../Loading";
import Error from "../Error";

const Mitch = () => {
  const [mitchArticles, setMitchArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const loadArticles = async () => {
        const data = await api.articles.get();
        const mitchArticles = data.filter(
          (article) => article.topic === "mitch"
        );
        setMitchArticles(mitchArticles);
        setIsLoading(false);
      };

      loadArticles();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <section className="articles-list">
      <h1>Topic: Mitch</h1>
      {mitchArticles.length ? (
        <div>
          {mitchArticles.map((article) => (
            <div className="all-articles" key={article.id}>
              <a href={`/articles/${article.article_id}`}>
                <ul className="article-list-title">{article.title}</ul>
              </a>
              <ul> Author: {article.author}</ul>
              <ul>Votes: {article.votes}</ul>
              <ul>Comment Count: {article.comment_count}</ul>
            </div>
          ))}
        </div>
      ) : (
        <h5>
          Sorry, no articles yet{" "}
          <span class="material-symbols-outlined">sentiment_dissatisfied</span>
        </h5>
      )}
    </section>
  );
};

export default Mitch;
