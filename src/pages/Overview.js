import 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import Menu from '../components/Menu';
import { fetchCharts } from '../sql/fetchCharts';
import Loading from '../assets/loading.json';
import { getChartsFromData } from './overview.util';
import './overview.scss';

const Overview = () => {

    const [chartData, setChartData] = useState(null);
    const chart0Ref = useRef(null);
    const chart1Ref = useRef(null);
    const chart2Ref = useRef(null);
    const chart3Ref = useRef(null);
    const chart4Ref = useRef(null);
    const chart5Ref = useRef(null);
    const chart6Ref = useRef(null);
    const chart7Ref = useRef(null);
    const chart8Ref = useRef(null);

    useEffect(() => {
        fetchCharts(setChartData);
    }, [])

    const {
        chart0,
        chart1,
        chart2,
        chart3,
        chart4,
        chart5,
        chart6,
        chart7,
        chart8,
    } = getChartsFromData(chartData);

    return <div className="overview-wrapper">
        <div className='menu-container'>
            <Menu />
        </div>
        <section className="first-container">
            <div className="heading">
                Data Visualisation
            </div>
            <div className="chart">
                <div className='chart'>
                    {chart0.data ? <Chart
                        ref={chart0Ref}
                        {...chart0}
                    /> : <lottie-player
                        src={JSON.stringify(Loading)}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                    />}
                </div>
                <div className='desc'>
                    <span>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
                    </span>
                    <button onClick={() => {
                        const link = document.createElement('a');
                        link.download = `${chart0.options.plugins.title.text}.png`;
                        link.href = chart0Ref.current.toBase64Image();
                        link.click();
                        link.remove();
                    }}>Download</button>
                </div>
            </div>
        </section>
        <section className="second-container">
            <div className='chart'>
                {chart1.data ? <Chart
                    ref={chart1Ref}
                    {...chart1}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='desc'>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart1.options.plugins.title.text}.png`;
                    link.href = chart1Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section>
            <div className='chart'>
                {chart2.data ? <Chart
                    ref={chart2Ref}
                    {...chart2}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='desc'>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet dolores adipisci ullam nihil doloremque aut laudantium, aliquam illo ut sequi quo accusamus et? Ad soluta ea, eveniet minima dolorum sit.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart2.options.plugins.title.text}.png`;
                    link.href = chart2Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section className="chart-container">
            <div className='chart bigger'>
                {chart3.data ? <Chart
                    ref={chart3Ref}
                    {...chart3}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='desc'>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart3.options.plugins.title.text}.png`;
                    link.href = chart3Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section className="chart-container">
            <div className='chart bigger'>
                {chart4.data ? <Chart
                    ref={chart4Ref}
                    {...chart4}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='desc'>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart4.options.plugins.title.text}.png`;
                    link.href = chart4Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section className="chart-container">
            <div className='chart bigger'>
                {chart5.data ? <Chart
                    ref={chart5Ref}
                    {...chart5}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='desc'>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart5.options.plugins.title.text}.png`;
                    link.href = chart5Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section className="smaller">
            <div className='chart'>
                {chart6.data ? <Chart
                    ref={chart6Ref}
                    {...chart6}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='chart'>
                {chart7.data ? <Chart
                    ref={chart7Ref}
                    {...chart7}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
            <div className='chart'>
                {chart8.data ? <Chart
                    ref={chart8Ref}
                    {...chart8}
                /> : <lottie-player
                    src={JSON.stringify(Loading)}
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                />}
            </div>
        </section>
    </div >
}

export default Overview;