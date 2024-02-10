import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Routes/Root";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Dashboard from "../src/Components/Dashboard";
import ArticleCard from "./Components/ArticleCard";
import { useState } from "react";
import UserContext from "./Components/UserContext";
import ArticleList from "./Components/ArticleList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/articles/:article_id",
        element: <ArticleCard />,
      },
      {
        path: "/articles?topic=:topic",
        element: <ArticleList />,
      },
      {
        path: "/articles?topic=:topic",
        element: <ArticleList />,
      },
      {
        path: "/articles?sort_by=:sort",
        element: <ArticleList />,
      },
    ],
  },
]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  return (
    <>
      <div >
        <UserContext.Provider value={loggedInUser}>
          <Header />
          <RouterProvider router={router} />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
