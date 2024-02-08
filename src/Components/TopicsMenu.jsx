import { api } from "../api";
import { useEffect, useState } from "react";

const TopicsToggle = () => {
  const [topics, setTopics] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const loadTopics = async () => {
        const data = await api.topics.get();
        setTopics(data);
      };

      loadTopics();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="topics">
        <h3>Topics</h3>
      </div>
      <button className="sidebar-Menu" onClick={MenuOpen}>
        <span className="material-symbols-outlined">
          {isMenuOpen ? "menu_open" : "menu"}
        </span>
      </button>
      {isMenuOpen ? (
        <nav className="nav">
          <ul>
            {topics.map((topic) => (
              <li key={topic.slug} className="topics-links">
                <a className="links" href={`/topics/${topic.slug}`}>
                  <span className="material-symbols-outlined">arrow_right</span>
                  {topic.slug}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default TopicsToggle;
