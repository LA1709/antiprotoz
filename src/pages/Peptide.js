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
            {cols.map(key => <p key={key}>
                <span className="parameter">{
                    key === "Weight" ?
                        colNames[key] + ` (without modification)`
                        : colNames[key]
                }</span>
                <span className="value">
                    {data[0]?.[key] ?
                        key === "PubmedID" ? <a
                            href={`https://pubmed.ncbi.nlm.nih.gov/${data[0][key]}`}
                            target="_blank"
                            rel="noreferrer"
                        >{data[0][key]}</a>
                            : key === "doi" ? <a
                                href={`https://doi.org/${data[0][key]}`}
                                target="_blank"
                                rel="noreferrer"
                            >{data[0][key]}</a>
                                : data[0][key] : "-"
                    }
                </span>
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
            <div className="description-margin" />
            <div className="description-section">
                {Object.entries(peptideInfo).map(item =>
                    <div className="description-card" key={item[0]}>
                        <span className="description-heading">{item[0]}</span>
                        {getDescription(item[1])}
                    </div>
                )}
            </div>
        </div>
        }
    </div>
}

export default Peptide;