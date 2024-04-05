// @mui material components
import Grid from "@mui/material/Grid";
import { Card, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import Footer from "../../examples/Footer"
import Camera from "layouts/dashboard/components/Camera";
import TempGauge from "layouts/dashboard/components/TempGauge";
import HumGauge from "layouts/dashboard/components/HumGauge";
import PowerGauge from "layouts/dashboard/components/PowerGauge";
import SoilChart from "layouts/dashboard/components/SoilChart";
import TempChart from "layouts/dashboard/components/TempChart";

// React icons
import { FaBolt, FaDollarSign } from "react-icons/fa";

// Data
import BarChart from "examples/Charts/BarCharts/BarChart";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";
import Dropdown from "./components/Dropdown"

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox>
        <VuiBox mb={3}>
          <Grid display="flex" justifyContent="end">


            <Dropdown/>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} lg={12} xl={6}>
              <Camera />
            </Grid>
            <Grid item xs={6} lg={6} xl={3}>
              <TempGauge />
            </Grid>
            <Grid item xs={6} lg={6} xl={3}>
              <HumGauge />
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <SoilChart />
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <PowerGauge />
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={6}>
              <TempChart />
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="220px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaBolt color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Junio
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        5.2kWh
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaDollarSign color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Junio
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        $108
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaBolt color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Cultivo
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        16.2kWh
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaDollarSign color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Cultivo
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        $420
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
