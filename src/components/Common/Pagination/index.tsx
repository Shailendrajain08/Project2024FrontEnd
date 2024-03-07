import React, { ChangeEvent } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Pagination as MUIPagination,
  PaginationItem,
  ButtonBase
} from '@mui/material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

type TOptions = {
  [key: string]: string | number;
};

interface IPagination {
  defaultOption: TOptions;
  options: TOptions[];
  pageCount: number;
  currentPage: number;
  handlePageChange: (event: ChangeEvent<unknown>, value: number) => void;
}

const Pagination: React.FC<IPagination> = ({
  defaultOption,
  options = [],
  pageCount,
  currentPage,
  handlePageChange
}) => {
  return (
    <Box display="flex" justifyContent={'space-between'} alignItems={'center'} flex={'auto'}>
      <Box display={'flex'} alignItems={'center'} columnGap={'10px'}>
        <Box width={'70px'}>
          <FormControl fullWidth size="small">
            <Select value={defaultOption?.value} disabled>
              {options.map((option: TOptions, i: number) => {
                return (
                  <MenuItem
                    key={i}
                    value={option?.value}
                    disabled={option?.value === defaultOption?.value}>
                    {option?.label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography variant="subtitle2" color={'rgba(0, 0, 0, 0.60)'}>
            Entries per page
          </Typography>
        </Box>
      </Box>
      <Box>
        <MUIPagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          shape="rounded"
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              components={{
                last: (props) => (
                  <ButtonBase {...props}>
                    <SkipNextIcon />
                  </ButtonBase>
                ),
                first: (props) => (
                  <ButtonBase {...props}>
                    <SkipPreviousIcon />
                  </ButtonBase>
                )
              }}
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Pagination;
