

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import PlantsTable from "layouts/plants/components/PlantsTable";
import PlantsForm from "layouts/plants/components/PlantsForm";


function Plants() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={4}>
      </VuiBox>
      <VuiBox py={3}>
        <PlantsTable />
      </VuiBox>
      <VuiBox py={4}>
        <PlantsForm />
      </VuiBox>
    </DashboardLayout>
  );
}

export default Plants;
