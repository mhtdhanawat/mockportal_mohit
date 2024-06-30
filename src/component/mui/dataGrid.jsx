import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function CustomGridTable({ rows, columns, pageSize, classes }) {
  return (
    <div style={classes}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSize },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
