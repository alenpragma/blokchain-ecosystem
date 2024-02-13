import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import AboutLayout from "../components/layouts/AboutLayout";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "about",
    element: <AboutLayout />,
    children: [{ path: "about-home", element: <About /> }],
  },
]);
export default router;
