import { useState } from 'react';
import { searchPeptides } from '../sql/searchPeptides';
import Menu from '../components/Menu';
import Table from '../components/Table';
import { organisms, families, sources, getFamilyGroup } from '../sql/sql.util';
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
        {!show && <span className="heading">
            Simple Search
        </span>}
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
                        <label htmlFor="target">Target Species: </label>
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
                        <label htmlFor="NatureType">Peptide Source: </label>
                        <select id="NatureType" name="NatureType" defaultValue="">
                            <option value="">Any source</option>
                            {sources.map(source =>
                                <option value={source} key={source}>{source}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="family">Peptide Family: </label>
                        <select id="family" name="Family" defaultValue="">
                            <option value="">Any family</option>
                            {[...new Set(families.map(family => getFamilyGroup(family)))].map(family =>
                                <option value={family} key={family}>{family}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="plength">Peptide Length: </label>
                        <input id="plength" name="Length" type="number" min={1} max={124} placeholder="Enter Length" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="pubmedid">PubMed ID: </label>
                        <input id="pubmedid" name="PubmedID" type="text" placeholder="Enter PubMed ID" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="year">Year: </label>
                        <input id="year" name="year" type="text" placeholder="Enter Year" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="hemolytic">Hemolytic Activity: </label>
                        <select id="hemolytic" name="Hemolytic" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="uniport">Uniport ID</label>
                        <select id="uniport" name="UniportID" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="charge">Net Charge</label>
                        <select id="charge" name="Charge" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="activity">Activity</label>
                        <select id="activity" name="Activity" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <hr />
                </div>}
                <div className="form-group-item">
                    <input id="submit" name="submit" type="submit" value="Search" />
                </div>
                <div className="form-group-item">
                    <p onClick={() => setShow(!show)}>
                        {show ? "Hide" : "Show"} Advanced Search
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