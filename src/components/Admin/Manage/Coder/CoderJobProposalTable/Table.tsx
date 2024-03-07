// TableComponent.jsx
import React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

interface ITTable {
  columns: GridColDef[];
  data: any[];
  onRowSelected: (row: any) => void;
}

const TableComponent: React.FC<ITTable> = ({ columns, data, onRowSelected }) => {
  const threeData = data.slice(0, 3);

  const getRowId = (row: { email: string }) => row.email;

  const handleSelectionChange = (selectionModel: GridRowSelectionModel) => {
    const selectedIDs = new Set(selectionModel);
    const selectedRow = threeData.find((row) => selectedIDs.has(getRowId(row)));
    if (selectedRow) {
      onRowSelected(selectedRow);
    }
  };

  return (
    <DataGrid
      className="coder-admin-table"
      rows={threeData}
      columns={columns}
      getRowId={getRowId}
      onRowSelectionModelChange={handleSelectionChange}
      hideFooterPagination={true}
      hideFooter={true}
      rowHeight={67}
    />
  );
};

export default TableComponent;
