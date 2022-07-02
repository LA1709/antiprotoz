import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { browsePeptides } from '../sql/browsePeptides';
import { minmax } from '../sql/sql.util'
import LeftIcon from '../assets/chevron-left.svg';
import './tools.scss';

const Tools = () => {

    const [showInput, setShowInput] = useState(true);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState(null);
    const [selection, setSelection] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setData(undefined);
        setColumns(undefined);
        browsePeptides(e.target.elements, setData, setColumns);
        setShowInput(false);
    }

    const handleChange = e => {
        setSelection({
            ...selection,
            [e.target.name]: e.target.checked
        });
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
            <form id="form" onSubmit={handleSubmit}>
                <h3>Search Parameter</h3>
                <div className="form-group">
                    {Object.keys(minmax).map((val, idx) =>
                        <div className="form-group-item" key={`mm_${idx + 1}`}>
                            <input id={`mm_${idx + 1}`} name={val} type="checkbox" onChange={handleChange} defaultChecked={!!selection[val]} />
                            <label htmlFor={`mm_${idx + 1}`}>{val}</label>
                        </div>
                    )}
                </div>
                <div className="form-range">
                    {Object.entries(selection).filter(item => !!item[1]).map(val =>
                        <div className="form-range-item">
                            <b>{val}:</b>
                            <input type="number" placeholder="min" min={minmax[val[0]].min} max={minmax[val[0]].max} required />
                            to
                            <input type="number" placeholder="max" min={minmax[val[0]].min} max={minmax[val[0]].max} required />
                        </div>
                    )}
                </div>
                <div className="form-group-button">
                    <input id="submit" name="submit" type="submit" value="Search" />
                </div>
            </form> :
            <div className="result">
                <Table data={data} columns={columns} />
            </div>
        }
    </div >
}
export default Tools;