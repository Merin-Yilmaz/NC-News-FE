import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Routes/Root";
import ErrorPage from "../src/Routes/404";
import Header from "./Components/Header";
import NavBar from "./Components/Navigation";
import Home from "./Routes/Home";
import Dashboard from "../src/Components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
