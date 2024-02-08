import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Routes/Root";
import Header from "./Components/Header";
import NavBar from "./Components/Navigation";
import Home from "./Routes/Home";
import Dashboard from "../src/Components/Dashboard";
import ArticleCard from "./Components/ArticleCard";
import Cats from "./Components/Topics/Cats";
import Mitch from "./Components/Topics/Mitch";
import Paper from "./Components/Topics/Paper";
import { useState } from "react";
import UserContext from "./Components/UserContext";

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
        path: "/topics/cats",
        element: <Cats />,
      },
      {
        path: "/topics/mitch",
        element: <Mitch />,
      },
      {
        path: "/topics/paper",
        element: <Paper />,
      },
    ],
  },
]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "icellusedkars",
    name: "sam",
    avatar_url: "https://avatars2.githubusercontent.com/u/24604688?s=460&v=4",
  });

  return (
    <>
      <UserContext.Provider value={loggedInUser}>
        <Header />
        <NavBar />
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
