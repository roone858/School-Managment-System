

export const Table = (props:any) => {
  return (
     <div className="bg-fff" style={{background:"#fff"}}>
       <table className="table table-bordered bg-fff">
          <thead className=" table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Address</th>
              <th scope="col">Operations</th>
            </tr>
          </thead>
          <tbody className="bg-fff">{props.rows}</tbody>
        </table>
     </div>
  )
}
