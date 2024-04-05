

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import LightCard from "./components/LightCard"


function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <Grid container spacing="18px">
        <Grid item xs={12} lg={5} xl={4}>
          <LightCard />
        </Grid>
      </Grid>

      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Tables;
