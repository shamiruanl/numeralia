document.addEventListener('DOMContentLoaded', function () {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // --- Gráfica 1: Pirámide de Población Indígena (Barras Horizontales Apiladas - EN PORCENTAJES) ---
    // El eje X ahora representará el porcentaje de la población indígena.
    // El 1.79% es la representación de la población indígena sobre el TOTAL DEL MUNICIPIO,
    // por lo que no es una serie dentro de la pirámide. La pirámide muestra la distribución INTERNA.
    var poblacionIndigenaPiramideOptions = {
        series: [{
            name: 'Hombres',
            // Datos de ejemplo en porcentajes del total de la población indígena
            data: [
                5.0, 6.5, 8.0, 9.5, 7.0, 4.5, 2.5, 1.0 // Porcentajes (ej. 5% de Hombres entre 0-14 del total indígena)
            ]
        }, {
            name: 'Mujeres',
            // Datos de ejemplo en porcentajes del total de la población indígena (negativos)
            data: [
                -4.8, -6.3, -7.8, -9.3, -6.8, -4.3, -2.3, -0.9 // Porcentajes
            ]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                },
                export: {
                    csv: {
                        filename: 'piramide_poblacion_indigena_porcentajes',
                        columnDelimiter: ',',
                        headerCategory: 'Rango de Edad',
                        headerValue: 'Porcentaje Población Indígena',
                        dateFormatter: function (timestamp) {
                            return new Date(timestamp).toDateString()
                        }
                    },
                    svg: {
                        filename: 'piramide_poblacion_indigena_porcentajes',
                    },
                    png: {
                        filename: 'piramide_poblacion_indigena_porcentajes',
                    }
                },
                autoSelected: 'zoom'
            },
            zoom: {
                enabled: false
            }
        },
        colors: ['#0d6efd', '#fd7e14'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            title: {
                text: 'Edad',
                offsetX: -10,
                style: {
                    fontSize: '12px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-title',
                }
            }
        },
        xaxis: {
            categories: ['0-14', '15-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75+'],
            title: {
                text: 'Porcentaje de Población Indígena', // El título del eje X
                offsetY: 10 // Ajustar posición si es necesario
            },
            labels: {
                formatter: function (val) {
                    return Math.abs(val).toFixed(1) + '%'; // Mostrar como porcentaje
                }
            },
            // Asegurarse de que el rango del eje X sea simétrico y adecuado para porcentajes
            min: -10, // Por ejemplo, de -10% a 10%
            max: 10,
            tickAmount: 5 // Ajusta el número de ticks para mayor legibilidad
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return Math.abs(val).toFixed(1) + "% de la población indígena";
                }
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    };
    var poblacionIndigenaPiramideChart = new ApexCharts(document.querySelector("#poblacion-indigena-piramide"), poblacionIndigenaPiramideOptions);
    poblacionIndigenaPiramideChart.render();


    // --- Gráfica 2: Distribución por Lenguas Indígenas (Pie/Donut) ---
    // (Este código no cambia, se mantiene como estaba)
    var lenguasIndigenasPieOptions = {
        series: [45, 20, 15, 10, 10],
        chart: {
            type: 'donut',
            height: 350,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false
                },
                export: {
                    csv: {
                        filename: 'distribucion_lenguas_indigenas',
                        columnDelimiter: ',',
                        headerCategory: 'Lengua Indígena',
                        headerValue: 'Porcentaje',
                        dateFormatter: function (timestamp) {
                            return new Date(timestamp).toDateString()
                        }
                    },
                    svg: {
                        filename: 'distribucion_lenguas_indigenas',
                    },
                    png: {
                        filename: 'distribucion_lenguas_indigenas',
                    }
                },
                autoSelected: 'zoom'
            }
        },
        labels: ['Náhuatl', 'Maya', 'Zapoteco', 'Mixteco', 'Otras'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        colors: ['#0acf97', '#fa5c7c', '#3e60d5', '#fd7e14', '#6c757d'],
        legend: {
            position: 'bottom'
        }
    };
    var lenguasIndigenasPieChart = new ApexCharts(document.querySelector("#lenguas-indigenas-pie"), lenguasIndigenasPieOptions);
    lenguasIndigenasPieChart.render();
});