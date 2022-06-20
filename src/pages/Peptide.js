import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPeptide } from '../sql/fetchPeptide';
import Menu from '../components/Menu';
import { colNames, peptideInfo } from '../sql/sql.util';
import NoData from '../assets/no-data.json';
import './peptide.scss';


const Peptide = () => {
    const { id } = useParams();
    const [data, setData] = useState(undefined);

    const getDescription = cols =>
        <div className="description">
            {cols.map(key => <p>
                <span>{colNames[key]}</span>
                <span>{data[0]?.[key] ?? "-"}</span>
            </p>)}
        </div>

    useEffect(() => {
        setData(undefined);
        fetchPeptide(id, setData);
    }, [id])

    return <div className="peptide-wrapper">
        <Menu />
        {data === undefined ? <div className="animation">
            <div className="loader" />
        </div> : !data.length ? <div className="animation">
            <lottie-player
                src={JSON.stringify(NoData)}
                background="transparent"
                speed="1"
                loop
                autoplay
            /></div> : <div className="container">
            <div className="peptide-section">
                <span>Name</span>
                <span>{data[0].Name}</span>
                <span>Sequence</span>
                <span>{data[0].Sequence}</span>
            </div>
            <div className="description-section">
                <div className="description-card">
                    <span className="description-heading">Peptide Description</span>
                    {getDescription(peptideInfo["Peptide Description"])}
                </div>
                <div className="description-card">
                    <span className="description-heading">Physiochemical Properties</span>
                    {getDescription(peptideInfo["Physiochemical Properties"])}
                </div>
            </div>
            <div className="description-section">
                <div className="description-card">
                    <span className="description-heading">Antiprotozoal Activity</span>
                    {getDescription(peptideInfo["Antiprotozoal Activity"])}
                </div>
                <div className="description-card">
                    <span className="description-heading">Literature Reference</span>
                    {getDescription(peptideInfo["Literature Reference"])}
                </div>
            </div>
        </div>
        }
    </div>
}

export default Peptide;