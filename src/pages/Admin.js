import { useEffect, useState } from 'react';
import { fetchAllPeptides } from '../sql/fetchAllPeptides';
import { fetchPeptide } from '../sql/fetchPeptide';
import Table from '../components/Table';
import { inputFields, colNames } from '../sql/sql.util';
import { updateData } from '../sql/updateData';
import { deleteData } from '..//sql/deleteData';
import { insertData } from '../sql/insertData.js';
import LeftIcon from '../assets/chevron-left.svg';
import './admin.scss';

const getPeptideInputs = (data) => Object.entries(inputFields).map(item => <div
    className="form-group-item"
    key={item[0]}
>
    <label htmlFor={item[0]}>{colNames[item[0]] ?? item[0]}: </label>
    {item[1].type === 'textarea' ? <textarea
        id={item[0]}
        name={item[0]}
        placeholder={`Enter ${colNames[item[0]] ?? item[0]}`}
        defaultValue={data[item[0]]?.replaceAll(/\t/g, " ")}
        rows={5}
    /> : item[1].type === 'select' ? <select
        id={item[0]}
        name={item[0]}
        defaultValue={data[item[0]]}
    >
        <option value="">None</option>
        {item[1].source.map(opt =>
            <option value={opt} key={opt}>{opt}</option>
        )}
    </select> : <input
        id={item[0]}
        name={item[0]}
        placeholder={`Enter ${colNames[item[0]] ?? item[0]}`}
        defaultValue={data[item[0]]}
        {...item[1]}
    />}
</div>);

const Admin = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [data, setData] = useState(undefined);
    const [filteredData, setFilteredData] = useState(undefined);
    const [columns, setColumns] = useState(null);
    const [showTable, setShowTable] = useState(true);
    const [timer, setTimer] = useState(null);
    const [selectedPeptide, setSelectedPeptide] = useState(null);
    const [updating, setUpdating] = useState(null);
    const [selectedID, setSelectedID] = useState(null);
    const [deleting, setDeleting] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [inserting, setInserting] = useState(false);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const getNewId = () =>
        `Protoz_${Math.max(...data.map(obj =>
            parseInt(obj.ID.replace("Protoz_", ""))
        )) + 1}`;

    const handleChange = e => {
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            if (e.target.value) setFilteredData(data.filter(peptide =>
                !!Object.values(peptide).some(v => {
                    if (!v) return false;
                    const t = v.toString ? v.toString() : v;
                    const regex = new RegExp(e.target.value, 'i');
                    return !!t.match(regex);
                })
            )); else setFilteredData(data);
        }, 1000);
        setTimer(newTimer);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (isVerified) {
            if (showInput) {
                setInserting(true);
                insertData(e.target.elements, success => {
                    if (!success)
                        setInserting(false);
                    else {
                        setData(undefined);
                        setShowTable(true);
                        fetchAllPeptides(setData, setColumns);
                        setInserting(false);
                        setShowInput(false);
                    }
                })
            } else {
                setUpdating(true);
                updateData(e.target.elements, success => {
                    if (!success)
                        setUpdating(false);
                    else {
                        setUpdating(false);
                        setData(undefined);
                        setShowTable(true);
                        fetchAllPeptides(setData, setColumns);
                        setSelectedPeptide(null);
                    }
                })
            }
        }
        else {
            const t = e.target.elements[0].value;
            e.target.reset();
            if (t === "adminadmin") {
                fetchAllPeptides(setData, setColumns);
                setIsVerified(true);
            }
        }
    }

    const handleClick = (id, callToDelete) => {
        if (callToDelete)
            setSelectedID(id);
        else {
            setShowTable(false);
            fetchPeptide(id, (data) => setSelectedPeptide(data[0] ?? {}));
        }
    }

    if (isVerified && showTable)
        return <div className="admin-table-wrapper">
            <label htmlFor="search">
                Search:
            </label>
            <input id="search" name="search" type="text" placeholder="Search Table" onChange={handleChange} disabled={!data} />
            <button onClick={() => {
                setShowInput(true);
                setShowTable(false);
            }}>Add New</button>
            <Table
                data={filteredData}
                columns={columns}
                onClickCallback={handleClick}
            />
            {!!selectedID && <div className="modal-bg">
                <div className="delete-modal">
                    Are you sure you want to delete the selected entry ({selectedID})?
                    <div className="modal-footer">
                        <button
                            disabled={deleting}
                            onClick={() => setSelectedID(null)}
                        >Cancel</button>
                        <button
                            disabled={deleting}
                            onClick={() => {
                                setDeleting(true);
                                deleteData(selectedID, success => {
                                    if (!success)
                                        setDeleting(false);
                                    else {
                                        setData(undefined);
                                        setSelectedID(null);
                                        setDeleting(false);
                                        fetchAllPeptides(setData, setColumns);
                                    }
                                })
                            }}
                        >Confirm</button>
                    </div>
                </div>
            </div>}
        </div>

    return <div className="admin-wrapper">
        {isVerified && <button
            onClick={() => {
                if (showInput) {
                    setShowTable(true);
                    setShowInput(false);
                } else {
                    setData(undefined);
                    setShowTable(true);
                    fetchAllPeptides(setData, setColumns);
                    setSelectedPeptide(null);
                }
            }}
            className="back-button"
            disabled={updating || inserting}
        >
            <img src={LeftIcon} alt="" />Back
        </button>}
        <form id="form" onSubmit={handleSubmit}>
            {isVerified ? !selectedPeptide ? showInput ?
                <>
                    {getPeptideInputs({ ID: getNewId() })}
                    <div className="form-group-button">
                        <input id="submit" name="submit" type="submit" value="Add to Database" disabled={inserting} />
                    </div>
                </> : <h4>Loading...</h4> : <>
                {getPeptideInputs(selectedPeptide)}
                <div className="form-group-button">
                    <input id="submit" name="submit" type="submit" value="Update" disabled={updating} />
                </div>
            </> : <>
                <h2>Admin Panel</h2>
                <div className="form-group-item">
                    <label htmlFor="name">Password:</label>
                    <input id="password" name="Password" type="password" placeholder="Enter the passcode" required />
                </div>
                <div className="form-group-button">
                    <input id="submit_pass" name="submit_pass" type="submit" value="Submit" />
                </div>
            </>}
        </form>
    </div>
}
export default Admin;