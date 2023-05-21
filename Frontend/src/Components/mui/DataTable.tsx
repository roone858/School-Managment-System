import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'section', headerName: 'section', width: 200 },
  { field: 'teacher_name', headerName: 'Teacher', width: 200 },
  { field: 'action', headerName: 'Action', width: 600 },
];

export default function DataTable({ rows }: any) {
  return (
    <div style={{ height: 400, width: '100%', background: '#fff' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        //    pageSize={5}
        //    rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
