
//tab4
// Gráfica: Distribución por Tipo de Obra (Pastel)
var obraTipoOptions = {
    series: [35, 30, 20, 15], // Datos de ejemplo para Pluvial, Vialidad, Edificios Públicos, Otros
    chart: { height: 250, type: 'pie' },
    labels: ['Pluvial', 'Vialidad', 'Edificios Públicos', 'Otros'],
    colors: ['#0acf97', '#727cf5', '#ffbc00', '#fa5c7c'], // Colores distintos
    legend: { position: 'bottom' },
    dataLabels: { enabled: true, formatter: function (val) { return val.toFixed(1) + '%' } }
};
var obraTipoChart = new ApexCharts(document.querySelector("#obra-tipo-pastel-chart"), obraTipoOptions);
obraTipoChart.render();

// Gráfica: Distribución por Sector (Pastel)
var obraSectorOptions = {
    series: [25, 20, 15, 10, 30], // Datos de ejemplo para Educación, Salud, Deporte, Seguridad, Otros
    chart: { height: 250, type: 'pie' },
    labels: ['Educación', 'Salud', 'Deporte', 'Seguridad', 'Cultura'],
    colors: ['#39afd1', '#6c757d', '#313a46', '#e3eaef', '#727cf5'], // Colores distintos
    legend: { position: 'bottom' },
    dataLabels: { enabled: true, formatter: function (val) { return val.toFixed(1) + '%' } }
};
var obraSectorChart = new ApexCharts(document.querySelector("#obra-sector-pastel-chart"), obraSectorOptions);
obraSectorChart.render();

// Gráfica: Detalle de Obras (Barras)
var obraDetalleOptions = {
    series: [{
        name: 'Inversión (MXN)',
        data: [15000000, 12000000, 9000000, 7000000, 5000000] // Montos de ejemplo
    }],
    chart: { type: 'bar', height: 300 },
    xaxis: {
        categories: ['Casa Rosa', 'Unidad de Rehabilitación', 'Parque Central', 'Rehabilitación Vial Av. Principal', 'Escuela Modelo'],
        labels: {
            rotate: -45, // Mantenemos la rotación si es necesaria
            // Añadimos el formatter para truncar y añadir puntos suspensivos
            formatter: function (val) {
                const maxLength = 20; // Define el número máximo de caracteres antes de truncar
                if (val && val.length > maxLength) {
                    return val.substring(0, maxLength) + '...';
                }
                return val;
            }
        }
    },
    yaxis: {
        title: { text: 'Inversión' },
        labels: { formatter: function (val) { return '$' + (val / 1000000).toFixed(0) + ' M'; } } // Formatear a millones
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%'
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0acf97'] // Color para las barras
};
var obraDetalleChart = new ApexCharts(document.querySelector("#obra-detalle-bar-chart"), obraDetalleOptions);
obraDetalleChart.render();