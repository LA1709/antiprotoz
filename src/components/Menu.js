import { Link } from 'react-router-dom';
import './menu.scss';
import Logo from '../assets/logo.png';

const Menu = () => {
    const selected = window.location.pathname;
    return <div className='menu-wrapper'>
        <Link to="/"><img src={Logo} alt="logo" /></Link>
        <div className="links-wrapper">
            <Link to="/browse" className={selected === '/browse' ? 'disabled' : ''}>Browse</Link>
            <Link to="/search" className={selected === '/search' ? 'disabled' : ''}>Search</Link>
            <Link to="/tools" className={selected === '/tools' ? 'disabled' : ''}>Tools</Link>
            <Link to="/download" className={selected === '/download' ? 'disabled' : ''}>Download</Link>
            <Link to="/submit" className={selected === '/submit' ? 'disabled' : ''}>Data Submission</Link>
            <Link to="/guide" className={selected === '/guide' ? 'disabled' : ''}>Guide</Link>
        </div>
    </div>
}

export default Menu;