import React, { useState } from 'react';
import { Chip, Box, Switch, Typography, Tooltip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './index.css';
import { AdminMockData } from '../../types';
import constant from '../../../../../constants/constant.json';

interface ITable {
  data: AdminMockData[];
}

const AllJobs: React.FC<ITable> = ({ data }) => {
  const [switchStates, setSwitchStates] = useState(
    data.map((job: any) => ({ id: job.id, checked: job.is_enabled }))
  );

  const handleChange = (id: string) => {
    setSwitchStates((prevSwitchStates) =>
      prevSwitchStates.map((switchState) =>
        switchState.id === id ? { ...switchState, checked: !switchState.checked } : switchState
      )
    );
  };

  const column1: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Job Title',
      width: 156,
      renderCell: (params: any) => {
        const jobTitle = params.row.title;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {jobTitle}
          </Typography>
        );
      }
    },

    {
      field: 'created',
      headerName: 'Date of Posting',
      width: 154,
      headerClassName: 'custom-header',
      renderCell: (params: any) => {
        const date = new Date(params.row.created);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        });
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {formattedDate}
          </Typography>
        );
      }
    },

    {
      field: 'skills',
      headerName: 'Tech Stack',
      width: 124,
      renderCell: (params: any) => {
        const skills = params.row.skills;
        if (skills.length > 1) {
          const truncatedSkills = skills.slice(0, 1).join(', ') + ', ...';
          return (
            <Tooltip title={skills} arrow>
              <Typography className="data-grid-row--items" variant="caption">
                {truncatedSkills}
              </Typography>
            </Tooltip>
          );
        } else {
          const singleSkill = skills.join(', ');
          return (
            <Typography className="data-grid-row--items" variant="caption">
              {singleSkill}
            </Typography>
          );
        }
      }
    },

    {
      field: 'budget_type',
      headerName: 'Job Type',
      width: 113,
      renderCell: (params: any) => {
        const budgetType = params.row.budget_type;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {budgetType}
          </Typography>
        );
      }
    },

    {
      field: 'budget',
      headerName: 'Budget',
      width: 110,
      renderCell: (params: any) => {
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {params.row.budget_type === 'HOURLY' && params.row.minimum_hourly_rate !== null
              ? `$${params.row.minimum_hourly_rate} - $${params.row.maximum_hourly_rate}/hr`
              : params.row.minimum_hourly_rate === null
                ? `$${params.row.maximum_hourly_rate}/hr`
                : `$${params.row.maximum_budget}`}
          </Typography>
        );
      }
    },

    {
      field: 'preferred_coder_residence',
      headerName: 'Location',
      width: 110,
      renderCell: (params) => {
        const loc = params.row.preferred_coder_residence;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {loc === 'USA_ONLY' ? loc : 'Anywhere'}
          </Typography>
        );
      }
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      renderCell: (params: any) => {
        const status = params.row.status;
        let label = '';
        let styleChip = '';
        switch (status) {
          case 'Active':
            label = 'Active';
            styleChip = 'chip--active';
            break;
          case 'Completed':
            label = 'Completed';
            styleChip = 'chip--completed';
            break;
          case 'Open':
            label = 'Open';
            styleChip = 'chip--open';
            break;
          case 'Expired':
            label = 'Expired';
            styleChip = 'chip--expired';
            break;
          default:
            styleChip = '';
        }

        return (
          <Box>
            <Chip label={label} className={styleChip} />
          </Box>
        );
      }
    },

    {
      field: 'is_enabled',
      headerName: 'Manage',
      renderCell: (params) => (
        <Switch
          size="small"
          checked={
            switchStates.find((switchState) => switchState.id === params.row.id)?.checked || false
          }
          onChange={() => handleChange(params.row.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      )
    }
  ];

  return (
    <Box className="data--grid--client-tables">
      <DataGrid
        rows={data}
        columns={column1}
        hideFooterPagination={true}
        hideFooter={true}
        rowHeight={constant.datagrid.rowHeight}
      />
    </Box>
  );
};

export default AllJobs;
