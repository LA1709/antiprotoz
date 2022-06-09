import './table.scss';

const Table = ({ columns, data }) => {
    return (
        <div className='table-wrapper'>
            {data === undefined ?
                <div>Loading</div>
                : (!data) ?
                    <div>No Data</div>
                    :
                    <table>
                        <thead>
                            <tr>
                                {columns.map(column =>
                                    <th>{column.name}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(val =>
                                <tr>
                                    {columns.map(column =>
                                        <td>{val[column.key] ?? "-"}</td>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Table;