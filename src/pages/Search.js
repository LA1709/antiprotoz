import { useState } from 'react';
import Menu from '../components/Menu';
import './search.scss';
import DownIcon from '../assets/chevron-down.svg';
import UpIcon from '../assets/chevron-up.svg';

const Search = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.elements);
    }
    return (<>
        <Menu />
        <div className="search-wrapper">
            <h1>Search</h1>
            <hr />
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-group-item">
                        <label htmlFor="sequence">Sequence: </label>
                        <input id="sequence" name="sequence" type="text" placeholder="Enter Sequence" required={!show} />
                    </div>
                    {show ?
                        <div className="collapsible">
                            <div className="form-group-item">
                                <label htmlFor="pubmedid">PubMed ID: </label>
                                <input id="pubmedid" name="pubmedid" type="text" placeholder="Enter PubMed ID" />
                            </div>
                            <div className="form-group-item">
                                <label htmlFor="target">Target Organism: </label>
                                <input id="target" name="target" type="text" placeholder="Enter Target Organism" />
                            </div>
                            <div className="form-group-item">
                                <label htmlFor="source">Source: </label>
                                <input id="source" name="source" type="text" placeholder="Enter Source" />
                            </div>
                            <div className="form-group-item">
                                <label htmlFor="family">Family: </label>
                                <input id="family" name="family" type="text" placeholder="Enter Family" />
                            </div>
                            <div className="form-group-item">
                                <label htmlFor="length">Length: </label>
                                <input id="length" name="length" type="text" placeholder="Enter Length" />
                            </div>
                            <hr />
                            <div className="form-group-item">
                                <input id="hemolytic" name="hemolytic" type="checkbox" defaultChecked />
                                <label htmlFor="hemolytic" className="not-aligned">Hemolytic Activity</label>
                            </div>
                            <div className="form-group-item">
                                <input id="uniport" name="uniport" type="checkbox" defaultChecked />
                                <label htmlFor="uniport" className="not-aligned">Uniport</label>
                            </div>
                            <div className="form-group-item">
                                <input id="charge" name="charge" type="checkbox" defaultChecked />
                                <label htmlFor="charge" className="not-aligned">Net Charge</label>
                            </div>
                            <div className="form-group-item">
                                <input id="activity" name="activity" type="checkbox" defaultChecked />
                                <label htmlFor="activity" className="not-aligned">Activity</label>
                            </div>
                            <hr />
                        </div> :
                        <div className="form-group-item">
                            <div>
                                <input id="exact" name="type" type="radio" value="exact" required />
                                <label htmlFor="exact">Exact Sequence</label>
                            </div>
                            <div>
                                <input id="part" name="type" type="radio" value="part" required />
                                <label htmlFor="part">Part of Sequence</label>
                            </div>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fuga minus, quam dolor sunt vero in. Deleniti at quos ut obcaecati impedit sapiente minima voluptatibus ratione recusandae voluptates. Placeat aspernatur delectus et? Est quibusdam ratione debitis eveniet sunt suscipit!
                </div>
            </form>
        </div >
    </>)
}
export default Search;