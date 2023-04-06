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
            <Link to="/browse" className={selected.match('/browse') ? 'disabled' : ''}>Browse</Link>
            <Link to="/search" className={selected.match('/search') ? 'disabled' : ''}>Search</Link>
            <div
                className={`dropdown${(isOpen || selected.match('/composition/')) ? " opened" : ""}`}
                onClick={() => setIsOpen(prev => !prev)}
            >Composition{isOpen ?
                <UpIcon stroke="#382119" />
                : <DownIcon stroke="#382119" />}
            </div>
            {isOpen && <div className="options" onClick={() => setIsOpen(prev => !prev)}>
                <Link to="/composition/aa" className={selected.match('/composition/aa') ? 'disabled' : ''}>
                    Amino Acid
                </Link>
                <Link to="/composition/pp" className={selected.match('/composition/pp') ? 'disabled' : ''}>
                    Physical Properties
                </Link>
            </div>}
            <Link to="/blast" className={selected.match('/blast') ? 'disabled' : ''}>BLAST</Link>
            <Link to="/overview" className={selected.match('/overview') ? 'disabled' : ''}>Data Visualisation</Link>
            <Link to="/submit" className={selected.match('/submit') ? 'disabled' : ''}>Data Submission</Link>
            <Link to="/guide" className={selected.match('/guide') ? 'disabled' : ''}>Guide</Link>
        </div>
    </div>
}

export default Menu;