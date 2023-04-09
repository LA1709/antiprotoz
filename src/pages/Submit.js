import Menu from '../components/Menu';
import { submitData } from '../sql/submitData';
import './submit.scss';

const SubmitPeptide = () => {

    const handleSubmit = e => {
        e.preventDefault();
        submitData(e.target.elements);
    }

    const handleClear = (e) => {
        e.preventDefault();
        const formElement = document.getElementById('form');
        for (const el of formElement) {
            if (el.id === "submit" || el.id === "clear")
                continue;
            el.value = "";
        }
    };

    return <div className="submit-wrapper">
        <Menu />
        <form id="form" onSubmit={handleSubmit}>
            <h2>Data Submission</h2>
            <span>Peptide Information</span>
            <div className="form-group-item">
                <label htmlFor="name">Peptide Name:</label>
                <input id="name" name="Name" type="text" placeholder="Enter Peptide Name" required />
            </div>
            <div className="form-group-item">
                <label htmlFor="sequence">Peptide Sequence:</label>
                <input id="sequence" name="Sequence" type="text" placeholder="Enter Peptide Sequence" required />
            </div>
            <div className="form-group-item">
                <label htmlFor="pubmed">Pubmed ID / Link:</label>
                <input id="pubmed" name="Pubmed ID" type="text" placeholder="Enter Pubmed ID / Link" required />
            </div>
            <br />
            <span>Submitter's Information</span>
            <div className="form-group-item">
                <label htmlFor="sub_name">Name:</label>
                <input id="sub_name" name="Submitter" type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group-item">
                <label htmlFor="aff">Affiliation:</label>
                <input id="aff" name="Affiliation" type="text" placeholder="Enter your affiliation" />
            </div>
            <div className="form-group-item">
                <label htmlFor="email">Email:</label>
                <input id="email" name="Email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-special-item">
                <label htmlFor="comments">Comments (optional):</label>
                <textarea id="comments" name="Comments" placeholder="Any additional comments" rows="5" />
            </div>
            <div className="form-group-button">
                <button id="clear" onClick={handleClear}>
                    Clear
                </button>
                <input id="submit" name="submit" type="submit" value="Submit" />
            </div>
        </form>
    </div>
}
export default SubmitPeptide;