import Menu from '../components/Menu';
import './guide.scss';
import image from '../assets/guide/1.png';

const Guide = () => {
    return <div className="guide-wrapper">
        <Menu />
        <div className="heading">Guide</div>
        <div className="description">
            On this page, we have provided instructions for the following:
            <ul>
                <li>Search</li>
                <li>Browse</li>
                <li>Blast</li>
                <li>Amino Acid Composition</li>
                <li>Data Submission</li>
            </ul>
        </div>
        <div className="guide-section">
            <div className="section-heading">1. Browse</div>
            <div className="section-description">
                The Browse section will allow the users to obtain all the peptides belonging to the categories listed under the respective category heading. One can also explore the sub-groups formed, by selecting mutiple options for the same.
            </div>
            <img
                className="section-image"
                src={image}
                alt="browse"
            />
        </div>
    </div >
}
export default Guide;