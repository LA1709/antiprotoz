import Menu from '../components/Menu';
import './guide.scss';
import i1 from '../assets/guide/1.png';
import i2 from '../assets/guide/2.png';
import i3 from '../assets/guide/3.png';
import i4 from '../assets/guide/4.png';
import i5 from '../assets/guide/5.png';
import i6 from '../assets/guide/6.png';
import i7 from '../assets/guide/7.png';
import i8 from '../assets/guide/8.png';
import i9 from '../assets/guide/9.png';
import i10 from '../assets/guide/10.png';

const Guide = () => {
    return <div className="guide-wrapper">
        <Menu />
        <a href="#top" style={{
            position: 'fixed',
            bottom: '2rem',
            right: '3rem',
            fontSize: '1.2rem'
        }}>↑ Top</a>
        <div id="top" className="heading">Guide</div>
        <div className="description">
            On this page, we have provided instructions for the following:
            <ul>
                <li><a href="#browse">Browse</a></li>
                <li><a href="#search">Search</a></li>
                <li><a href="#blast">BLAST</a></li>
                <li><a href="#composition">Amino Acid Composition</a></li>
                <li><a href="#submission">Data Submission</a></li>
            </ul>
        </div>
        <div className="guide-section">
            <div id="browse" className="section-heading">1. Browse</div>
            <div className="section-description">
                The Browse will allow you to obtain all the peptides belonging to the categories listed under each category. You can also explore the subgroups formed by selecting multiple options.
            </div>
            <img
                className="section-image"
                src={i1}
                alt="browse"
            />
            <div id="search" className="section-heading">2. Search</div>
            <div className="section-description">
                The search will allow you to retrieve all the peptides with the input sequence, further, you can select if you want peptides to be a part or to have the same sequence as the input.
            </div>
            <img
                className="section-image"
                src={i2}
                alt="search"
                style={{ marginBottom: '-3rem' }}
            />
            <div className="section-description">
                <span style={{ fontSize: '1.5rem' }}>Advanced Search</span><br />
            </div>
            <img
                className="section-image"
                src={i3}
                alt="advanced"
                style={{ marginBottom: '2rem' }}
            />
            <div className="section-description">
                Consider the following example:<br />
                To obtain all natural peptides with activity against Leishmanias.
            </div>
            <img
                className="section-image"
                src={i4}
                alt="example-1"
                style={{ marginBottom: '2rem' }}
            />
            <div className="section-description">
                To further modify your query for obtaining all naturally obtained peptides with activity against Leishmanias and ones for which Hemolytic value is available
            </div>
            <img
                className="section-image"
                src={i5}
                alt="example-2"
            />
            <div id="blast" className="section-heading">3. BLAST</div>
            <div className="section-description">
                For performing a BLAST search follow the following steps
            </div>
            <img
                className="section-image"
                src={i6}
                alt="blast"
                style={{ marginTop: '-2rem', marginBottom: '2rem' }}
            />
            <div className="section-description">
                <b>E-value: </b>
                Indicates the statistical significance of how likely it is that the match is purely by chance. Hence, the lower the E value greater the significance of the match.
                <br /><br />
                <b>Bit Score: </b>
                This score indicates how good the alignment is, the greater the score the better alignment.
                <br /><br />
                <u>Difference between E value and Bit score:</u><br />
                The E-value will change with the size of the database, but the Bit Score remains constant for different databases of varying sizes.
                <br /><br />
                <b>Reference: </b>
                Madden T. The BLAST Sequence Analysis Tool. 2002 Oct 9 [Updated 2003 Aug 13]. In: McEntyre J, Ostell J, editors. The NCBI Handbook [Internet]. Bethesda (MD): National Center for Biotechnology Information (US); 2002-. Chapter 16. Available from:
                {' '}<a
                    href="https://www.ncbi.nlm.nih.gov/books/NBK21097/"
                    target="_blank"
                    rel="noreferrer"
                >https://www.ncbi.nlm.nih.gov/books/NBK21097/</a>
            </div>
            <img
                className="section-image"
                src={i7}
                alt="result"
                style={{ marginBottom: '0rem' }}
            />
            <div id="composition" className="section-heading">4. Amino Acid Composition</div>
            <div className="section-description">
                This tool will help to obtain the peptides with specific numbers and types of amino acids.<br />
                Click on the number of amino acids and follow the steps given below:
            </div>
            <img
                className="section-image"
                src={i8}
                alt="aac"
                style={{ marginBottom: '-2rem' }}
            />
            <div className="section-description">
                Click on the physical properties mentioned and follow the steps given below:
            </div>
            <img
                className="section-image"
                src={i9}
                alt="ppc"
                style={{ marginBottom: '2rem' }}
            />
            <div id="submission" className="section-heading">5. Data Submission</div>
            <img
                className="section-image"
                src={i10}
                alt="submit"
            />
        </div>
    </div >
}
export default Guide;