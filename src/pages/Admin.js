import { useEffect, useState } from 'react';
import { fetchAllPeptides } from '../sql/fetchAllPeptides';
import { fetchPeptide } from '../sql/fetchPeptide';
import Table from '../components/Table';
import { inputFields, colNames } from '../sql/sql.util';
import { updateData } from '../sql/updateData';
import LeftIcon from '../assets/chevron-left.svg';
import './admin.scss';

const Admin = () => {
    const [isVerified, setIsVerified] = useState(false);
    const [data, setData] = useState(undefined);
    const [filteredData, setFilteredData] = useState(undefined);
    const [columns, setColumns] = useState(null);
    const [showTable, setShowTable] = useState(true);
    const [timer, setTimer] = useState(null);
    const [selectedPeptide, setSelectedPeptide] = useState(null);
    const [updating, setUpdating] = useState(null);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

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
        else {
            const t = e.target.elements[0].value;
            e.target.reset();
            if (t === "adminadmin") {
                fetchAllPeptides(setData, setColumns);
                setIsVerified(true);
            }
        }
    }

    const handleClick = (id) => {
        setShowTable(false);
        fetchPeptide(id, (data) => setSelectedPeptide(data[0] ?? {}));
    }

    if (isVerified && showTable)
        return <div className="admin-table-wrapper">
            <label htmlFor="search">
                Search:
            </label>
            <input id="search" name="search" type="text" placeholder="Search Table" onChange={handleChange} disabled={!data} />
            <Table
                data={filteredData}
                columns={columns}
                onClickCallback={handleClick}
            />
        </div>

    return <div className="admin-wrapper">
        {isVerified && <button
            onClick={() => {
                setData(undefined);
                setShowTable(true);
                fetchAllPeptides(setData, setColumns);
                setSelectedPeptide(null);
            }}
            className="back-button"
        >
            <img src={LeftIcon} alt="" />Back
        </button>}
        <form id="form" onSubmit={handleSubmit}>
            {isVerified ? !selectedPeptide ? <h4>Loading...</h4> : <>
                {Object.entries(inputFields).map(item => <div
                    className="form-group-item"
                    key={item[0]}
                >
                    <label htmlFor={item[0]}>{colNames[item[0]] ?? item[0]}: </label>
                    {item[1].type === 'textarea' ? <textarea
                        id={item[0]}
                        name={item[0]}
                        placeholder={`Enter ${colNames[item[0]] ?? item[0]}`}
                        defaultValue={selectedPeptide[item[0]]?.replaceAll(/\t/g, " ")}
                        rows={5}
                    /> : item[1].type === 'select' ? <select
                        id={item[0]}
                        name={item[0]}
                        defaultValue={selectedPeptide[item[0]]}
                    >
                        <option value="">None</option>
                        {item[1].source.map(opt =>
                            <option value={opt} key={opt}>{opt}</option>
                        )}
                    </select> : <input
                        id={item[0]}
                        name={item[0]}
                        placeholder={`Enter ${colNames[item[0]] ?? item[0]}`}
                        defaultValue={selectedPeptide[item[0]]}
                        {...item[1]}
                    />}
                </div>)}
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