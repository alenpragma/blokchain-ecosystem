import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import FreeBizLayout from "../components/layouts/FreeBizLayout";
import FreeBiz from "../pages/free-biz/FreeBiz";
import DashboardLayout from "../components/layouts/dashboard/DashboardLayout";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Buy from "../pages/dashboard/Buy";
import Swap from "../pages/dashboard/Swap";
import Sell from "../pages/dashboard/Sell";
import SellReceived from "../pages/dashboard/SellReceived";
import Import from "../pages/dashboard/Import";
import Error from "../components/error/Error";
import News from "../pages/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({params}) => fetch(`https://biz-server-git-main-remontripuras-projects.vercel.app/news/${params.id}`)
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
      { path: "*", element: <Error /> },
      { path: "dashboard-home", element: <DashboardHome /> },
      { path: "buy", element: <Buy /> },
      { path: "sell", element: <Sell /> },
      { path: "swap", element: <Swap /> },
      { path: "send", element: <SellReceived /> },
      { path: "import-token", element: <Import /> },
    ],
  },
]);
export default router;
