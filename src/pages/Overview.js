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
    const chart9Ref = useRef(null);
    const chart10Ref = useRef(null);

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
        chart9,
        chart10,
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
                        Protozoan organisms can be either parasitic or free living. The pie chart illustrates the number of peptides targeting parasitic and free-living organisms.
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
                    The bar graph represents the number of peptides against different diseases caused by protozoans species. The others category include other rare protozoan diseases such as Besnoitiosis, Acanthamoeba keratitis, Babesiosis, Blastocystis, Coccidiosis, Intestinal amoebiasis, Primary Amebic Meningoencephalitis, Neosporosis, and Scuticociliatosis.
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
                    The chart on the left represents the source of antiprotozoal peptides. The source of origin was either Natural (obtained from parts of different organisms) , Derived from nature protein (peptides that are fragments of original natural peptide), or Synthetic.
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
        <section>
            <div className='chart'>
                {chart9.data ? <Chart
                    ref={chart9Ref}
                    {...chart9}
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
                    The chart on the left represents the chirality of the antiprotozoal peptides.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart9.options.plugins.title.text}.png`;
                    link.href = chart9Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section>
            <div className='chart'>
                {chart10.data ? <Chart
                    ref={chart10Ref}
                    {...chart10}
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
                    The chart on the left represents the structure of the antiprotozoal peptides.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart10.options.plugins.title.text}.png`;
                    link.href = chart10Ref.current.toBase64Image();
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
            <div className='desc row'>
                <span>
                    The above graph depicts the number of peptides studied targeting the protozoans causing diseases.
                </span>
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
            <div className='desc row'>
                <span>The above Line graph shows the number of antiprotozoal peptides published in the time period of the last four decades (1982-2022).</span>
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
            <div className='desc row'>
                <span>
                    Each bar in the graph shows the number of antiprotozoal peptides in the database that belong to a particular peptide family.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart5.options.plugins.title.text}.png`;
                    link.href = chart5Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section>
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
            <div className='desc'>
                <span>
                    The chart represents the modifications at the C-terminal modification. The most common C-terminal modification is carboxamidation. The other different types of modifications include the addition of Morpholine urea, Butyloxycarbonyl, Methoxy group, aldehyde group, Phenylalaninamide, Methoxypyrrolinone, lactic acid, etc.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart7.options.plugins.title.text}.png`;
                    link.href = chart7Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section>
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
            <div className='desc'>
                <span>
                    The chart represents the modifications at the N-terminal modification. The most common N-terminal modification is Acetylation. The other different types of modifications include the addition of Fluoromethanide, heptanoyl, lauroyl, Glycyl, Butyryl, Benzoyl, etc.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart6.options.plugins.title.text}.png`;
                    link.href = chart6Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
        <section>
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
            <div className='desc'>
                <span>
                    The chart represents the modifications In the sequence of amino acids in a peptide or the addition of non-protein amino acids. Ornithine is the most commonly added nonprotein amino acid and Trimethylation of lysine is the most common amino acid modification. The other different types of modifications include the addition of Homophenylalanine, D-allo-threonine, Anthryl-alanine, Aeo= 2-amino-9,10-epoxy-8-oxodecanoic acid, Pyroglutamic acid, etc.
                </span>
                <button onClick={() => {
                    const link = document.createElement('a');
                    link.download = `${chart8.options.plugins.title.text}.png`;
                    link.href = chart8Ref.current.toBase64Image();
                    link.click();
                    link.remove();
                }}>Download</button>
            </div>
        </section>
    </div >
}

export default Overview;