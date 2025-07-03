// TAB 6
$(document).ready(function () {
  // Gráfico de distribución de ingresos
  var distribucionIngresosOptions = {
    series: [45, 35, 20],
    chart: {
      type: "donut",
      height: 160,
    },
    labels: [
      "Ingresos Propios",
      "Aportaciones Federales",
      "Aportaciones Estatales",
    ],
    colors: ["#727cf5", "#0acf97", "#6c757d"],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return "100%";
              },
            },
          },
        },
      },
    },
  };
  var distribucionIngresosChart = new ApexCharts(
    document.querySelector("#distribucion-ingresos-chart"),
    distribucionIngresosOptions
  );
  distribucionIngresosChart.render();

  // Gráfico de distribución de gastos
  var distribucionGastosOptions = {
    series: [
      {
        data: [65, 35],
      },
    ],
    chart: {
      type: "bar",
      height: 160,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        borderRadius: 4,
        distributed: true,
      },
    },
    colors: ["#727cf5", "#0acf97"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Gasto Corriente", "Gasto de Inversión"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
  };
  var distribucionGastosChart = new ApexCharts(
    document.querySelector("#distribucion-gastos-chart"),
    distribucionGastosOptions
  );
  distribucionGastosChart.render();

  // Gráfico de inversión pública
  var inversionPublicaOptions = {
    series: [
      {
        name: "Inversión",
        data: [28, 22, 25, 15, 10],
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#727cf5"],
    xaxis: {
      categories: ["Seguridad", "Educación", "Obra Pública", "Salud", "Otros"],
    },
    yaxis: {
      title: {
        text: "Millones de pesos",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$" + val + "M";
        },
      },
    },
  };
  var inversionPublicaChart = new ApexCharts(
    document.querySelector("#inversion-publica-chart"),
    inversionPublicaOptions
  );
  inversionPublicaChart.render();

  // Gráfico de deuda y pasivos
  var deudaPasivosOptions = {
    series: [
      {
        name: "Deuda",
        data: [85, 42],
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#fa5c7c"],
    xaxis: {
      categories: ["Deuda Total", "Pasivos"],
      title: {
        text: "Millones de pesos",
      },
    },
    annotations: {
      xaxis: [
        {
          x: 72,
          strokeDashArray: 0,
          borderColor: "#0acf97",
          label: {
            borderColor: "#0acf97",
            style: {
              color: "#fff",
              background: "#0acf97",
            },
            text: "Capacidad de pago 72%",
          },
        },
      ],
    },
  };
  var deudaPasivosChart = new ApexCharts(
    document.querySelector("#deuda-pasivos-chart"),
    deudaPasivosOptions
  );
  deudaPasivosChart.render();
  //TAB 5
  // --- Gráfica 1: Estudiantes Matriculados por Nivel (Barras) ---
  var educacionNivelBarOptions = {
    series: [
      {
        name: "Estudiantes Matriculados",
        data: [12000, 8500, 4500, 2800, 1500], // Datos de ejemplo
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
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
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Primaria",
        "Secundaria",
        "Bachillerato",
        "Licenciatura",
        "Posgrado",
      ],
      labels: {
        rotate: -45,
        formatter: function (val) {
          const maxLength = 15; 
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    yaxis: {
      title: { text: "Número de Estudiantes" },
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
          return val.toLocaleString() + " estudiantes";
        },
      },
    },
    colors: ["#3e60d5"], // Un color azul para la barra
  };
  var educacionNivelBarChart = new ApexCharts(
    document.querySelector("#educacion-nivel-bar"),
    educacionNivelBarOptions
  );
  educacionNivelBarChart.render();

  // --- Gráfica 2: Matrícula Pública vs Privada (Pie) ---
  var educacionNaturalezaPieOptions = {
    series: [70, 30], // 70% Pública, 30% Privada
    chart: {
      type: "donut",
      height: 250,
    },
    labels: ["Pública", "Privada"],
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
    colors: ["#0acf97", "#fa5c7c"],
    dataLabels: {
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex] + "%";
      },
    },
    legend: {
      position: "bottom",
    },
  };
  var educacionNaturalezaPieChart = new ApexCharts(
    document.querySelector("#educacion-naturaleza-pie"),
    educacionNaturalezaPieOptions
  );
  educacionNaturalezaPieChart.render();

  // --- Gráfica 3: Estudiantes por área de Conocimiento (Barras Horizontales) ---
  var educacionAreaBarOptions = {
    series: [
      {
        name: "Estudiantes",
        data: [3500, 2800, 2100, 1800, 1200], // Datos de ejemplo
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    xaxis: {
      categories: [
        "Ciencias Sociales",
        "Ingeniería",
        "Salud",
        "Educación",
        "Arte y Cultura",
      ],
      labels: {
        formatter: function (val) {
          const maxLength = 20;
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    yaxis: {
      title: { text: "Número de Estudiantes" },
    },
    colors: ["#6c757d"],
  };
  var educacionAreaBarChart = new ApexCharts(
    document.querySelector("#educacion-area-bar"),
    educacionAreaBarOptions
  );
  educacionAreaBarChart.render();

  // --- Gráfica 4: Tasa de Diserción Escolar (Histórico - Línea) ---
  var educacionDisercionLineOptions = {
    series: [
      {
        name: "Tasa de Diserción (%)",
        data: [5.2, 4.8, 4.5, 4.0, 3.8], // Datos de ejemplo (últimos 5 años)
      },
    ],
    chart: {
      height: 250,
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      categories: ["2020", "2021", "2022", "2023", "2024"],
      title: { text: "Año" },
    },
    yaxis: {
      title: { text: "Porcentaje de Diserción (%)" },
      min: 0,
      max: 10,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        },
      },
    },
    colors: ["#fd7e14"],
  };
  var educacionDisercionLineChart = new ApexCharts(
    document.querySelector("#educacion-disercion-line"),
    educacionDisercionLineOptions
  );
  educacionDisercionLineChart.render();

  // --- Gráfica 5: Alfabetización por Género y Edad (Barras Apiladas) ---
  var alfabetizacionBarOptions = {
    series: [
      {
        name: "Hombres",
        data: [98.0, 97.5, 96.0], // % alfabetizados
      },
      {
        name: "Mujeres",
        data: [98.8, 98.2, 97.0], // % alfabetizadas
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["15-25 años", "26-50 años", "+50 años"],
      title: { text: "Rango de Edad" },
    },
    yaxis: {
      title: { text: "Tasa de Alfabetización (%)" },
      min: 90,
      max: 100,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      offsetX: -10,
    },
    colors: ["#0dcaf0", "#d63384"],
  };
  var alfabetizacionBarChart = new ApexCharts(
    document.querySelector("#alfabetizacion-bar"),
    alfabetizacionBarOptions
  );
  alfabetizacionBarChart.render();

  // --- Gráfica 6: Graduados por Nivel (Pie) ---
  var graduadosNivelPieOptions = {
    series: [30, 25, 20, 15, 10], // Porcentajes o números de graduados
    chart: {
      type: "donut",
      height: 250,
    },
    labels: [
      "Primaria",
      "Secundaria",
      "Bachillerato",
      "Licenciatura",
      "Posgrado",
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
    colors: ["#20c997", "#6f42c1", "#0d6efd", "#ffc107", "#6c757d"],
    legend: {
      position: "bottom",
    },
  };
  var graduadosNivelPieChart = new ApexCharts(
    document.querySelector("#graduados-nivel-pie"),
    graduadosNivelPieOptions
  );
  graduadosNivelPieChart.render();

  // --- NUEVA GRÁFICA 7: Deserción por Nivel Educativo (Barras) ---
  var desercionNivelBarOptions = {
    series: [
      {
        name: "Tasa de Deserción (%)",
        data: [2.1, 8.1, 11.7, 8.5, 5.0], // Datos de ejemplo (primaria, secundaria, media sup., superior, posgrado)
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
    },
    xaxis: {
      categories: [
        "Primaria",
        "Secundaria",
        "Bachillerato",
        "Licenciatura",
        "Posgrado",
      ],
      labels: {
        rotate: -45,
        formatter: function (val) {
          const maxLength = 15;
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
    },
    yaxis: {
      title: { text: "Porcentaje de Deserción (%)" },
      labels: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val.toFixed(1) + "%";
        },
      },
    },
    colors: ["#dc3545"], // Color rojo para deserción
  };
  var desercionNivelBarChart = new ApexCharts(
    document.querySelector("#desercion-nivel-bar"),
    desercionNivelBarOptions
  );
  desercionNivelBarChart.render();

  // --- NUEVA GRÁFICA 8: Deserción por área de Conocimiento (Barras Horizontales) ---
  var desercionAreaBarOptions = {
    series: [
      {
        name: "Tasa de Deserción (%)",
        data: [7.5, 6.2, 5.8, 8.1, 4.0], // Datos de ejemplo
      },
    ],
    chart: {
      type: "bar",
      height: 250,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
      formatter: function (val) {
        return val + "%";
      },
    },
    xaxis: {
      categories: [
        "Ciencias Sociales",
        "Ingeniería",
        "Salud",
        "Educación",
        "Arte y Cultura",
      ],
      labels: {
        formatter: function (val) {
          const maxLength = 20;
          return val && val.length > maxLength
            ? val.substring(0, maxLength) + "..."
            : val;
        },
      },
      title: { text: "Porcentaje de Deserción (%)" },
    },
    yaxis: {
      title: { text: "Área de Conocimiento" },
    },
    colors: ["#ff6a00"], // Un color naranja más oscuro
  };
  var desercionAreaBarChart = new ApexCharts(
    document.querySelector("#desercion-area-bar"),
    desercionAreaBarOptions
  );
  desercionAreaBarChart.render();
});
