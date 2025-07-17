document.addEventListener("DOMContentLoaded", function () {
  if (typeof feather !== "undefined") {
    feather.replace();
  }

  // --- Grafica 1: Distribución por Tipo de Brigada (Pie/Donut) ---
  var saludBrigadasPieOptions = {
    series: [30, 25, 20, 15, 10], // Porcentajes o números de brigadas por tipo
    chart: {
      type: "donut",
      height: 300,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "brigadas_salud" },
          svg: { filename: "brigadas_salud" },
          png: { filename: "brigadas_salud" },
        },
      },
    },
    labels: [
      "Escobedo Sano",
      "Drive Thru",
      "Vacunación",
      "Centros Médicos",
      "Otros",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: ["#0d6efd", "#20c997", "#fd7e14", "#6c757d", "#e56ee0"],
    legend: {
      position: "bottom",
    },
  };
  var saludBrigadasPieChart = new ApexCharts(
    document.querySelector("#salud-brigadas-pie"),
    saludBrigadasPieOptions
  );
  saludBrigadasPieChart.render();

  // --- Gráfica 2: Distribución por Lugar de Fumigación (Barras) ---
  var saludFumigacionBarOptions = {
    series: [
      {
        name: "Número de Fumigaciones",
        data: [70, 50], // Datos de ejemplo
      },
    ],
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "fumigaciones_salud" },
          svg: { filename: "fumigaciones_salud" },
          png: { filename: "fumigaciones_salud" },
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Planteles Educativos", "Parques"],
      labels: {
        rotate: -45,
        formatter: function (val) {
          const maxLength = 25;
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    yaxis: {
      title: { text: "Número de Fumigaciones" },
      labels: {
        formatter: function (val) {
          return val.toLocaleString();
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toLocaleString() + " fumigaciones";
        },
      },
    },
    colors: ["#3e60d5"],
  };
  var saludFumigacionBarChart = new ApexCharts(
    document.querySelector("#salud-fumigacion-bar"),
    saludFumigacionBarOptions
  );
  saludFumigacionBarChart.render();

  // --- Gráfica 3: Distribución por Tipo de Atención Médica (Pie/Donut) ---
  var saludAtencionesPieOptions = {
    series: [60, 25, 15], // Porcentajes o números de atenciones por tipo
    chart: {
      type: "donut",
      height: 300,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "atenciones_medicas" },
          svg: { filename: "atenciones_medicas" },
          png: { filename: "atenciones_medicas" },
        },
      },
    },
    labels: ["Consultas Médicas", "Psicológicas", "Nutricionales"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: ["#0acf97", "#fa5c7c", "#727cf5"],
    legend: {
      position: "bottom",
    },
  };
  var saludAtencionesPieChart = new ApexCharts(
    document.querySelector("#salud-atenciones-pie"),
    saludAtencionesPieOptions
  );
  saludAtencionesPieChart.render();
});
