import { useState } from 'react';
import Menu from '../components/Menu';
import './blast.scss';

const Blast = () => {
    const [result, setResult] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        setResult(undefined);
        console.log(e.target.elements);
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
            This tool will enable users to obtain hits for the input peptide sequence. The result will display all the sequences that match
        </div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-item">
                <label htmlFor="text_input">
                    Enter the input sequence in FASTA format:
                </label>
                <textarea id="text_input" name="text_input" placeholder="Enter peptide sequence here" rows="7" />
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
        </form>
    </div>
}
export default Blast;