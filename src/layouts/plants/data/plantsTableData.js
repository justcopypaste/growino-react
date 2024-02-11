/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiTypography variant="button" color="white" fontWeight="medium" mb="4px">
        {value}%&nbsp;
      </VuiTypography>
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const acciones = (
  <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
    more_vert
  </Icon>
);

export default {
  columns: [
    { name: "id", align: "left" },
    { name: "raza", align: "left" },
    { name: "plantada", align: "left" },
    { name: "cosecha", align: "center" },
    { name: "acciones", align: "center" },
  ],

  rows: [
    {
      id: (
        <VuiBox display="flex" alignItems="center">
          <AdobeXD size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Chakra Vision UI Version
          </VuiTypography>
        </VuiBox>
      ),
      raza: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $14,000
        </VuiTypography>
      ),
      plantada: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Working
        </VuiTypography>
      ),
      cosecha: <Completion value={60} color="info" />,
      acciones,
    },
    {
      id: (
        <VuiBox display="flex" alignItems="center">
          <Atlassian size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add Progress Track
          </VuiTypography>
        </VuiBox>
      ),
      raza: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $3,000
        </VuiTypography>
      ),
      plantada: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      cosecha: <Completion value={100} color="info" />,
      acciones,
    },
    {
      id: (
        <VuiBox display="flex" alignItems="center">
          <Slack size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Fix Platform Errors
          </VuiTypography>
        </VuiBox>
      ),
      raza: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Not set
        </VuiTypography>
      ),
      plantada: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      cosecha: <Completion value={30} color="info" />,
      acciones,
    },
    {
      id: (
        <VuiBox display="flex" alignItems="center">
          <Spotify size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Launch our Mobile App
          </VuiTypography>
        </VuiBox>
      ),
      raza: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $32,000
        </VuiTypography>
      ),
      plantada: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Canceled
        </VuiTypography>
      ),
      cosecha: <Completion value={0} color="info" />,
      acciones,
    },
    {
      id: (
        <VuiBox display="flex" alignItems="center">
          <Jira size="20px" />
          <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Add the New Pricing Page
          </VuiTypography>
        </VuiBox>
      ),
      raza: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          $2,300
        </VuiTypography>
      ),
      plantada: (
        <VuiTypography variant="button" color="white" fontWeight="medium">
          Done
        </VuiTypography>
      ),
      cosecha: <Completion value={100} color="info" />,
      acciones,
    },
  ],
};
