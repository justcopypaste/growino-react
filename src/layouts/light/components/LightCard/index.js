

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiSwitch from "components/VuiSwitch";
import React from 'react';


function LightCard() {
  const [active, setActive] = useState(true);
  const [timeOn, setTimeOn] = useState('08:00');
  const [timeOff, setTimeOff] = useState('22:00');

  const onChangeOff = (value) => {
    setTimeOff(value);
  };
  const onChangeOn = (value) => {
    setTimeOn(value);
  };

  const title = "Armario 1"

  return (
    <Card sx={{ minHeight: "250px", height: "100%" }}>
      <VuiBox display="flex" mt="0" justifyContent="space-between">
        <VuiTypography pl="10px" variant="h4" fontSize="1.5rem" fontWeight="bold" color="white" textTransform="capitalize">
          {title}
        </VuiTypography>
        <VuiBox>
          <VuiSwitch color="info" checked={active} onChange={() => setActive(!active)} />
        </VuiBox>
      </VuiBox>
      <VuiBox display="flex" flexDirection="row" gap="5px" justifyContent="center" alignItems="center" height="80%">
        <Table columns={[{ name: "encendido", align: "center", fontSize: "1rem", fontWeight: "normal" }, { name: "apagado", align: "center", fontSize: "1rem", fontWeight: "normal" }]} rows={[{
          encendido: (
            <VuiTypography variant="h1" fontSize="2.5rem"  fontWeight="medium" color="white" textTransform="capitalize">
              {timeOn}
            </VuiTypography>
          ),
          apagado: (
            <VuiTypography variant="h1" fontSize="2.5rem" fontWeight="medium" color="white" textTransform="capitalize">
              {timeOff}
            </VuiTypography>
          )
        }]} />

      </VuiBox>
    </Card>
  );
}

export default LightCard;
