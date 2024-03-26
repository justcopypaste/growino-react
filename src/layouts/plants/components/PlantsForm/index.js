

// @mui material components
import Card from "@mui/material/Card";

/* eslint-disable react/prop-types */
// @mui material components
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useState, useEffect } from 'react';

// Vision UI Dashboard React components
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

const sendData = (payload) => {
    if (!payload.id) {
        alert("NO ID")
        return
    }
    if (!payload.name) {
        alert("NO NAME")
        return
    }
    if (!payload.strain) {
        alert("NO STRAIN")
        return
    }
    if (!payload.plantedDate) {
        alert("NO DATE")
        return
    }
    if (!payload.tent) {
        alert("NO TENT")
        return
    }

    document.getElementById("idInput").value = ""
    document.getElementById("nameInput").value = ""
    document.getElementById("strainInput").value = ""
    document.getElementById("dateInput").value = ""
    document.getElementById("tentInput").value = ""

    payload.userid = window.localStorage.getItem("userid")

    fetch('https://www.growino.app:420/api/plants', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            window.location.reload()
        }).catch((err) => {
            console.log(err);
            alert("Ocurrio un error inesperado")
        });
};

function PlantsForm() {
    const [_id, setID] = useState(0);
    const [_name, setName] = useState("");
    const [_strain, setStrain] = useState("");
    const [_planted, setDate] = useState("");
    const [_tent, setTent] = useState(0);

    const handleId = (event) => setID(event.target.value)
    const handleName = (event) => setName(event.target.value)
    const handleStrain = (event) => setStrain(event.target.value)
    const handleDate = (event) => setDate(event.target.value)
    const handleTent = (event) => setTent(event.target.value)

    return (
        <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center">
                <VuiTypography variant="lg" color="white">
                    Agregar Planta
                </VuiTypography>
            </VuiBox>
            <VuiBox
                component="form"
                role="form"
                borderRadius="inherit"
                p="30px 15px"
            >
                <VuiBox
                    display="flex"
                    flexDirection={{ xs: 'column', md: 'row' }}
                    overflow="auto"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="15px"

                >
                    <VuiBox mb={2} width="100%">
                        <VuiBox mb={1} ml={0.5}>
                            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                                ID
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            minWidth="100%"
                            borderRadius={borders.borderRadius.lg}
                            padding="1px"
                            backgroundimage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                id="idInput"
                                onChange={handleId}
                                type="number"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mb={2} width="100%">
                        <VuiBox mb={1} ml={0.5}>
                            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                                Nombre
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            minWidth="100%"
                            borderRadius={borders.borderRadius.lg}
                            padding="1px"
                            backgroundimage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                id="nameInput"
                                onChange={handleName}
                                type="text"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mb={2} width="100%">
                        <VuiBox mb={1} ml={0.5}>
                            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                                Raza
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            minWidth="100%"
                            borderRadius={borders.borderRadius.lg}
                            padding="1px"
                            backgroundimage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                id="strainInput"
                                onChange={handleStrain}
                                type="text"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mb={2} width="100%">
                        <VuiBox mb={1} ml={0.5}>
                            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                                Fecha de plantado
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            minWidth="100%"
                            borderRadius={borders.borderRadius.lg}
                            padding="1px"
                            backgroundimage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                id="dateInput"
                                onChange={handleDate}
                                type="date"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mb={2} width="100%">
                        <VuiBox mb={1} ml={0.5}>
                            <VuiTypography component="label" variant="button" color="white" fontWeight="medium">
                                Cultivo
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox
                            minWidth="100%"
                            borderRadius={borders.borderRadius.lg}
                            padding="1px"
                            backgroundimage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                id="tentInput"
                                onChange={handleTent}
                                type="number"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mt={4} mb={1} width="70%">
                        <VuiButton onClick={() => sendData({
                            id: _id,
                            name: _name,
                            strain: _strain,
                            plantedDate: _planted,
                            tent: _tent
                        })} color="info" fullWidth>
                            Agregar
                        </VuiButton>
                    </VuiBox>
                </VuiBox>
            </VuiBox>
        </Card>
    );
}

export default PlantsForm;
