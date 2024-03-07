import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TimeSheetTable = ({ columns, data }: any) => {
  const getRowId = (row: any) => row.transactionId;
  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 5 } }
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
};

export default TimeSheetTable;
