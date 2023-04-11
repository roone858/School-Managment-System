import Card from "./Card";

export default function ListGroup() {
  return (
    <>
      <h3>Courses</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <Card />
        </li>
        <li className="list-group-item"><Card /></li>
        <li className="list-group-item"><Card /></li>
        <li className="list-group-item"><Card /></li>
        <li className="list-group-item"><Card /></li>
      </ul>
    </>
  );
}
