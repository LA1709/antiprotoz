import Menu from '../components/Menu';
import CheckIcon from '../assets/check-square.svg';
import TrashIcon from '../assets/trash.svg';
import './browse.scss';

const Browse = () => {
    const handleSubmit = e => {
        e.preventDefault();
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

    return (<>
        <Menu />
        <div className="browse-wrapper">
            <h1>Browse</h1>
            <hr />
            <form id="form" className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <h3>Source</h3>
                    <div className="form-group-item">
                        <input id="source1" name="source1" type="checkbox" />
                        <label htmlFor="source1">Natural</label>
                    </div>
                    <div className="form-group-item">
                        <input id="source2" name="source2" type="checkbox" />
                        <label htmlFor="source2">Synthetic</label>
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Target Organism</h3>
                    <div className="form-group-item">
                        <input id="target1" name="target1" type="checkbox" />
                        <label htmlFor="target1">Antileishmanial</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target2" name="target2" type="checkbox" />
                        <label htmlFor="target2">Antitrypanosomal</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target3" name="target3" type="checkbox" />
                        <label htmlFor="target3">Antimalarial</label>
                    </div>
                    <div className="form-group-item">
                        <input id="target4" name="target4" type="checkbox" />
                        <label htmlFor="target4">Others</label>
                    </div>
                </div>
                <hr />
                <div className="form-group">
                    <h3>Family</h3>
                    <div className="form-group-item">
                        <input id="family1" name="family1" type="checkbox" />
                        <label htmlFor="family1">Defensin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family2" name="family2" type="checkbox" />
                        <label htmlFor="family2">Frog skin active peptide (FSAP)</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family3" name="family3" type="checkbox" />
                        <label htmlFor="family3">Cathelicidin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family4" name="family4" type="checkbox" />
                        <label htmlFor="family4">Cecropin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family5" name="family5" type="checkbox" />
                        <label htmlFor="family5">Bombinin family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family6" name="family6" type="checkbox" />
                        <label htmlFor="family6">Melittin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family7" name="family7" type="checkbox" />
                        <label htmlFor="family7">Cecropin</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family8" name="family8" type="checkbox" />
                        <label htmlFor="family8">MCD family</label>
                    </div>
                    <div className="form-group-item">
                        <input id="family9" name="family9" type="checkbox" />
                        <label htmlFor="family9">Others</label>
                    </div>
                </div>
                <hr />
                <div className="actionable-form-group">
                    <button onClick={handleSelectAll}><img src={CheckIcon} alt="" />Select All</button>
                    <button onClick={handleClearAll}><img src={TrashIcon} alt="" />Clear All</button>
                    <input id="submit" name="submit" type="submit" value="Browse" />
                </div>
            </form>
        </div >
    </>)
}
export default Browse;