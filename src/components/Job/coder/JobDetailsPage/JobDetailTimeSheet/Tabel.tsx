import React from 'react';
import { DataGrid, GridRowIdGetter } from '@mui/x-data-grid';
import { Box } from '@mui/material';

export interface ITTable {
  columns: any[];
  data: any[];
}

const Tabel: React.FC<ITTable> = ({ columns, data }) => {
  return (
    <Box>
      <DataGrid
        className="timesheet-table"
        rows={data}
        columns={columns}
        hideFooterPagination={true}
        hideFooter={true}
        rowHeight={86}
      />
    </Box>
  );
};

export default Tabel;
