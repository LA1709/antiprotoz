import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { browsePeptides } from '../sql/browsePeptides';
import CheckIcon from '../assets/check-square.svg';
import TrashIcon from '../assets/trash.svg';
import LeftIcon from '../assets/chevron-left.svg';
import './browse.scss';

const Browse = () => {

    const [showInput, setShowInput] = useState(true);
    const [columns, setColumns] = useState(null);
    const [data, setData] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setData(undefined);
        setColumns(undefined);
        browsePeptides(e.target.elements, setData, setColumns);
        setShowInput(false);
    }

    const handleSelectAll = e => {
        e.preventDefault();
        const elements = document.getElementById("form").elements;
        for (let i = 0; i < elements.length - 3; i++) {
            elements[i].checked = true;
        }
    }

    const handleClearAll = e => {
        e.preventDefault();
        const elements = document.getElementById("form").elements;
        for (let i = 0; i < elements.length - 3; i++) {
            elements[i].checked = false;
        }
    }

    return <div className="browse-wrapper">
        <Menu />
        <h1>Browse</h1>
        <hr />
        {!showInput && <button
            onClick={() => setShowInput(true)}
            className="back-button"
        >
            <img src={LeftIcon} alt="" />Back
        </button>}
        {showInput ?
            <form id="form" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h3>Source</h3>
                    <div className="form-group-item">
                        <input id="source1" value="source1" name="source" type="checkbox" />
                        <label htmlFor="source1">Natural</label>
                    </div>
                    <div className="form-group-item">
                        <input id="source2" value="source2" name="source" type="checkbox" />
                        <label htmlFor="source2">Synthetic</label>
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Target Organism</h3>
                    <div className="form-group-item">
                        <input id="target1" value="target1" name="target" type="checkbox" />
                        <label htmlFor="target1">Antileishmanial</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target2" value="target2" name="target" type="checkbox" />
                        <label htmlFor="target2">Antitrypanosomal</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target3" value="target3" name="target" type="checkbox" />
                        <label htmlFor="target3">Antimalarial</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target4" value="target4" name="target" type="checkbox" />
                        <label htmlFor="target4">Others</label>
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Family</h3>
                    <div className="form-group-item">
                        <input id="family1" value="family1" name="family" type="checkbox" />
                        <label htmlFor="family1">Defensin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family2" value="family2" name="family" type="checkbox" />
                        <label htmlFor="family2">Frog skin active peptide (FSAP)</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family3" value="family3" name="family" type="checkbox" />
                        <label htmlFor="family3">Cathelicidin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family4" value="family4" name="family" type="checkbox" />
                        <label htmlFor="family4">Cecropin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family5" value="family5" name="family" type="checkbox" />
                        <label htmlFor="family5">Bombinin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family6" value="family6" name="family" type="checkbox" />
                        <label htmlFor="family6">Melittin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family7" value="family7" name="family" type="checkbox" />
                        <label htmlFor="family7">Cecropin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family8" value="family8" name="family" type="checkbox" />
                        <label htmlFor="family8">MCD family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family9" value="family9" name="family" type="checkbox" />
                        <label htmlFor="family9">Others</label>
                    </div>
                </div>
                <hr />
                <div className="actionable-form-group">
                    <button onClick={handleSelectAll}><img src={CheckIcon} alt="" />Select All</button>
                    <button onClick={handleClearAll}><img src={TrashIcon} alt="" />Clear All</button>
                    <input id="submit" name="submit" type="submit" value="Browse" />
                </div>
            </form> :
            <div className="result">
                <Table data={data} columns={columns} />
            </div>
        }
    </div >
}
export default Browse;