import { useState } from 'react';
import { Box, Switch, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

interface ColumnProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

function formatDate(dateString: any) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}
const renderFormattedDate = (params: any) => {
  const formattedDate = formatDate(params.row.created);

  return (
    <Typography className="data-grid-row--items" variant="caption">
      {formattedDate}
    </Typography>
  );
};

//API data fetch for Active Jobs & Completed Jobs//
export const createActiveColumn = ({ checked, setChecked }: ColumnProps): GridColDef[] => {
  return [
    {
      field: 'title',
      headerName: 'Job Title',
      width: 156
    },
    {
      field: 'created',
      headerName: 'Date Of Posting',
      width: 156,
      renderCell: renderFormattedDate
    },
    {
      field: 'user',
      headerName: 'Client Name',
      width: 156
    },
    {
      field: 'skills',
      headerName: 'Tech Stack',
      width: 156
    },
    {
      field: 'budget_type',
      headerName: 'Job Type',
      width: 156,
      renderCell: (params: any) => {
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {params.row.budget_type?.toLowerCase()}
          </Typography>
        );
      }
    },
    {
      field: 'maximum_budget',
      headerName: 'Budget',
      width: 156,
      renderCell: (params: any) => {
        function formatBudget(row: any) {
          if (row.budget_type === 'HOURLY' && row.minimum_hourly_rate !== null) {
            return `$${row.minimum_hourly_rate} - $${row.maximum_hourly_rate}/hr`;
          } else if (row.minimum_hourly_rate === null) {
            return `$${row.maximum_hourly_rate}/hr`;
          } else {
            return `$${row.maximum_budget}`;
          }
        }
        const formattedBudget = formatBudget(params.row);
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {formattedBudget}
          </Typography>
        );
      }
    },
    {
      field: 'preferred_coder_residence',
      headerName: 'Location',
      width: 156
    },
    {
      field: 'is_enabled',
      headerName: 'Manage',
      renderCell: (params: any) => (
        <Box id="switchJobPosting">
          <Switch
            value={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
        </Box>
      )
    }
  ];
};

//API data fetch for New Job Offers//

export const createJobColumn = ({ checked, setChecked }: ColumnProps): GridColDef[] => {
  return [
    {
      field: 'title',
      headerName: 'Job Title',
      width: 156
    },
    {
      field: 'created',
      headerName: 'Date Of Posting',
      width: 156,
      renderCell: renderFormattedDate
    },
    {
      field: 'user',
      headerName: 'Client Name',
      width: 156
    },
    {
      field: 'skills',
      headerName: 'Tech Stack',
      width: 156
    },
    {
      field: 'proposal_type',
      headerName: 'Job Type',
      width: 156,
      renderCell: (params: any) => {
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {params.row.proposal_type?.toLowerCase()}
          </Typography>
        );
      }
    },
    {
      field: 'budget',
      headerName: 'Budget',
      width: 156,
      renderCell: (params: any) => {
        const isHourly = params.row.proposal_type === 'HOURLY';
        const cost = isHourly ? params.row.hourly_rate : params.row.total_project_cost;

        return (
          <Typography className="data-grid-row--items" variant="caption">
            {isHourly ? `$${cost}/hr` : `$${cost}`}
          </Typography>
        );
      }
    },
    {
      field: 'preferred_coder_residence',
      headerName: 'Location',
      width: 156
    },
    {
      field: 'status',
      headerName: 'Offer Status',
      width: 156
    },
    {
      field: 'is_enabled',
      headerName: 'Manage',
      renderCell: (params: any) => (
        <Box id="switchJobPosting">
          <Switch
            value={checked}
            onChange={(event) => {
              setChecked(event.target.checked);
            }}
          />
        </Box>
      )
    }
  ];
};
