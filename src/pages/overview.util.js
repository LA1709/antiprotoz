export const getChartsFromData = (chartData) => {

    const t0 = chartData?.types?.reduce((prev, curr) => prev + curr['COUNT'], 0);
    const chart0 = {
        type: 'doughnut',
        data: chartData?.types ?
            {
                labels: chartData.types.map(row => row.Type),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: chartData.types.map(row => (row['COUNT'] / t0) * 100),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            spacing: 10,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Types of Target Organisms'
                }
            }
        },
    };

    const chart1 = {
        type: 'bar',
        data: chartData?.diseases ?
            {
                labels: chartData.diseases.map(row => row.Disease),
                datasets: [
                    {
                        label: 'No. of peptides',
                        data: chartData.diseases.map(row => row['COUNT']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            events: [],
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Peptides targeting the deseases'
                }
            },
            animation: {

                onComplete: function () {
                    var chartInstance = this;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.textBaseline = 'bottom';

                    // Loop through each data in the datasets

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar.x, bar.y - 5);

                        });
                    });
                }
            }
        },
    };

    const t2 = chartData?.sources?.reduce((prev, curr) => prev + curr['COUNT'], 0);
    const chart2 = {
        type: 'doughnut',
        data: chartData?.sources ?
            {
                labels: chartData.sources.map(row => row.NatureType),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: chartData.sources.map(row => (row['COUNT'] / t2) * 100),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            spacing: 10,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Source of the peptides'
                }
            }
        },
    };

    const chart3 = {
        type: 'bar',
        data: chartData?.peptides ?
            {
                labels: chartData.peptides.map(row => row.Target),
                datasets: [
                    {
                        label: 'No. of peptides',
                        data: chartData.peptides.map(row => row['COUNT']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            events: [],
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'No. of Peptides per target organisms'
                }
            },
            animation: {

                onComplete: function () {
                    var chartInstance = this;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.textBaseline = 'bottom';

                    // Loop through each data in the datasets

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar.x, bar.y - 5);

                        });
                    });
                }
            }
        },
    };

    const chart4 = {
        type: 'line',
        data: chartData?.years ?
            {
                labels: chartData.years.map(row => row.Year),
                datasets: [
                    {
                        label: 'No. of Peptides',
                        data: chartData.years.map(row => row['COUNT']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Peptides mapped against the year'
                }
            },
        },
    };

    const chart5 = {
        type: 'bar',
        data: chartData?.families ?
            {
                labels: chartData.families.map(row => row.Family),
                datasets: [
                    {
                        label: 'No. of peptides',
                        data: chartData.families.map(row => row['COUNT']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            events: [],
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'The families of Target Organisms'
                }
            },
            animation: {

                onComplete: function () {
                    var chartInstance = this;
                    var ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.fillStyle = "rgba(0, 0, 0, 1)";
                    ctx.textBaseline = 'bottom';

                    // Loop through each data in the datasets

                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar.x, bar.y - 5);

                        });
                    });
                }
            }
        },
    };

    return {
        chart0,
        chart1,
        chart2,
        chart3,
        chart4,
        chart5,
    }
} 