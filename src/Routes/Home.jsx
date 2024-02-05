import { useEffect, useState } from "react";
import { api } from "../api";

const Home = () => {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const loadArticles = async () => {
      const data = await api.articles.get();
      setArticles(data);
    };

    loadArticles();
  }, []);

  return (
    <section className="articles-list">
      <h2>Trending Articles</h2>
      {articles.map(( article ) => (
        <div className="all-articles" key={article.article_id}>
          <ul>{article.title}</ul>
        </div>
      ))}
    </section>
  );
};

export default Home;
