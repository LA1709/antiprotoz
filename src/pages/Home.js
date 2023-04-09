import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchStats } from '../sql/fetchStats';
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
                    <Link to="/composition/aa"> AA composition </Link>
                    <Link to="/composition/pp"> PP composition </Link>
                </div>
                <Link to="/blast"> BLAST </Link>
                <Link to="/overview"> Data Visualisation </Link>
                <Link to="/submit"> Data Submission </Link>
                <Link to="/guide"> Guide </Link>
            </div>
        </section>
        <section className="second-container">
            <span>AntiProtoZ is a manually-curated database solely dedicated collection of peptides with antiprotozoal activity.</span>
            <span>The database contains experimentally verified peptides, and a detailed description for each peptide has PubMed Id and Uniport ID for literature and peptide reference.</span>
            <span>The database provides a search for peptides against particular Organisms or Species and a browse facility to explore the different categories of peptides.</span>
            <span>Additionally, tools for BLAST and amino acid composition and visualization of the current statistics are present.</span>
        </section>
        <section className="third-container">
            <div className="title">Anti-Protozoal Peptides</div>
            <div className="description">
                Anti-protozoal peptides  are a subset of Antimicrobial peptides that show activity against protozoan species.
                <br />
                These peptides can be natural or synthetic. Antiprotoz contains antiprotozoal peptides for both free-living and parasitic protozoan species.
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