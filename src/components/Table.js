import { useState } from 'react';
import { Link } from 'react-router-dom';
import jsonexport from 'jsonexport/dist';
import './table.scss';
import DownloadIcon from '../assets/download.svg';

const Table = ({ columns, data }) => {
  const [processing, setProcessing] = useState(false);

  const handleDownload = e => {
    e.preventDefault();
    setProcessing(true);
    jsonexport(data, (err, csv) => {
      if (err) return console.log(err);
      let el = document.createElement('a');
      el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(csv));
      el.setAttribute('download', "Antiprotoz-Data.csv");
      el.style.display = 'none';
      document.body.appendChild(el);
      el.click();
      document.body.removeChild(el);
      setProcessing(false);
    });
  }

  return (
    <div className='table-wrapper'>
      {data === undefined ?
        <div className="loader" />
        : !data ?
          <div className="help-text">Please select the Search Parameters and <u>Press Search</u> to continue.</div>
          : !data.length ?
            <div>No Data</div>
            : [
              <div className="table-heading" key="table-heading">
                <u>Results</u>
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
                        <td key={`${column.key}-${i}`}>
                          {val[column.key] ?? "-"}
                        </td>
                      )}
                      <td>
                        <Link to={`/peptide/${val.ID}`}>
                          <button>View Details</button>
                        </Link>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ]
      }
    </div>
  )
}

export default Table;