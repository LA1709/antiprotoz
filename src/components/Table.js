import './table.scss';

const Table = ({ columns, data }) => {
    if (data === undefined) return <div>Loading</div>
    if (!data) return <div>No data</div>
    return (
        <div className='table-wrapper'>
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
        </div>
    )
}

export default Table;