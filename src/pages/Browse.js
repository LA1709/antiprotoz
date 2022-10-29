import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { browsePeptides } from '../sql/browsePeptides';
import { sources, organisms, families } from '../sql/sql.util'
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
                    <div className="item-container">
                        {sources.map((source, idx) =>
                            <div className="form-group-item" key={`source_${idx + 1}`}>
                                <input id={`source_${idx + 1}`} value={source} name="NatureType" type="checkbox" />
                                <label htmlFor={`source_${idx + 1}`}>{source}</label>
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Target Organism</h3>
                    <div className="item-container">
                        {Object.keys(organisms).map((target, idx) =>
                            <div className="form-group-item" key={`target_${idx + 1}`}>
                                <input id={`target_${idx + 1}`} value={target} name="Target" type="checkbox" />
                                <label htmlFor={`target_${idx + 1}`}>{target}</label>
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Family</h3>
                    <div className="item-container">
                        {families.map((family, idx) =>
                            <div className="form-group-item" key={`family_${idx + 1}`}>
                                <input id={`family_${idx + 1}`} value={family} name="Family" type="checkbox" />
                                <label htmlFor={`family_${idx + 1}`}>{family.charAt(0).toUpperCase() + family.slice(1)}</label>
                            </div>
                        )}
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