

// @mui material components
import Card from "@mui/material/Card";
import Table from "examples/Tables/Table";

/* eslint-disable react/prop-types */
// @mui material components
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import { useState, useEffect } from 'react';

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

// Vision UI Dashboard React components
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import GradientBorder from "examples/GradientBorder";

// Vision UI Dashboard assets
import radialGradient from "assets/theme/functions/radialGradient";
import rgba from "assets/theme/functions/rgba";
import palette from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgSignIn from "assets/images/signUpImage.png";
import { BrowserView } from 'react-device-detect';

const handleClick = (id) => {
    const [rows, setData] = useState([]);
    useEffect(() => {
        fetch('http://18.231.172.73/plant')
            .then((res) => res.json())
            .then((data) => {
                let _rows = []

                data.forEach((plant) => _rows.push(getPlant(plant)))

                setData(_rows)
            }).catch(() => {
                setData([])
            });
    }, []);
};

function PlantsForm() {
    const [rememberMe, setRememberMe] = useState(true);

    const handleSetRememberMe = () => setRememberMe(!rememberMe);

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
                            backgroundImage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
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
                            backgroundImage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
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
                            backgroundImage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
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
                            backgroundImage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
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
                            backgroundImage={radialGradient(
                                palette.gradients.borderLight.main,
                                palette.gradients.borderLight.state,
                                palette.gradients.borderLight.angle
                            )}
                        >
                            <VuiInput
                                type="number"
                                sx={({ typography: { size } }) => ({
                                    fontSize: size.sm,
                                })}
                            />
                        </VuiBox>
                    </VuiBox>
                    <VuiBox mt={4} mb={1} width="70%">
                        <VuiButton color="info" fullWidth>
                            Agregar
                        </VuiButton>
                    </VuiBox>
                </VuiBox>
            </VuiBox>
        </Card>
    );
}

export default PlantsForm;
