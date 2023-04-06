import { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Composition from '../components/Composition';
import { getPeptides } from '../sql/lookForPeptides';
import { aa, pp } from '../sql/sql.util'
import LeftIcon from '../assets/chevron-left.svg';
import './tools.scss';
import { useParams } from 'react-router-dom';

const tabs = [
    'AA Composition',
    'PP Composition'
];

const Tools = () => {
    const [showInput, setShowInput] = useState(true);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState(null);
    const [tab, setTab] = useState(0);

    const { tool } = useParams();

    const getData = d => {
        setData(undefined);
        setColumns(undefined);
        getPeptides(d, tab, setData, setColumns);
        setShowInput(false);
    }

    useEffect(() => {
        setTab(tool === "pp" ? 1 : 0);
    }, [tool])

    return <div className="tools-wrapper">
        <Menu />
        {!showInput && <button
            onClick={() => setShowInput(true)}
            className="back-button"
        >
            <img src={LeftIcon} alt="" />Back
        </button>}
        {showInput ? <div className="tabs-container">
            <div className="tab-pane">
                {tabs.map((tabname, i) =>
                    <div
                        key={tabname}
                        className={`tab-pane-item${tab === i ? ' disabled' : ''}`}
                        onClick={() => setTab(i)}
                    >{tabname}</div>
                )}
            </div>
            <div className="tab-content">
                <div className="heading">
                    Searching peptides based on properties of a peptide
                </div>
                <div className="description">
                    This tool is to facilitate the retrieval of peptides with the required {tab === 0 ? 'amino acid frequencies' : 'physical properties  - aliphatic, aromatic, hydrophobic, polar, positive, or negative charge.'}
                </div>
                {tab === 0 && <Composition
                    title="Amino Acid Composition"
                    parameter={aa}
                    callback={getData}
                />}
                {tab === 1 && <Composition
                    title="Physical Properties Composition"
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