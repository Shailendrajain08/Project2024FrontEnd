import React, { useState } from 'react';
import { Chip, Box, Switch, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { formatBudget, formatDate, getStatusLabelAndStyle } from '../../../../../../helper/utils';

const AllTableJob = ({ data }: any) => {
  const [switchStates, setSwitchStates] = useState(
    data.map((job: any) => ({ id: job.id, checked: job.is_enabled }))
  );

  const handleChange = (id: string) => {
    setSwitchStates((prevSwitchStates: any[]) =>
      prevSwitchStates.map((switchState) =>
        switchState.id === id ? { ...switchState, checked: !switchState.checked } : switchState
      )
    );
  };

  const coderTable: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Job Title',
      width: 156,
      renderCell: (params: any) => {
        const jobTitle = params?.row?.title;
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
        const formattedDate = formatDate(date);
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
            <Typography className="data-grid-row--items" variant="caption">
              {truncatedSkills}
            </Typography>
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
    // this code will use for show avatar in the table
    // {
    //   field: 'avatar',
    //   headerName: 'Coder',
    //   width: 100,
    //   renderCell: (params: any) => {
    //     const avatar = params?.row?.coder_avatar?.[0]?.image; // Assuming the avatar image URL is in the first element of the coder_avatar array
    //     return <img src={avatar} alt="Avatar" style={{ width: '50px', borderRadius: '50%' }} />;
    //   }
    // },
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
        const hourlyRate: string = formatBudget(params.row);
        return (
          <Typography className="data-grid-row--items" variant="caption">
            ${hourlyRate}
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
        const status = params?.row?.status; // Ensure status is of type Status
        const { label, styleChip } = getStatusLabelAndStyle(status);

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
            switchStates.find((switchState: { id: any }) => switchState.id === params.row.id)
              ?.checked || false
          }
          onChange={() => handleChange(params.row.id)}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      )
    }
  ];

  return (
    <Box className="all--jobs-table">
      <DataGrid
        rows={data}
        columns={coderTable}
        hideFooterPagination={true}
        hideFooter={true}
        rowHeight={68}
      />
    </Box>
  );
};

export default AllTableJob;
