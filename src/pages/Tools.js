import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Composition from '../components/Composition';
import { getPeptides } from '../sql/lookForPeptides';
import { aa, pp } from '../sql/sql.util'
import LeftIcon from '../assets/chevron-left.svg';
import './tools.scss';
import { useParams } from 'react-router-dom';

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
                        This tool is to facilitate the retrieval of peptides with the required {tool === "aa" ? 'amino acid composition' : 'physiochemical properties  - aliphatic, aromatic, hydrophobic, polar, positive, or negative charge.'}
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
                </div>
            </div> : <div className="result">
                <Table data={data} columns={columns} />
            </div>}
    </div >
}
export default Tools;