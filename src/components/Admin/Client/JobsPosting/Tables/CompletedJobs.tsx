import React, { useState } from 'react';
import { Box, Switch, Typography, Avatar, AvatarGroup, Tooltip } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './index.css';
import { AdminMockData } from '../../types';
import constant from '../../../../../constants/constant.json';

interface ITable {
  data: AdminMockData[];
}

const CompletedJobs: React.FC<ITable> = ({ data }) => {
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
      field: 'start_date',
      headerName: 'Date Of Start',
      width: 154,
      renderCell: (params: any) => {
        const startDate = new Date(params.row.contracts.map((it: any) => it.start_date));
        const formattedDate = startDate.toLocaleDateString('en-US', {
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
      field: 'end_date',
      headerName: 'Date Of Completion',
      width: 154,
      renderCell: (params: any) => {
        const endDate = new Date(params.row.contracts.map((it: any) => it.end_date));
        const formattedDate = endDate.toLocaleDateString('en-US', {
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
      field: 'coder_avatar',
      headerName: 'Coder',
      width: 130,
      renderCell: (params: any) => {
        const coderAvatar = params.row.coder_avatar;

        return (
          <>
            <AvatarGroup id="avatar-gp-dimension" max={3}>
              {coderAvatar.map((avatarUrl: any, index: any) => (
                <Avatar
                  className="ind-avatar-dimension"
                  key={index}
                  src={avatarUrl}
                  alt={`Avatar ${index + 1}`}
                />
              ))}
            </AvatarGroup>
          </>
        );
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
      field: 'amt_released',
      headerName: 'Fund released',
      width: 110,

      renderCell: (params: any) => {
        const amtReleased = params.row.amt_released;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            $ {amtReleased}
          </Typography>
        );
      }
    },
    {
      field: 'preferred_coder_residence',
      headerName: 'Location',
      width: 110,
      renderCell: (params: any) => {
        const loc = params.row.preferred_coder_residence;
        return (
          <Typography className="data-grid-row--items" variant="caption">
            {loc === 'USA_ONLY' ? loc : 'Anywhere'}
          </Typography>
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

export default CompletedJobs;
