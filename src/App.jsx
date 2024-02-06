import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Routes/Root";
import Error from "./Components/Error";
import Header from "./Components/Header";
import NavBar from "./Components/Navigation";
import Home from "./Routes/Home";
import Dashboard from "../src/Components/Dashboard";
import ArticleCard from "./Components/ArticleCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <Error />,
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
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
