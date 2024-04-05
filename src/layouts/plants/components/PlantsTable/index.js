// @mui material components
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";

/* eslint-disable react/prop-types */
// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { useState, useEffect } from 'react';

function Completion({ value, color }) {
  return (
    <VuiBox display="flex" flexDirection="column" alignItems="flex-start">
      <VuiBox width="8rem">
        <VuiProgress value={value} color={color} sx={{ background: "#2D2E5F" }} label={false} />
      </VuiBox>
    </VuiBox>
  );
}

const columns = [
  { name: "id", align: "left" },
  { name: "nombre", align: "left" },
  { name: "raza", align: "left" },
  { name: "plantada", align: "left" },
  { name: "cosecha", align: "center" },
  { name: "editar", align: "center" },
  { name: "eliminar", align: "center" },
]

const deletePlant = (id) => {
  if (confirm(`Seguro que quieres eliminar la plata con id ${id}?`)) {
    const userid = window.localStorage.getItem("userid")
    fetch(`https://www.growino.app:420/api/plants?userid=${userid}&id=${id}`, {
      method: "DELETE"
    })
      .then((res) => res.json())
      .then((res)=>{console.log(res)})
      .catch((err) => alert(err))
  }
};
const editPlant = (id) => console.log("edit " + id);

function getPlant(data) {
  const _date = new Date(data.plantedDate)
  const date = _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear()

  return {
    id: (
      <VuiTypography pl="26px" color="white" variant="button" fontWeight="medium">
        {data.id}
      </VuiTypography>
    ),
    nombre: (
      <VuiTypography variant="button" color="white" fontWeight="medium">
        {data.name}
      </VuiTypography>
    ),
    raza: (
      <VuiTypography variant="button" color="white" fontWeight="medium">
        {data.strain}
      </VuiTypography>
    ),
    plantada: (
      <VuiTypography variant="button" color="white" fontWeight="medium">
        {date}
      </VuiTypography>
    ),
    cosecha: <Completion value={60} color="info" />,
    editar: <Icon sx={{ mr: "4px" }} onClick={() => { editPlant(data.id) }}>edit</Icon>,
    eliminar: <Icon sx={{ mr: "4px" }} onClick={() => { deletePlant(data.id) }}>delete</Icon>,

  }
}

function PlantsTable() {
  const [rows, setData] = useState([]);

  const userid = window.localStorage.getItem("userid")
  useEffect(() => {
    fetch(`https://www.growino.app:420/api/plants?userid=${userid}`)
      .then((res) => res.json())
      .then((data) => {
        let _rows = []

        data.forEach((plant) => _rows.push(getPlant(plant)))

        setData(_rows)
      }).catch(() => {
        setData([])
      });
  }, []);

  return (
    <Card>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiTypography variant="lg" color="white">
          Plantas
        </VuiTypography>
      </VuiBox>
      <VuiBox
        sx={{
          "& th": {
            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
              `${borderWidth[1]} solid ${grey[700]}`,
          },
          "& .MuiTableRow-root:not(:last-child)": {
            "& td": {
              borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                `${borderWidth[1]} solid ${grey[700]}`,
            },
          },
        }}
      >
        <Table columns={columns} rows={rows} />
      </VuiBox>
    </Card>
  );
}

export default PlantsTable;
