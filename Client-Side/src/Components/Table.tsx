

export const Table = (props:any) => {
  return (
     <table className="table">
        <thead className=" table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
  )
}
