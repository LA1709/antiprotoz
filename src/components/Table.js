import './table.scss';
import { Link } from 'react-router-dom';

const Table = ({ columns, data }) => {
  return (
    <div className='table-wrapper'>
      {data === undefined ?
        <div className="loader" />
        : !data ?
          <div>Please select the Search Parameters and <u>Press Search</u> to continue.</div>
          : !data.length ?
            <div>No Data</div>
            :
            <table>
              <thead>
                <tr>
                  {columns.map(column =>
                    <th key={column.key}>{column.name}</th>
                  )}
                  <th>Action</th>
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
                      <Link to={`/peptide/${val.PubmedID}`}>
                        <button>View Details</button>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
      }
    </div>
  )
}

export default Table;