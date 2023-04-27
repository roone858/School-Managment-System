

export const Table = ({rows,columns}:any) => {
  return (
     <div className="bg-fff" style={{background:"#fff"}}>
       <table className="table table-bordered table-sm bg-fff">
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
