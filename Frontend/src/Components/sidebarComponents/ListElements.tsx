import { Link } from "react-router-dom";


interface item {
  name: string;
  icon: string;
  link:string ;
}

interface Props {
  items: item[];
}


function ListElements({ items }: Props) {
     const lis =items.map((item) => {
          return (
          
              <li key={item.name}>
                <Link to={item.link}>
                  <i className={"bx " + item.icon}></i>
                  <span className="links_name">{item.name}</span>
                </Link>
                <span className="tooltip">{item.name}</span>
              </li>
       
          );
        });
  return <> {lis}</>
}
export default ListElements;
