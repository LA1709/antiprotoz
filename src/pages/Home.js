import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStats } from '../sql/fetchStats';
// import Logo from '../assets/logo.png';
import './home.scss';

const Home = () => {

    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetchStats(setStats)
    }, [])

    return <div className="home-wrapper">
        <section className="first-container">
            <div className="logo-container">
                <span className="bigger">A</span>
                <span className="smaller">ntiProtoZ</span>
            </div>
            <div className="menu-container">
                <Link to="/browse"> Browse </Link>
                <Link to="/search"> Search </Link>
                <div className="grouped">
                    <Link to="/tools/composition"> Protein composition </Link>
                    <Link to="/tools/blast"> BLAST </Link>
                </div>
                <Link to="/overview"> Data Visualisation </Link>
                <Link to="/submit"> Data Submission </Link>
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
                Anti-protozoal peptides  are a subset of Antimicrobial peptides that show activity against protozoan species.
                <br />
                They consist of both natural and synthetic derived peptides.
            </div>
        </section>
        <section className="fourth-container">
            <div className="heading">
                Database Statistics
                <div className="line" />
            </div>
            {!!stats.length ? <>
                <div className="stats">
                    <div className="stats-text">
                        <span>{stats[0] ?? "-"}</span>
                        <span>Total Peptides in database</span>
                    </div>
                    <div className="stats-text">
                        <span>{stats[1] ?? "-"}</span>
                        <span>Unique Peptides</span>
                    </div>
                    <div className="stats-text">
                        <span>{stats[2] ?? "-"}</span>
                        <span>Unique articles</span>
                    </div>
                </div>
                <div className="stats">
                    <div className="stats-text">
                        <span>{stats[3] ?? "-"}</span>
                        <span>Peptides targeting free living organisms</span>
                    </div>
                    <div className="stats-text">
                        <span>{stats[4] ?? "-"}</span>
                        <span>Peptides targeting parasitic organisms</span>
                    </div>
                    <div className="stats-text">
                    </div>
                </div>
            </> : "Laoding..."}
        </section>
        <section className="fifth-container">
            <div className="heading">
                Contact
                <div className="line" />
            </div>
            <div className="description">
                <u>Email</u>
                <br />
                vikas1101@gmail.com
                <br />
            </div>
        </section>
    </div>
}
export default Home;