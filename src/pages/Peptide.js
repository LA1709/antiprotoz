import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPeptide } from '../sql/fetchPeptide';
import Menu from '../components/Menu';
import './peptide.scss';

const Peptide = () => {
    const { id } = useParams();
    const [data, setData] = useState(undefined);

    useEffect(() => {
        setData(undefined);
        fetchPeptide(id, setData);
    }, [id])

    return <div className="peptide-wrapper">
        <Menu />
        {data === undefined ? <div className="loader" /> :
            !data.length ? <div>No such Peptide exists!</div> :
                Object.entries(data[0]).map(item => {
                if (item[1] && item[1].trim && item[1] !== item[1].trim())
                    console.log(item[0], `/${item[1]}/`);
                return <div>{item[0]}: {item[1] ?? '-'}</div>
            })
        }
    </div>
}

export default Peptide;