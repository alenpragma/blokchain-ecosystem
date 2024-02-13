import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import FaqLayout from "../components/layouts/FaqLayout";
import Faq from "../pages/faq/Faq";

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
    path: "faq",
    element: <FaqLayout />,
    children: [{ path: "faq-home", element: <Faq /> }],
  },
]);
export default router;
