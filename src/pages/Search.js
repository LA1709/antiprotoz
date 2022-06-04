import Menu from '../components/Menu';
import './search.scss';

const Search = () => {
    return (<>
        <Menu />
        <div className="search-wrapper">
            <p>AntiProtoZ is a manually-curated database solely dedicated to peptides with activity against protozoan species.</p>
            <p>A total of 280 peptides have been included all the peptides included have been experimentally verified.</p>
            <p>The database provides elaborate description of the peptides accompanying the Uniport and PubMed id of the literature referred.</p>
        </div>
    </>)
}
export default Search;