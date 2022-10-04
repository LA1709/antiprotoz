import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Composition from '../components/Composition';
import { getPeptides } from '../sql/lookForPeptides';
import { aa, pp } from '../sql/sql.util'
import LeftIcon from '../assets/chevron-left.svg';
import RightIcon from '../assets/chevron-right.svg';
import './tools.scss';

const tabs = [
    'AA Composition',
    'PP Composition'
];

const Tools = () => {
    const [showInput, setShowInput] = useState(true);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState(null);
    const [tab, setTab] = useState(0);

    const getData = d => {
        setData(undefined);
        setColumns(undefined);
        getPeptides(d, tab, setData, setColumns);
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
        {showInput ? <div className="tabs-container">
            <div className="tab-pane">
                {tabs.map((tabname, i) =>
                    <div
                        key={tabname}
                        className={`tab-pane-item${tab === i ? ' disabled' : ''}`}
                        onClick={() => setTab(i)}
                    >
                        {tabname}
                        <img src={RightIcon} alt="" />
                    </div>
                )}
            </div>
            <div className="tab-content">
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