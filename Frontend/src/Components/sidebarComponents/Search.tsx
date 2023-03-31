interface Props{
     onClick:()=> void
}
export default function Search (props:Props){
     return (
          <li>
            <i onClick={props.onClick} className="bx bx-search"></i>
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
     )
}