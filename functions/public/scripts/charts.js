let temp = [],
  hum = [],
  power = [],
  soil = [];

document.addEventListener("DOMContentLoaded", () => {
  const powerChart = document.getElementById("power-chart");
  new Chart(powerChart, {
    type: "bar",
    data: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [
        {
          label: "Consumo",
          data: [420, 425, 419, 437, 420, 415],
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 600,
        },
      },
    },
  });

  const tempChart = document.getElementById("temp-chart");
  new Chart(tempChart, {
    type: "line",
    data: {
      labels: ["22:00", "22:30", "23:00", "23:30", "00:00", "00:30"],
      datasets: [
        {
          label: "Humedad",
          data: [52, 43, 54, 56, 42, 48],
          borderWidth: 2,
        },
        {
          label: "Temperatura",
          data: [24, 23, 25, 26, 28, 25],
          borderWidth: 2,
        },
      ],
    },
    options: {
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
    },
  });

  // const lightDonut = document.getElementById("light-donut");
  // new Chart(lightDonut, {
  //   type: "doughnut",
  //   data: {
  //     labels: {
  //       display: false,
  //     },
  //     datasets: [
  //       {
  //         label: "Luz",
  //         data: [30, 60],
  //         backgroundColor: ["#4f4f4f", "#202020"],
  //         hoverBackgroundColor: ["#FF6384", "#202020"],
  //       },
  //     ],
  //   },
  //   options: {
  //     borderWidth: 0,
  //     cutout: cutout,
  //   },
  // });

  getSensorData();
});

function getSensorData() {
  fetch("http://54.232.146.12/sensor/get?tent=1", {
    headers: {
      "User-Agent": "PostmanRuntime/7.29.2",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {

      for (const reading of data) {
        if (reading.temperature) {
          temp.push(reading.temperature);
        }
        if (reading.humidity) {
          hum.push(reading.humidity);
        }
        if (reading.power) {
          power.push(reading.power);
        }
        if (reading.soil) {
          soil.push(reading.soil);
        }
      }
    
      console.log(soil);

      generateCharts()
    })
    .catch((err) => {
      console.error(err);
    });
}

function generateCharts() {
  const donutOptions = {
    borderWidth: 0,
    cutout: 0,
  };

  // TEMPERATURE
  const tempData = {
    labels: {
      display: false,
    },
    datasets: [
      {
        label: "Temperatura",
        data: [temp[0], 40 - temp[0]],
        backgroundColor: ["#FF6384", "#202020"],
        hoverBackgroundColor: ["#FF6384", "#202020"],
      },
    ],
  };

  const tempDonut = document.getElementById("temp-donut");
  createChart(tempDonut, tempData, "doughnut", donutOptions, "⁰", "Temperatura");
  // 

  // HUMIDITY
  const humData = {
    labels: {
      display: false,
    },
    datasets: [
      {
        label: "Humedad",
        data: [hum[0], 100 - hum[0]],
        backgroundColor: ["#36A2EB", "#202020"],
        hoverBackgroundColor: ["#36A2EB", "#202020"],
      },
    ],
  };

  const humDonut = document.getElementById("hum-donut");
  createChart(humDonut, humData, "doughnut", donutOptions, "%", "Humedad");
  // 

  // POWER
  const powerData = {
    labels: {
      display: false,
    },
    datasets: [
      {
        label: "Consumo",
        data: [power[0], 600 - power[0]],
        backgroundColor: ["#FFCE56", "#202020"],
        hoverBackgroundColor: ["#FFCE56", "#202020"],
      },
    ],
  };

  const powerDonut = document.getElementById("power-donut");
  createChart(powerDonut, powerData, "doughnut", donutOptions, "w", "Consumo");
  // 

  // SOIL
  var soilDataset = []
  for (const s of soil) {
    soilDataset.push({
      label: "White Widow",
      data: [76, 54, 43, 81, 56, 39],
      borderWidth: 2,
    })
  }
  const soilData = {
    labels: ["22:00", "22:30", "23:00", "23:30", "00:00", "00:30"],
    datasets: [
      {
        label: "White Widow",
        data: [76, 54, 43, 81, 56, 39],
        borderWidth: 2,
      },
      {
        label: "Cream Caramel",
        data: [54, 43, 76, 56, 42, 81],
        borderWidth: 2,
      },
      {
        label: "Amnesia",
        data: [32, 83, 60, 41, 79, 62],
        borderWidth: 2,
      },
    ],
  }

  const soilChart = document.getElementById("soil-chart");
  new Chart(soilChart, {
    type: "line",
    data: soilData,
    options: {
      scales: {
        y: {
          min: 0,
          max: 100,
        },
      },
    },
  });
  // 

}

function createChart(view, data, type, options, unit, title) {
  view.parentElement.getElementsByClassName("donut-value")[0].innerHTML = parseInt(data.datasets[0].data[0]) + unit;
  view.parentElement.parentElement.getElementsByClassName("donut-title")[0].innerHTML = title
  new Chart(view, {
    type: type,
    data: data,
    options: options,
  });
}
