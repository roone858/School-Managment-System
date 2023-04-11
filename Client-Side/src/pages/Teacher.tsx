import { AddButton } from "../layouts/AddButton";
import { Table } from "../Components/Table";
import { Outlet } from "react-router-dom";
import { TableRaw } from "../Components/TableRaw";
import { useDispatch, useSelector } from "react-redux";
interface Teacher {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
}
export const Teachers = () => {

  const teachers = useSelector((state: any) => state.teachers);


  const teachersRaws = teachers.map((teacher: Teacher) => (
    <TableRaw
      url="teachers"
      key={teacher.id}
      obj={teacher}
     
    />
  ));
  return (
    <div className="teachers">
      <AddButton  />
      <Outlet />
      <Table rows={teachersRaws} />
    </div>
  );
};
