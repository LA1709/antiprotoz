import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './home.scss';

const Home = () => {
    return <div className="home-wrapper">
        <section className="first-container">
            <div className="logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="menu-container">
                <Link to="/browse"> Browse </Link>
                <Link to="/search"> Search </Link>
                <Link to="/tools"> Tools </Link>
                <Link to="/download"> Download </Link>
                <Link to="/submission"> Data Submission </Link>
                <Link to="/guide"> Guide </Link>
            </div>
        </section>
        <section className="second-container">
            <span>AntiProtoZ is a manually-curated database solely dedicated to peptides with activity against protozoan species.</span>
            <span>A total of 280 peptides have been included all the peptides included have been experimentally verified.</span>
            <span>The database provides elaborate description of the peptides accompanying the Uniport and PubMed id of the literature referred.</span>
        </section>
        <section className="third-container">
            <div className="title">Anti-Protozoal Peptides</div>
            <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque tenetur nobis libero nihil aliquam exercitationem quis cum eos optio sed maiores. Quibusdam dolores nisi vel nostrum aspernatur, dolorum esse!
            </div>
        </section>
        <section className="fourth-container">
            <div className="heading">
                Database Satistics
                <div className="line" />
            </div>
            <div className="stats">
                <div className="stats-text">
                    <span>280</span>
                    <span>Total Peptides in database</span>
                </div>
                <div className="stats-text">
                    <span>4,321</span>
                </div>
                <div className="stats-text">
                    <span>789</span>
                </div>
            </div>
            <div className="stats">
                <div className="stats-text">
                    <span>1,234</span>
                </div>
                <div className="stats-text">
                    <span>432</span>
                </div>
                <div className="stats-text">
                </div>
            </div>
        </section>
    </div>
}
export default Home;