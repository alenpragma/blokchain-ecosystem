import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Nav/Footer";

const Main = () => {
    return (
        <div>
         <Navbar />
         <Outlet />
         <Footer />
        </div>
    );
};

export default Main;