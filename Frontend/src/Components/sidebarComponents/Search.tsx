export default function Search(props: any) {
  return (
    <li>
      <i onClick={props.onClick} className="bx bx-search"></i>
      <input onChange={props.onChange} type="text" placeholder="Search..." />
      <span className="tooltip">Search</span>
    </li>
  );
}
