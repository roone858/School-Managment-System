

export const Table = ({rows,columns}:any) => {
  return (
    
       <div style={{'maxHeight': '400px', 'overflowY': 'scroll'}} className="table-responsive  my-2">
         <table className="table my-0 bg-white table-bordered bg-fff">
            <thead className=" table-light">
              <tr>
         
                {columns.map((col :any)=>  <th key={col} scope="col">{col}</th>)}
              </tr>
            </thead>
            <tbody className="bg-fff">{rows}</tbody>
          </table>
       </div>
    
  )
}
