//tab 2
// Sectores pastel
var sectoresOptions = {
    series: [20, 15, 25, 10, 20, 10],
    chart: { height: 250, type: 'pie' },
    labels: ['Alimentos', 'Empacadora', 'Manufactura', 'Comercio', 'Transporte', 'Automotriz'],
    colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00', '#39afd1', '#313a46'],
    legend: { position: 'bottom' }
};
var sectoresChart = new ApexCharts(document.querySelector("#sectores-pastel-chart"), sectoresOptions);
sectoresChart.render();

// Tamaño empresa pastel
var tamanoEmpresaOptions = {
    series: [60, 25, 10, 5],
    chart: { height: 250, type: 'pie' },
    labels: ['Micro', 'Pequeñas', 'Medianas', 'Grandes'],
    colors: ['#6c757d', '#ffbc00', '#727cf5', '#0acf97'],
    legend: { position: 'bottom' }
};
var tamanoEmpresaChart = new ApexCharts(document.querySelector("#tamano-empresa-pastel-chart"), tamanoEmpresaOptions);
tamanoEmpresaChart.render();

// Empleo formal/informal
var empleoFormalOptions = {
    series: [70, 30],
    chart: { height: 250, type: 'pie' },
    labels: ['Formal', 'Informal'],
    colors: ['#39afd1', '#fa5c7c'],
    legend: { position: 'bottom' }
};
var empleoFormalChart = new ApexCharts(document.querySelector("#empleo-formal-pastel-chart"), empleoFormalOptions);
empleoFormalChart.render();

// Empleo por género
var empleoGeneroOptions = {
    series: [55, 45],
    chart: { height: 250, type: 'pie' },
    labels: ['Hombres', 'Mujeres'],
    colors: ['#313a46', '#e3eaef'],
    legend: { position: 'bottom' }
};
var empleoGeneroChart = new ApexCharts(document.querySelector("#empleo-genero-pastel-chart"), empleoGeneroOptions);
empleoGeneroChart.render();

// Empleo por sector (barras)
var empleoSectorOptions = {
    series: [{ name: 'Nuevos empleos', data: [120, 80, 60, 40, 30, 20] }],
    chart: { type: 'bar', height: 250 },
    xaxis: { categories: ['Alimentos', 'Empacadora', 'Manufactura', 'Comercio', 'Transporte', 'Automotriz'] },
    colors: ['#727cf5']
};
var empleoSectorChart = new ApexCharts(document.querySelector("#empleo-sector-bar-chart"), empleoSectorOptions);
empleoSectorChart.render();

// Salud (barras)
var saludOptions = {
    series: [{ name: 'Afiliados', data: [5000, 3000, 2000] }],
    chart: { type: 'bar', height: 250 },
    xaxis: { categories: ['IMSS', 'ISSSTE', 'Privado'] },
    colors: ['#0acf97']
};
var saludChart = new ApexCharts(document.querySelector("#salud-bar-chart"), saludOptions);
saludChart.render();

// Bolsa de empleo (barras)
var bolsaEmpleoOptions = {
    series: [{ name: 'Vacantes', data: [200, 150, 100] }],
    chart: { type: 'bar', height: 250 },
    xaxis: { categories: ['Eventos', 'Digital', 'Empresas'] },
    colors: ['#fa5c7c']
};
var bolsaEmpleoChart = new ApexCharts(document.querySelector("#bolsa-empleo-bar-chart"), bolsaEmpleoOptions);
bolsaEmpleoChart.render();

// Capacitaciones y emprendimiento (barras)
var capacitacionOptions = {
    series: [{ name: 'Personas', data: [80, 60, 40] }],
    chart: { type: 'bar', height: 250 },
    xaxis: { categories: ['Capacitados', 'Emprendedores', 'Incubadoras'] },
    colors: ['#ffbc00']
};
var capacitacionChart = new ApexCharts(document.querySelector("#capacitacion-bar-chart"), capacitacionOptions);
capacitacionChart.render();