import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ChefDetails from "../ChefDetails/ChefDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/chef-details/:id",
          element: <ChefDetails></ChefDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
      ]
    },
  ]);

  export default router;