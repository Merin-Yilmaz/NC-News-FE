// import { useEffect, useState } from "react";
// import { getArticles } from "../api";

// const ArticleList = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const loadArticles = async () => {
//       const data = await getArticles.articles.get();
//       console.log(data);
//       setArticles(data);
//     };

//     loadArticles();
//   }, []);

//   return (
//     <section className="articles-list">
//       <h2>Trending Articles</h2>
//       {articles.map(({ article }) => (
//         <div className="all-articles" key={article}>
//           {article}
//         </div>
//       ))}
//     </section>
//   );
// };

export default ArticleList;
