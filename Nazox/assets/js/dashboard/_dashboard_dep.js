document.addEventListener("DOMContentLoaded", function () {
  if (typeof feather !== "undefined") {
    feather.replace();
  }

  // --- Gráfica 1: Distribución de Apoyo Económico por Deporte (Radar Chart) ---
  var deporteApoyoRadarOptions = {
    series: [
      {
        name: "Monto de Apoyo",
        data: [1000000, 700000, 400000, 250000, 150000], // Montos de ejemplo para cada deporte
      },
    ],
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "apoyo_deporte_radar" },
          svg: { filename: "apoyo_deporte_radar" },
          png: { filename: "apoyo_deporte_radar" },
        },
      },
    },
    xaxis: {
      categories: ["Fútbol", "Baloncesto", "Natación", "Boxeo", "Atletismo"], // Nombres de los deportes
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return "$" + val.toLocaleString(); // Formato de moneda
        },
      },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColors: "#e8e8e8",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
    colors: ["#0d6efd"], // Color de la serie
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.4,
    },
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: ["#0d6efd"],
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val.toLocaleString();
        },
      },
    },
  };
  var deporteApoyoRadarChart = new ApexCharts(
    document.querySelector("#deporte-apoyo-radar"),
    deporteApoyoRadarOptions
  );
  deporteApoyoRadarChart.render();

  // --- Gráfica 2: Distribución de Eventos por Deporte (Horizontal Bar Chart) ---
  var deporteEventosBarHorizontalOptions = {
    series: [
      {
        name: "Número de Eventos",
        data: [20, 15, 12, 10, 8], // Número de eventos por deporte
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "eventos_deporte_bar" },
          svg: { filename: "eventos_deporte_bar" },
          png: { filename: "eventos_deporte_bar" },
        },
      },
    },
    colors: ["#20c997"], // Color para las barras
    plotOptions: {
      bar: {
        horizontal: true, // Barras horizontales
        dataLabels: {
          position: "top", // Mostrar valor al final de la barra
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toLocaleString();
      },
      offsetX: 20, // Ajusta la posición para que no se superponga
      style: {
        fontSize: "12px",
        colors: ["#333"],
      },
    },
    xaxis: {
      categories: ["Fútbol", "Baloncesto", "Natación", "Boxeo", "Atletismo"], // Nombres de los deportes
      title: {
        text: "Número de Eventos",
      },
      labels: {
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
    },
    yaxis: {
      reversed: false, // Puedes invertir el orden si quieres el deporte con más eventos arriba
      labels: {
        formatter: function (val) {
          const maxLength = 20; // Limitar longitud para evitar desbordamiento
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: true, // Mostrar líneas de cuadrícula para mejor lectura
        },
      },
    },
    tooltip: {
      x: {
        show: true,
      },
      y: {
        formatter: function (val) {
          return val.toLocaleString() + " eventos";
        },
      },
    },
  };
  var deporteEventosBarHorizontalChart = new ApexCharts(
    document.querySelector("#deporte-eventos-bar-horizontal"),
    deporteEventosBarHorizontalOptions
  );
  deporteEventosBarHorizontalChart.render();
});
