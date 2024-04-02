import Editors from "../../components/dashboardComponents/Editors";
import CopyToken from "../../components/dashboardComponents/dashboard/CopyToken";
import DashboardTable from "../../components/dashboardComponents/dashboard/DashboardTable";

const DashboardHome = () => {
  return (
    <div>
      <CopyToken />
      <DashboardTable />
      <Editors />

    </div>
  );
};

export default DashboardHome;
