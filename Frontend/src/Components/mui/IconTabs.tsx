import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { SubjectsCards } from "../SubjectsCards";
import DataTable from "./DataTable";
import { Table } from "../Table";
export default function IconTabs({rows,columns}:any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
      
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab  icon={<TableRowsIcon fontSize={"large"}  />} aria-label="phone" />
        <Tab icon={<ViewModuleIcon fontSize={"large"} />} aria-label="favorite" />
      </Tabs>
      {value == 0 && <div><Table columns={columns} rows={rows}/></div>}
      {value == 1 && <SubjectsCards />}
    </div>
  );
}
