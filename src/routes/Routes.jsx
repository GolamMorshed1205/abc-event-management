import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Event from "../components/Event/Event";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/" ,
            element: <Home></Home> ,
            loader : () => fetch ('events.json')
        },
        {
          path: "/login" ,
          element: <Login></Login>
        },
        {
          path: "/register" ,
          element: <Register></Register>
        },
        {
          path: "/event/:id" ,
          element: <Event></Event>
        }
      ]
    },
  ]);

  export default router