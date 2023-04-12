import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Composition from '../components/Composition';
import { getPeptides } from '../sql/lookForPeptides';
import { aa, freqAA, freqPP, pp } from '../sql/sql.util'
import LeftIcon from '../assets/chevron-left.svg';
import './tools.scss';
import { useParams } from 'react-router-dom';

const description = {
    aa: 'amino acid composition',
    pp: 'physiochemical properties  - aliphatic, aromatic, hydrophobic, polar, positive, or negative charge.',
    freqAA: 'frequency of amino acids in the peptide',
    freqPP: 'frequency of physiochemical properties in the peptide',
}

const Tools = () => {
    const [showInput, setShowInput] = useState(true);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState(null);

    const { tool } = useParams();

    const getData = d => {
        setData(undefined);
        setColumns(undefined);
        getPeptides(d, tool, setData, setColumns);
        setShowInput(false);
    }

    return <div className="tools-wrapper">
        <Menu />
        {!showInput && <button
            onClick={() => setShowInput(true)}
            className="back-button"
        >
            <img src={LeftIcon} alt="" />Back
        </button>}
        {showInput ?
            <div className="tabs-container">
                <div className="tab-content">
                    <div className="heading">
                        Searching peptides based on properties of a peptide
                    </div>
                    <div className="description">
                        This tool is to facilitate the retrieval of peptides with the required {description[tool] ?? "N/A"}
                    </div>
                    {tool === "aa" && <Composition
                        title="Amino Acid Composition"
                        parameter={aa}
                        callback={getData}
                    />}
                    {tool === "pp" && <Composition
                        title="Physiochemical Properties Composition"
                        parameter={pp}
                        callback={getData}
                    />}
                    {tool === "freqAA" && <Composition
                        title="Amino Acids Frequency"
                        parameter={freqAA}
                        callback={getData}
                    />}
                    {tool === "freqPP" && <Composition
                        title="Physiochemical Properties Frequency"
                        parameter={freqPP}
                        callback={getData}
                    />}
                </div>
            </div> : <div className="result">
                <Table data={data} columns={columns} />
            </div>}
    </div >
}
export default Tools;