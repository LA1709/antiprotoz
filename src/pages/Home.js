import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './home.css';

const Home = () => {
    return (<>
        <div className="home-wrapper">
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
                <p>AntiProtoZ is a manually-curated database solely dedicated to peptides with activity against protozoan species.</p>
                <p>A total of 280 peptides have been included all the peptides included have been experimentally verified.</p>
                <p>The database provides elaborate description of the peptides accompanying the Uniport and PubMed id of the literature referred.</p>
            </div>
            <div className="menu-container">
                <Link to="/"> Home </Link>
                <Link to="/browse"> Browse </Link>
                <Link to="/export"> Export Data </Link>
                <Link to="/submission"> Data Submission </Link>
                <Link to="/guide"> Guide </Link>
            </div>
        </div>
    </>)
}
export default Home;