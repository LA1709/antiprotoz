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
            <div className="title-container">
                <div className="logo-container">
                    <span className="bigger">A</span>
                    <span className="smaller">ntiProtoZ</span>
                </div>
                <span className="subtitle">
                    Find your peptide
                </span>
            </div>
            <div className="menu-container">
                <Link to="/browse"> Explore </Link>
                <Link to="/search"> Search </Link>
                {/* <div className="grouped">
                    <Link to="/composition/aa"> AA composition </Link>
                    <Link to="/composition/pp"> PP composition </Link>
                </div> */}
                <Link to="/composition/aa"> Peptide Composition </Link>
                <Link to="/blast"> BLAST </Link>
                <Link to="/overview"> Data Visualisation </Link>
                <Link to="/submit"> Data Submission </Link>
                <Link to="/guide"> Guide </Link>
            </div>
        </section>
        <section className="second-container">
            <span><b>What is AntiProtoZ?</b></span>
            <span>AntiProtoZ is a manually curated database dedicated to antiprotozoal peptides (APPs). It compiles experimentally validated peptides active against diverse protozoan species, including details for each entry, including activity, physicochemical properties, chemical modifications, and literature references.</span>
            <br />
            <span><b>How to use it?</b></span>
            <span>The database has tools for exploring and analysing APPs. You can search by protozoan species or browse curated categories through the Explore feature. Additional utilities such as BLAST, amino acid composition search, and physicochemical property-based search provide quick retrieval of peptides with desired sequence composition. Real-time database statistics are available on the Visualization page. (For more info: <Link to="/guide">guide</Link>)</span>
            <br />
            <span><b>Who is it for?</b></span>
            <span>We designed AntiProtoZ to serve as a comprehensive and reliable resource for researchers studying protozoan pathogens and peptide-based therapeutics.</span>
        </section>
        <section className="third-container">
            <div className="title">What are Anti-Protozoal Peptides?</div>
            <div className="description">
                Antiprotozoal peptides (APPs) are a class of antimicrobial peptides that display activity against protozoan species. They may occur naturally in a wide range of organisms or be synthetically designed for enhanced activity. AntiProtoZ brings together APPs effective against both free-living and parasitic protozoa.
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