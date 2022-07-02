import Menu from '../components/Menu';
import { submitData } from '../sql/submitData';
import './submit.scss';

const Tools = () => {

    const handleSubmit = e => {
        e.preventDefault();
        submitData(e.target.elements);
    }

    return <div className="submit-wrapper">
        <Menu />
        <form id="form" onSubmit={handleSubmit}>
            <h2>Data Submission</h2>
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
            <div className="form-group-item">
                <label htmlFor="sub_name">Submitter's Name:</label>
                <input id="sub_name" name="Submitter" type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group-item">
                <label htmlFor="aff">Affiliation:</label>
                <input id="aff" name="Affiliation" type="text" placeholder="Enter your affiliation" required />
            </div>
            <div className="form-group-item">
                <label htmlFor="email">Submitter's Email:</label>
                <input id="email" name="Email" type="email" placeholder="Enter your affiliation" required />
            </div>
            <div className="form-special-item">
                <label htmlFor="comments">Comments (optional):</label>
                <textarea id="comments" name="Comments" placeholder="Any additional comments" rows="5" />
            </div>
            <div className="form-group-button">
                <input id="submit" name="submit" type="submit" value="Submit" />
            </div>
        </form>
    </div>
}
export default Tools;