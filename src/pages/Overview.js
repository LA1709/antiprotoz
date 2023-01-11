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

    return <div className="overview-wrapper">
        < Menu />
        <div className="top-container">
            {(chart1.data && chart2.data) ? <>
                <div className='chart-container'>
                    <Chart
                        {...chart1}
                    />
                </div>
                <div className='chart-container'>
                    <Chart
                        {...chart2}
                    />
                </div>
            </> : 'Loading...'
            }
        </div>
    </div >
}
export default Overview;