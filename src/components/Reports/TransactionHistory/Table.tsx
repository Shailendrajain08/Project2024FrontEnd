import { DataGrid } from '@mui/x-data-grid';
import { ITransactionTable } from '../type';

const TransactionTable = ({
  columns,
  data,
  pageSize = 5,
  pageSizeOptions = [5, 10, 25]
}: ITransactionTable) => {
  console.log('data', data);
  const getRowId = (row: any) => row.id;
  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: pageSize } }
        }}
        pageSizeOptions={pageSizeOptions}
      />
    </div>
  );
};

export default TransactionTable;
