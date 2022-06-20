import { useState } from 'react';
import { searchPeptides } from '../sql/searchPeptides';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { organisms } from '../sql/sql.util';
import './search.scss';
import DownIcon from '../assets/chevron-down.svg';
import UpIcon from '../assets/chevron-up.svg';

const Search = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState(null);
    const [columns, setColumns] = useState(null);
    const [selectedOrg, setSelectedOrg] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        setData(undefined);
        searchPeptides(e.target.elements, show, setData, setColumns);
    }
    return <div className="search-wrapper">
        <Menu />
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="form-group-item">
                    <label htmlFor="sequence">Sequence: </label>
                    <input id="sequence" name="Sequence" type="text" placeholder="Enter Sequence" required={!show} />
                </div>
                <div className="form-group-item">
                    <div>
                        <input id="exact" name="type" type="radio" value="exact" required={!show} />
                        <label htmlFor="exact">Exact Sequence</label>
                    </div>
                    <div>
                        <input id="part" name="type" type="radio" value="part" required={!show} />
                        <label htmlFor="part">Part of Sequence</label>
                    </div>
                </div>
                {show && <div className="collapsible">
                    <div className="form-group-item">
                        <label htmlFor="pubmedid">PubMed ID: </label>
                        <input id="pubmedid" name="PubmedID" type="text" placeholder="Enter PubMed ID" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="target">Target Organism: </label>
                        <select
                            id="target"
                            name="Target"
                            defaultValue=""
                            onChange={e => setSelectedOrg(e.target.value)}
                        >
                            <option value="">Any organism</option>
                            {Object.keys(organisms).map(organism =>
                                <option value={organism} key={organism}>{organism}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="target">Species: </label>
                        <select
                            id="species"
                            name="Species"
                            defaultValue=""
                        >
                            <option value="">Any spieces</option>
                            {(selectedOrg ?
                                organisms[selectedOrg] : Object.values(organisms)
                                    .reduce((prev, curr) => [...prev, ...curr], []))
                                ?.map(species =>
                                    <option value={species} key={species}>{species}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="source">Source: </label>
                        <input id="source" name="Source" type="text" placeholder="Enter Source" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="year">Year: </label>
                        <input id="year" name="year" type="text" placeholder="Enter Year" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="family">Family: </label>
                        <input id="family" name="Family" type="text" placeholder="Enter Family" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="plength">Length: </label>
                        <input id="plength" name="Length" type="number" placeholder="Enter Length" />
                    </div>
                    <hr />
                    <span>Show only if:</span>
                    <div className="form-group-item closer">
                        <input id="hemolytic" value="Hemolytic" name="cols" type="checkbox" />
                        <label htmlFor="hemolytic" className="not-aligned">Hemolytic Activity</label>
                    </div>
                    <div className="form-group-item closer">
                        <input id="uniport" value="UniportID" name="cols" type="checkbox" />
                        <label htmlFor="uniport" className="not-aligned">Uniport ID</label>
                    </div>
                    <div className="form-group-item closer">
                        <input id="charge" value="Charge" name="cols" type="checkbox" />
                        <label htmlFor="charge" className="not-aligned">Net Charge</label>
                    </div>
                    <div className="form-group-item closer">
                        <input id="activity" value="Activity" name="cols" type="checkbox" />
                        <label htmlFor="activity" className="not-aligned">Activity</label>
                    </div>
                    <hr />
                </div>}
                <div className="form-group-item">
                    <input id="submit" name="submit" type="submit" value="Search" />
                </div>
                <div className="form-group-item">
                    <p onClick={() => setShow(!show)}>
                        {show ? "Hide" : "Show"} Advanced Filters
                        <img src={show ? UpIcon : DownIcon} alt="icon" />
                    </p>
                </div>
            </div>
            <hr />
            <div className="result-group">
                <Table data={data} columns={columns} />
            </div>
        </form>
    </div >
}
export default Search;