import { useState } from 'react';
import CheckIcon from '../assets/check-square.svg';
import TrashIcon from '../assets/trash.svg';
import './composition.scss';

const Composition = (props) => {
    const [selection, setSelection] = useState({});
    const param_length = Object.keys(props.parameter).length;

    const handleChange = e => {
        setSelection({
            ...selection,
            [e.target.name]: e.target.checked
        });
    }

    const handleSelectAll = e => {
        e.preventDefault();
        const t = {};
        const elements = document.getElementById("form").elements;
        for (let i = 0; i < param_length; i++) {
            elements[i + 2].checked = true;
            t[elements[i + 2].name] = true;
        }
        setSelection(t);
    }

    const handleClearAll = e => {
        e.preventDefault();
        const elements = document.getElementById("form").elements;
        for (let i = 0; i < param_length; i++) {
            elements[i + 2].checked = false;
        }
        setSelection({});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const inputs = {};
        Object.entries(selection).filter(item => !!item[1]).forEach(val => {
            const min_val = document.getElementById(`${val[0]}_min`).value;
            const max_val = document.getElementById(`${val[0]}_max`).value;
            inputs[val[0]] = [min_val, max_val];
        })
        props.callback(inputs);
    }

    return <form id="form" className="com-wrapper" onSubmit={handleSubmit}>
        <h3>{props.title}</h3>
        <div className="buttons-container">
            <button onClick={handleSelectAll}><img src={CheckIcon} alt="" />Select All</button>
            <button onClick={handleClearAll}><img src={TrashIcon} alt="" />Clear All</button>
        </div>
        <div className="form-group">
            {Object.keys(props.parameter).map((val, idx) =>
                <div className="form-group-item" key={`${val}_${idx + 1}`}>
                    <input
                        id={`${val}_${idx + 1}`}
                        name={val}
                        type="checkbox"
                        onChange={handleChange}
                        defaultChecked={!!selection[val]}
                    />
                    <label htmlFor={`${val}_${idx + 1}`}>{val}</label>
                </div>
            )}
        </div>
        <div className="form-range">
            {Object.entries(selection).filter(item => !!item[1]).map((val, idx) =>
                <div className="form-range-item" key={`${val[0]}-${idx + 1}`}>
                    <span>{val[0]}:</span>
                    <input
                        id={`${val[0]}_min`}
                        type="number"
                        placeholder="min"
                        defaultValue={props.parameter[val[0]].min}
                        min={props.parameter[val[0]].min}
                        max={props.parameter[val[0]].max}
                        required
                    />
                    to
                    <input
                        id={`${val[0]}_max`}
                        type="number"
                        placeholder="max"
                        defaultValue={props.parameter[val[0]].max}
                        min={props.parameter[val[0]].min}
                        max={props.parameter[val[0]].max}
                        required
                    />
                </div>
            )}
        </div>
        <div className="form-group-button">
            <input id="submit" name="submit" type="submit" value="Search" />
        </div>
    </form>
}

export default Composition;