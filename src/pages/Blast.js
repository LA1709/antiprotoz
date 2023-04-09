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

    const handleExample = (e) => {
        e.preventDefault();
        const el = document.getElementById('query');
        el.value = ">SEQ1\nGVFGLLAKPALKGASKLIPHLAPSRQQ\n";
    };

    const handleClear = (e) => {
        e.preventDefault();
        const el = document.getElementById('query');
        el.value = "";
    };

    return <div className="blast-wrapper">
        <Menu />
        {!result ?
            <>
                <div className="heading">
                    BLAST
                </div>
                <div className="desc">
                    Basic Local Alignment Search Tool
                </div>
                <br />
                <br />
                <div className="desc">
                    The tool will allow the users to perform BLAST for the query peptide sequence against the AntiProtoZ.
                    <br />Users can adjust the parameters as per their requirement, however the default values provides the  best results.
                    <br />For more information, please visit the <a href="/guide">Guide</a>
                </div>
            </> : <div className="result-desc">
                BLAST Result Page
            </div>
        }
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
                        <div className="heading-group">
                            <label htmlFor="query">
                                Enter the input sequence in FASTA format:
                            </label>
                            <button onClick={handleExample}>
                                Example Sequence
                            </button>
                        </div>
                        <textarea
                            id="query"
                            name="query"
                            placeholder="Enter peptide sequence here"
                            rows="7"
                            required
                        />
                    </div>
                    <div className="form-item">
                        <div className="grouped-items">
                            <label htmlFor="eValue">E-value:</label>
                            <select name="evalue" id="eValue" defaultValue="20000">
                                <option value="0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001">1e-100</option>
                                <option value="0.0000000001">1e-10</option>
                                <option value="0.00001">1e-5</option>
                                <option value="0.01">0.01</option>
                                <option value="0.1">0.1</option>
                                <option value="1">1</option>
                                <option value="10">10</option>
                                <option value="100">100</option>
                                <option value="100">500 </option>
                                <option value="1000">1000 </option>
                                <option value="2000">2000</option>
                                <option value="20000">20000</option>
                            </select>
                        </div>
                        <div className="grouped-items">
                            <label htmlFor="wordSize">Word Size:</label>
                            <select name="wordSize" id="wordSize" defaultValue={2}>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                        <div className="grouped-items">
                            <label htmlFor="matrix">Matrix:</label>
                            <select name="matrix" id="matrix" defaultValue="PAM30">
                                <option value="BLOSUM80">BLOSUM80</option>
                                <option value="BLOSUM62">BLOSUM62</option>
                                <option value="BLOSUM45">BLOSUM45</option>
                                <option value="PAM30">PAM30</option>
                                <option value="PAM70">PAM70</option>
                            </select>
                        </div>
                    </div>
                    <div className="grouped-items">
                        <button onClick={handleClear}>
                            Clear
                        </button>
                        <input id="submit" name="submit" type="submit" value="Search" />
                    </div>
                </form>
        }
    </div>
}
export default Blast;