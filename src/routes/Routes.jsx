import {createBrowserRouter} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Register/Register";
import Event from "../components/Event/Event";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/services/Services";
import About from "../pages/About/About";
import Contact from "../pages/Contact";
import Order from "../pages/Orders/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/" ,
            element: <Home></Home> ,
            loader : () => fetch ('/events.json')
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
          element: <PrivateRoute><Event></Event></PrivateRoute> ,
          loader : () => fetch ('/events.json')
        },
        {
          path: "/order" ,
          element: <PrivateRoute><Order></Order></PrivateRoute> ,
        },
        {
          path: "/services" ,
          element: <Services></Services> ,
          loader : () => fetch ('/events.json')
        },
        {
          path: "/about" ,
          element: <About></About> ,
        } ,
        {
          path: "/contact" ,
          element: <Contact></Contact>
        }
      ]
    },
  ]);

  export default router