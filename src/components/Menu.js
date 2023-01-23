import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DownIcon } from '../assets/chevron-down.svg';
import { ReactComponent as UpIcon } from '../assets/chevron-up.svg';
import './menu.scss';

const Menu = () => {
    const selected = window.location.pathname;

    const [isOpen, setIsOpen] = useState(false);

    return <div className='menu-wrapper'>
        <Link to="/">
            <div className="logo-container">
                <span className="bigger">A</span>
                <span className="smaller">ntiProtoZ</span>
            </div>
        </Link>
        <div className="links-wrapper">
            <Link to="/browse" className={selected === '/browse' ? 'disabled' : ''}>Browse</Link>
            <Link to="/search" className={selected === '/search' ? 'disabled' : ''}>Search</Link>
            <div
                className={`dropdown${(isOpen || selected.match('/tools/')) ? " opened" : ""}`}
                onClick={() => setIsOpen(prev => !prev)}
            >Tools{isOpen ?
                <UpIcon stroke="#382119" />
                : <DownIcon stroke="#382119" />}
            </div>
            {isOpen && <div className="options">
                <Link to="/tools/blast" className={selected === '/tools/blast' ? 'disabled' : ''}>
                    BLAST Search
                </Link>
                <Link to="/tools/composition" className={selected === '/tools/composition' ? 'disabled' : ''}>
                    Protein composition
                </Link>
            </div>}
            <Link to="/overview" className={selected === '/overview' ? 'disabled' : ''}>Data Visualisation</Link>
            <Link to="/submit" className={selected === '/submit' ? 'disabled' : ''}>Data Submission</Link>
            <Link to="/guide" className={selected === '/guide' ? 'disabled' : ''}>Guide</Link>
        </div>
    </div>
}

export default Menu;