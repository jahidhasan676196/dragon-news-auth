import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Page/Home";
import About from "../Page/About";
import Career from "../Page/Career";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/career",
            element:<Career></Career>
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