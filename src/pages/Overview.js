import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import Menu from '../components/Menu';
import { fetchCharts } from '../sql/fetchCharts';
import './overview.scss';

const Overview = () => {

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        fetchCharts(setChartData);
    }, [])

    const chart1 = {
        type: 'polarArea',
        data: chartData?.sources ?
            {
                labels: chartData.sources.map(row => row.NatureType),
                datasets: [
                    {
                        label: 'No. of Peptides',
                        data: chartData.sources.map(row => row['COUNT(*)']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            scales: {
                r: {
                    pointLabels: {
                        display: true,
                        centerPointLabels: true,
                        font: {
                            size: 18
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Source of the peptides'
                }
            }
        },
    };

    const chart2 = {
        type: 'doughnut',
        data: chartData?.diseases ?
            {
                labels: chartData.diseases.map(row => row.Disease),
                datasets: [
                    {
                        label: 'No. of target organisms',
                        data: chartData.diseases.map(row => row['COUNT(*)']),
                    }
                ]
            } : null,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Disease caused by Target Organism'
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
                        label: 'No. of target organisms',
                        data: chartData.peptides.map(row => row['COUNT(*)']),
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
    }

    return <div className="overview-wrapper">
        < Menu />
        <div className="top-container">
            <div className='chart-container'>
                {chart1.data ? <Chart
                    {...chart1}
                /> : 'Loading...'}
            </div>
            <div className='chart-desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
            </div>
        </div>
        <div className="top-container">
            <div className='chart-desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
            </div>
            <div className='chart-container'>
                {chart2.data ? <Chart
                    {...chart2}
                /> : 'Loading...'}
            </div>
        </div>
        <div className='chart-desc' style={{ marginTop: '4rem' }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
        </div>
        <div className='chart-container'>
            {chart3.data ? <Chart
                {...chart3}
            /> : 'Loading...'}
        </div>
        <br />
    </div >
}

export default Overview;