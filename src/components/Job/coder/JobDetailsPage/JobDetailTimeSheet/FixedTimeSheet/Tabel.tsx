import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface ITTable {
  Columns: GridColDef[];
  data: any[];
}

const FixedTable: React.FC<ITTable> = ({ Columns, data }) => {
  return (
    <Box>
      <DataGrid
        className="timesheet-table"
        rows={data}
        columns={Columns}
        hideFooterPagination={true}
        hideFooter={true}
        rowHeight={86}
      />
    </Box>
  );
};

export default FixedTable;
