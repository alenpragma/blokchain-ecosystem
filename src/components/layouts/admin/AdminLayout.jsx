import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Container from "../../shared/Container";

const AdminLayout = () => {
  return (
    <Container>
      <div className=" grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <AdminSidebar />
        </div>
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminLayout;
