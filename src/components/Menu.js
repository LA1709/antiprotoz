import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    const selected = window.location.pathname;
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
            <Link to="/tools" className={selected.match('/tools/') ? 'disabled' : ''}>Tools</Link>
            <Link to="/overview" className={selected === '/overview' ? 'disabled' : ''}>Data Visualisation</Link>
            <Link to="/submit" className={selected === '/submit' ? 'disabled' : ''}>Data Submission</Link>
            <Link to="/guide" className={selected === '/guide' ? 'disabled' : ''}>Guide</Link>
        </div>
    </div>
}

export default Menu;