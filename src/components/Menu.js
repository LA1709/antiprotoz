import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <Link to="/">Home</Link>
            <Link to="/browse">Browse</Link>
            <Link to="/search">Search</Link>
            <Link to="/enquire">Enquire</Link>
            <Link to="/submission">Data Submission</Link>
            <Link to="/guide">Guide</Link>
        </div>
    )
}

export default Menu;