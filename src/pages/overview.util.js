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
            spacing: 4,
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
                    text: 'No. of Peptides per target organism'
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
                    text: 'Distribution of the peptides on the basis of peptide families'
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

    const { NTerminal, CTerminal, Modification } = chartData?.modifications ?? {};
    const chart6 = {
        type: 'doughnut',
        data: NTerminal?.length ? (() => {
            const t = NTerminal.reduce((prev, curr) => prev + curr.COUNT, 0);
            return {
                labels: NTerminal.map(row => row.NTerminal),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: NTerminal.map(val => (val.COUNT / t) * 100),
                    }
                ]
            }
        })() : null,
        options: {
            responsive: true,
            spacing: 3,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'N-Terminal Modification'
                }
            },
        },
    };
    const chart7 = {
        type: 'doughnut',
        data: CTerminal ? (() => {
            const t = CTerminal.reduce((prev, curr) => prev + curr.COUNT, 0);
            return {
                labels: CTerminal.map(row => row.CTerminal),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: CTerminal.map(val => (val.COUNT / t) * 100),
                    }
                ]
            }
        })() : null,
        options: {
            responsive: true,
            spacing: 3,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'C-Terminal Modification'
                }
            },
        },
    };
    const chart8 = {
        type: 'doughnut',
        data: Modification ? (() => {
            const t = Modification.reduce((prev, curr) => prev + curr.COUNT, 0);
            return {
                labels: Modification.map(row => row.Modification),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: Modification.map(val => (val.COUNT / t) * 100),
                    }
                ]
            }
        })() : null,
        options: {
            responsive: true,
            spacing: 3,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Sequence Modification'
                }
            },
        },
    };

    const t9 = chartData?.chirality?.reduce((prev, curr) => prev + curr['COUNT'], 0);
    const chart9 = {
        type: 'doughnut',
        data: chartData?.chirality ?
            {
                labels: chartData.chirality.map(row => row.Chirality),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: chartData.chirality.map(row => (row['COUNT'] / t9) * 100),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            spacing: 3,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'Chirality'
                }
            }
        },
    };

    const t10 = chartData?.encoding?.reduce((prev, curr) => prev + curr['COUNT'], 0);
    const chart10 = {
        type: 'doughnut',
        data: chartData?.encoding ?
            {
                labels: chartData.encoding.map(row => row.Encoding),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: chartData.encoding.map(row => (row['COUNT'] / t10) * 100),
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
                    text: 'Linear / Cyclic'
                }
            }
        },
    };

    const t11 = chartData?.origin?.reduce((prev, curr) => prev + curr['COUNT'], 0);
    const chart11 = {
        type: 'doughnut',
        data: chartData?.origin ?
            {
                labels: chartData.origin.map(row => row.Source),
                datasets: [
                    {
                        label: "Peptides (%)",
                        data: chartData.origin.map(row => (row['COUNT'] / t11) * 100),
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
                    text: 'Origin'
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
        chart6,
        chart7,
        chart8,
        chart9,
        chart10,
        chart11,
    }
} 