import React from 'react';
import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

const soilColors = ["#ffb370", "#eb2f6d", "#4eedbb", "#2CD9FF", "#b042e3", "#0075FF"]

function SoilChart() {
    const [soil, setData] = useState([]);
    const [times, setTimes] = useState([]);
    useEffect(() => {
        fetch('https://growino.app/api/plants')
            .then((res) => res.json())
            .then((plantData) => {
                fetch('https://growino.app/api/sensor?tent=1')
                    .then((res) => res.json())
                    .then((data) => {
                        const _soil = []
                        const _soilData = {}
                        const _times = []
                        data.reverse().forEach((reading) => {
                            if (reading.soil.length > 1) {
                                const date = new Date(reading.createdAt)
                                const time = date.getHours() + ":" + date.getMinutes()
                                _times.push(time)
                                reading.soil.forEach((plant) => {
                                    if (typeof _soilData[plant.id] !== "undefined") {
                                        _soilData[plant.id].push(plant.soil)
                                    } else {
                                        _soilData[plant.id] = [plant.soil]
                                    }
                                })
                            }
                        })

                        for (const [key, value] of Object.entries(_soilData)) {
                            plantData.forEach((plant) => {
                                if (plant.id == key) {
                                    _soil.push({ name: key + " - " + plant.name, data: value })
                                }
                            })
                        }

                        setTimes(_times)
                        setData(_soil)
                    }).catch((err) => {
                        console.log(err);
                        setTimes([])
                        setData([])
                    });
            })
    }, []);

    const soilChartOptions = {
        chart: {
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "string",
            categories: times,
            labels: {
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: "#c8cfca",
                    fontSize: "10px",
                },
            },
        },
        legend: {
            show: false,
        },
        grid: {
            strokeDashArray: 5,
            borderColor: "#56577A",
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "vertical",
                shadeIntensity: 0,
                gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                inverseColors: true,
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [],
            },
            colors: soilColors,
        },
        colors: soilColors,
    };


    return (<Card>
        <VuiBox sx={{ height: "100%" }}>
            <VuiBox sx={{ height: "310px" }}>
                <ReactApexChart
                    options={soilChartOptions}
                    series={soil}
                    type="area"
                    width="100%"
                    height="100%"
                />
            </VuiBox>
        </VuiBox>
    </Card>)
}

export default SoilChart;
