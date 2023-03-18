import { useState } from 'react';
import { blast } from '../sql/blastSearch';
import Menu from '../components/Menu';
import LeftIcon from '../assets/chevron-left.svg';
import './blast.scss';

const Blast = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setLoading(true);
        blast(e.target.elements, data => {
            setLoading(false);
            setResult(data);
        });
    }

    return <div className="blast-wrapper">
        <Menu />
        <div className="heading">
            BLAST
        </div>
        <div className="desc">
            Basic Line Alignment Search Tool
        </div>
        <br />
        <div className="desc">
            This tool will allow the users to perform a BLAST for the query peptide sequence against the database sequences.
            <br />Users can adjust the general and scoring parameters as per their needs, though the default values are for the best results.
            <br />For more information, please visit the <a href="/guide">Guide</a>
        </div>
        {loading ?
            <div className="loader" /> :
            result ?
                <div className="result-container">
                    <button onClick={() => setResult(null)}>
                        <img src={LeftIcon} alt="" />Back
                    </button>
                    <div className="result">
                        {result}
                    </div>
                </div> : <form className="form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <label htmlFor="query">
                            Enter the input sequence in FASTA format:
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            placeholder="Enter peptide sequence here"
                            rows="7"
                            defaultValue={">SEQ1\nGVFGLLAKPALKGASKLIPHLAPSRQQ\n"}
                        />
                    </div>
                    <div className="form-item">
                        <span className="input-title">
                            Select the general parameters:
                        </span>
                        <div className="grouped-items">
                            <label htmlFor="eValue">E-value:</label>
                            <input name="evalue" id="eValue" type="number" defaultValue={20000} />
                        </div>
                        <div className="grouped-items">
                            <label htmlFor="wordSize">Word Size:</label>
                            <input name="wordSize" id="wordSize" type="number" defaultValue={2} />
                        </div>
                    </div>
                    <div className="form-item">
                        <span className="input-title">
                            Select the scoring parameters:
                        </span>
                        <div className="grouped-items">
                            <label htmlFor="matrix">Matrix:</label>
                            <select name="matrix" id="matrix" defaultValue="PAM30">
                                <option value="PAM30">PAM30</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-item">
                        <input id="submit" name="submit" type="submit" value="Search" />
                    </div>
                </form>
        }
    </div>
}
export default Blast;