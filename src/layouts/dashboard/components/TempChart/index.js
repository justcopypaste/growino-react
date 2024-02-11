import React from 'react';
import { Card } from '@mui/material';
import VuiBox from 'components/VuiBox';
import { useState, useEffect } from 'react';
import ReactApexChart from "react-apexcharts";

function TempChart() {
    const [data, setData] = useState([]);
    const [times, setTimes] = useState([]);
    useEffect(() => {
        fetch('http://18.231.107.220/sensor/get?tent=1')
            .then((res) => res.json())
            .then((data) => {
                const _temp = []
                const _hum = []
                const _times = []
                data.reverse().forEach((reading) => {
                    if (reading.temperature && reading.humidity) {
                        const date = new Date(reading.createdAt)
                        const time = date.getHours() + ":" + date.getMinutes()
                        _times.push(time)
                        _temp.push(reading.temperature)
                        _hum.push(reading.humidity)
                    }
                })

                const _data = [{ name: "Temperatura", data: _temp }, { name: "Humedad", data: _hum }]

                setTimes(_times)
                setData(_data)
            }).catch((err) => {
                console.log(err);
                setTimes([])
                setData([])
            });
    }, []);

    const tempColors = ["#eb2f4b", "#0075FF"]
    const options = {
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
            colors: tempColors,
        },
        colors: tempColors,
    };


    return (<Card>
        <VuiBox sx={{ height: "100%" }}>
            <VuiBox sx={{ height: "310px" }}>
                <ReactApexChart
                    options={options}
                    series={data}
                    type="area"
                    width="100%"
                    height="100%"
                />
            </VuiBox>
        </VuiBox>
    </Card>)
}

export default TempChart;
