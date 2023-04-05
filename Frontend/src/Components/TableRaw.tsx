import { Link } from "react-router-dom"

export const TableRaw = ({entity,onDeleteClick,onUpdateClick,onDetailsClick,url}:any) => {
  return (
     <tr key={entity.id}>
       <th scope="row">{entity.id}</th>
       <td>{entity.firstname}</td>
       <td>{entity.lastname}</td>
       <td>{entity.address}</td>
       <td>
       {/* to={"/students/"+entity.id} */}
         <Link onClick={()=>{  window.scrollTo(0, 0)}} to={`/${url}/`+entity.id} type="button" className="btn btn-primary btn-sm ">
           Details
         </Link >
         <button type="button" className="btn btn-success btn-sm ml-3 mr-3">
           Update
         </button>
         <button
           onClick={() => onDeleteClick(entity.id)}
           type="button"
           className="btn btn-danger btn-sm "
         >
           Delete
         </button>
       </td>
     </tr>
   )
}
