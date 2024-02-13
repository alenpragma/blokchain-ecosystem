import { Outlet } from "react-router-dom";
import FaqHeader from "./FaqHeader";
import FaqFooter from "./FaqFooter";

const FaqLayout = () => {
  return (
    <div>
    <FaqHeader />
    <Outlet />
    <FaqFooter />
    </div>
  );
};

export default FaqLayout;