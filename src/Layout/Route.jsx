import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Page/Home";
import About from "../Page/About";
import Career from "../Page/Career";
import NewsDetails from "../Component/NewsDetails";
import Login from "../Component/Login";
import Register from "../Component/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('/news.json')
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/career",
            element:<Career></Career>
        },
        {
          path:"/detail/:userId",
          element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
          loader:()=>fetch('/news.json')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;