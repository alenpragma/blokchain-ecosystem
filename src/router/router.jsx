import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import FreeBizLayout from "../components/layouts/FreeBizLayout";
import FreeBiz from "../pages/free-biz/FreeBiz";

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
    path: "/",
    element: <FreeBizLayout />,
    children: [{ path: "free-biz-home", element: <FreeBiz /> }],
  },
]);
export default router;
