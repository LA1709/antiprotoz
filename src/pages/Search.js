import { useState } from 'react';
import { searchPeptides } from '../sql/searchPeptides';
import Menu from '../components/Menu';
import Table from '../components/Table';
import Select from 'react-select';
import { organisms, families, sources, getFamilyGroup, aa, getSearchStyles } from '../sql/sql.util';
import './search.scss';
import RightIcon from '../assets/chevron-right.svg';
import LeftIcon from '../assets/chevron-left.svg';
import FiltersIcon from '../assets/sliders.svg';
import CloseIcon from '../assets/close.svg';

const Search = () => {
    const [show, setShow] = useState(false);
    const [filters, setFilters] = useState(false);
    const [data, setData] = useState(null);
    const [columns, setColumns] = useState(null);
    const [selectedOrg, setSelectedOrg] = useState("");
    const [selectedAA, setSelectedAA] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setData(undefined);
        searchPeptides(e.target.elements, show, setData, setColumns);
    }

    return <div className="search-wrapper">
        <Menu />
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                {show ? <>
                    <span>Search using Pattern</span>
                    <div className="form-group-special">
                        <Select
                            id="sequence" name="Sequence" defaultValue={[""]}
                            isMulti
                            options={Object.keys(aa).map(aminoAcid => ({
                                label: aminoAcid,
                                value: aminoAcid,
                            }))}
                            placeholder="Select Amino Acids to match"
                            styles={getSearchStyles()}
                            onChange={selection => setSelectedAA(selection.map(item => item.value))}
                        />
                        {!!selectedAA.length && <>
                            <div className="form-group-item">
                                <label htmlFor="sequence">Length of Sequence: </label>
                                <input id="SEQ_Length" name="SEQ_Length" type="number" min={2} max={263} placeholder="Any Length" />
                            </div>
                            <div className="help">Positions to match at (comma-separated):</div>
                            <div className="aa-container">
                                {selectedAA.map(item => (<div className="aa-item">
                                    {item}: <input
                                        id={`SEQ_${item}`}
                                        name={`SEQ_${item}`}
                                        type="text"
                                        pattern="(\d,)*\d"
                                        placeholder="Any"
                                    />
                                </div>))}
                            </div>
                        </>}
                    </div>
                </> : <>
                    <div className="heading-container" onClick={() => setFilters(curr => !curr)}>
                        <span className="heading">
                            Simple Search
                        </span>
                        <div className="icon-container">
                            {filters ? "Clear Filters" : "Show Filters"}
                            <img src={filters ? CloseIcon : FiltersIcon} alt="icon" />
                        </div>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="sequence">Sequence: </label>
                        <input id="sequence" name="Sequence" placeholder="Enter Sequence" />
                    </div>
                    <div className="form-group-item">
                        <div>
                            <input id="exact" name="type" type="radio" value="exact" />
                            <label htmlFor="exact">Exact Sequence</label>
                        </div>
                        <div>
                            <input id="part" name="type" type="radio" value="part" />
                            <label htmlFor="part">Part of Sequence</label>
                        </div>
                    </div>
                </>}
                {(show || filters) && <div className="collapsible">
                    <span>Filter the results</span>
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
                        <label htmlFor="family">In Vitro / In Vivo: </label>
                        <select id="Vitro_Vivo" name="Vitro_Vivo" defaultValue="">
                            <option value="">Any</option>
                            <option value="In vitro">In Vitro</option>
                            <option value="In vivo">In Vivo</option>
                            <option value="ex vivo">Ex vivo</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="length">Peptide Length: </label>
                        <input id="length" name="Length" type="number" min={1} max={124} placeholder="Enter Length" />
                    </div>
                    {/* <div className="form-group-item">
                        <label htmlFor="pubmedid">PubMed ID: </label>
                        <input id="pubmedid" name="PubmedID" type="text" placeholder="Enter PubMed ID" />
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="year">Year: </label>
                        <input id="year" name="year" type="text" placeholder="Enter Year" />
                    </div> */}
                    <div className="form-group-item">
                        <label htmlFor="hemolytic">Hemolytic Activity: </label>
                        <select id="hemolytic" name="Hemolytic" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="uniport">Uniport ID: </label>
                        <select id="uniport" name="UniportID" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    <div className="form-group-item">
                        <label htmlFor="charge">Net Charge: </label>
                        <select id="charge" name="Charge" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div>
                    {/* <div className="form-group-item">
                        <label htmlFor="activity">Activity: </label>
                        <select id="activity" name="Activity" defaultValue="">
                            <option value="">Any</option>
                            <option value="reported">Reported</option>
                        </select>
                    </div> */}
                    <hr />
                </div>}
                <div className="form-group-item">
                    <input id="submit" name="submit" type="submit" value="Search" />
                </div>
                <div className="form-group-item">
                    <p onClick={() => setShow(!show)}>
                        {show && <><img src={LeftIcon} alt="icon" />Simple Search</>}
                        {!show && <>Advanced Search<img src={RightIcon} alt="icon" /></>}
                    </p>
                </div>
            </div>
            <div className="result-group">
                <Table data={data} columns={columns} />
            </div>
        </form>
    </div >
}
export default Search;