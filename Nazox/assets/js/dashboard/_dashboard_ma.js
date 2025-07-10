document.addEventListener("DOMContentLoaded", function () {
  if (typeof feather !== "undefined") {
    feather.replace();
  }

  // --- Gráfica 1: Distribución por Tipo de Reporte (Pie/Donut) ---
  var medioAmbienteReportesPieOptions = {
    series: [40, 25, 20, 15], // Porcentajes o números de reportes por tipo
    chart: {
      type: "donut",
      height: 300,
      toolbar: {
        show: true,
        tools: {
          download: true,
        },
        export: {
          csv: { filename: "reportes_medio_ambiente" },
          svg: { filename: "reportes_medio_ambiente" },
          png: { filename: "reportes_medio_ambiente" },
        },
      },
    },
    labels: ["Agua y Drenaje", "Abejas/Plagas", "Ruido", "Otros"], // Ejemplos de tipos de reporte
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
    colors: ["#0d6efd", "#20c997", "#fd7e14", "#6c757d"], // Colores variados
    legend: {
      position: "bottom",
    },
  };
  var medioAmbienteReportesPieChart = new ApexCharts(
    document.querySelector("#medio-ambiente-reportes-pie"),
    medioAmbienteReportesPieOptions
  );
  medioAmbienteReportesPieChart.render();

  // --- Gráfica 2: Distribución por Tipo de Evento (Barras) ---
  var medioAmbienteEventosBarOptions = {
    series: [
      {
        name: "Número de Eventos",
        data: [10, 5, 3, 2], // Datos de ejemplo
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
          csv: { filename: "eventos_medio_ambiente" },
          svg: { filename: "eventos_medio_ambiente" },
          png: { filename: "eventos_medio_ambiente" },
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%"
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Reciclaje Drive-Thru",
        "Taller de Compostaje",
        "Jornada de Limpieza",
        "Conferencia",
      ], // Ejemplos de tipos de evento
      labels: {
        rotate: -45,
        formatter: function (val) {
          const maxLength = 20;
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    yaxis: {
      title: { text: "Número de Eventos" },
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
          return val.toLocaleString() + " eventos";
        },
      },
    },
    colors: ["#3e60d5"], // Un color azul
  };
  var medioAmbienteEventosBarChart = new ApexCharts(
    document.querySelector("#medio-ambiente-eventos-bar"),
    medioAmbienteEventosBarOptions
  );
  medioAmbienteEventosBarChart.render();

  // --- Gráfica 3: Distribución por Tipo de Infracción (Barras) ---
  var medioAmbienteInfraccionesBarOptions = {
    series: [
      {
        name: "Número de Infracciones",
        data: [30, 20, 15, 10], // Datos de ejemplo
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
          csv: { filename: "infracciones_medio_ambiente" },
          svg: { filename: "infracciones_medio_ambiente" },
          png: { filename: "infracciones_medio_ambiente" },
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%"
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Talas y Podas Ilegales",
        "Tirar Residuos en Vía Pública",
        "Quema de Basura",
        "Descargas Ilegales",
      ], // Ejemplos de tipos de infracción
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
      title: { text: "Número de Infracciones" },
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
          return val.toLocaleString() + " infracciones";
        },
      },
    },
    colors: ["#dc3545"], // Un color rojo para infracciones
  };
  var medioAmbienteInfraccionesBarChart = new ApexCharts(
    document.querySelector("#medio-ambiente-infracciones-bar"),
    medioAmbienteInfraccionesBarOptions
  );
  medioAmbienteInfraccionesBarChart.render();
});
