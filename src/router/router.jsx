import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import FreeBizLayout from "../components/layouts/FreeBizLayout";
import FreeBiz from "../pages/free-biz/FreeBiz";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Explore from "../pages/dashboard/Explore";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard/dashboard-home" /> },
      { path: "dashboard-home", element: <DashboardHome /> },
      { path: "explore", element: <Explore /> },
    ],
  },
]);
export default router;
