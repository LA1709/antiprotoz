import { useState } from 'react';
import { Link } from 'react-router-dom';
import jsonexport from 'jsonexport/dist';
import './table.scss';
import DownloadIcon from '../assets/download.svg';
import TrashIcon from '../assets/trash.svg';
import NoData from '../assets/no-data.json';
import { fetchPeptides } from '../sql/fetchPeptides';

const Table = ({ columns, data, onClickCallback = null }) => {
  const [processing, setProcessing] = useState(false);

  const handleDownload = e => {
    e.preventDefault();
    setProcessing(true);
    fetchPeptides(
      Object.values(data).reduce((prev, curr) =>
        [...prev, curr.ID], []
      ), (jsonData) => jsonexport(
        jsonData, (err, csv) => {
          if (err) {
            setProcessing(false);
            return console.log(err);
          }
          let el = document.createElement('a');
          el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
          el.setAttribute('download', "Antiprotoz-Data.csv");
          el.style.display = 'none';
          document.body.appendChild(el);
          el.click();
          document.body.removeChild(el);
          setProcessing(false);
        }
      )
    );
  }

  return (
    <div className='table-wrapper'>
      {data === undefined ?
        <div className="loader" />
        : !data ?
          <div className="help-text">Please select the Search Parameters and <u>Press Search</u> to continue.</div>
          : !data.length ?
            <lottie-player
              src={JSON.stringify(NoData)}
              background="transparent"
              speed="1"
              loop
              autoplay
            />
            : [
              <div className="table-heading" key="table-heading">
                <span><u>Results</u> ({data.length} entries)</span>
                <button onClick={handleDownload} disabled={processing}>
                  <img src={DownloadIcon} alt="i" />
                  Download
                </button>
              </div>,
              <table key="actual-table">
                <thead>
                  <tr>
                    {columns.map(column =>
                      <th key={column.key}>{column.name}</th>
                    )}
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((val, idx) =>
                    <tr key={idx}>
                      {columns.map((column, i) =>
                        <td key={`${column.key}-${i}`} title={val[column.key]}>
                          {val[column.key] ?? "-"}
                        </td>
                      )}
                      <td>
                        {!onClickCallback ? <Link to={`/peptide/${val.ID}`}>
                          <button>View Details</button>
                        </Link> : <div className="action-container">
                          <button
                            onClick={() => onClickCallback(val.ID)}
                          >Edit</button>
                          <img src={TrashIcon} alt="delete" onClick={() => onClickCallback(val.ID, true)} />
                        </div>
                        }
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ]
      }
    </div >
  )
}

export default Table;