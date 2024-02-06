import { useEffect, useState } from "react";
import { api } from "../api";
import Loading from "../Components/Loading";
import Error from "./Error";
// import Accordion from "./CommentAccordion";
// import Comments from "./Comments";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    try {
      const loadArticles = async () => {
        const data = await api.articles.get();
        setArticles(data);
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
      <h2>Trending Articles</h2>
      {articles.map((article) => (
        <div className="all-articles" key={article.article_id}>
          <a href={`/articles/${article.article_id}`}>
            <ul>{article.title}</ul>
          </a>
          <ul> Author: {article.author}</ul>
          <ul>Votes: {article.votes}</ul>
          <ul>Comment Count: {article.comment_count}</ul>
          {/* <div className="article-list-comments">
            <Accordion contentDescriptor={"Comments"}>
              <Comments article_id={article.article_id} />
            </Accordion>
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default ArticleList;
