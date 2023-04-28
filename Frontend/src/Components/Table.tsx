

export const Table = ({rows,columns}:any) => {
  return (
    
       <table className="table bg-white table-bordered table-sm bg-fff">
          <thead className=" table-light">
            <tr>
            
              {columns.map((col :any)=>  <th key={col} scope="col">{col}</th>)}
            </tr>
          </thead>
          <tbody className="bg-fff">{rows}</tbody>
        </table>
    
  )
}
