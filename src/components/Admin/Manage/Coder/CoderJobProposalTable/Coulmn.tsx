import { Box, Switch, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import './index.css';
import { LinkidinOutlineSvg } from '../../../../../assets/svg/LinkidinSvg';

const renderSwitch = (params: any) => {
  const isActive = params.row.is_active;

  const handleChange = (event: any) => {
    // Handle the change event if needed, e.g., updating the status in your state or backend
    console.log(
      `Switch for ${params.row.id} is now ${event.target.checked ? 'active' : 'inactive'}`
    );
  };

  return <Switch checked={isActive} onChange={handleChange} color="primary" />;
};

export const Codercolumns: GridColDef[] = [
  {
    field: 'fullName',
    headerName: 'Name',
    width: 113,
    renderCell: (params) => {
      return (
        <>
          <Typography
            variant="caption"
            color={'rgba(0, 0, 0, 0.6)'}
            className="coder-data-grid-row--items">{`${params.row.first_name} ${params.row.last_name}`}</Typography>
        </>
      );
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    // cellClassName: 'coder-data-grid-row--items',
    width: 154,
    renderCell: (params: any) => {
      const emailId = params.row.email;
      return (
        <Box>
          <Typography
            className="coder-data-grid-row--items"
            color={'rgba(0, 0, 0, 0.6)'}
            variant="caption">
            {emailId}
          </Typography>
        </Box>
      );
    }
  },
  {
    field: 'skill',
    headerName: 'Primary Skills',
    width: 140,
    renderCell: (params) => {
      const primarySkills = params.row.skill
        .filter((skill: any) => skill.skill_type === 'PRIMARY')
        .map((skill: any, index: any) => (
          <Typography className="coder-data-grid-row--items" variant="caption" key={index}>
            {skill.technology.name}
          </Typography>
        ));

      return <>{primarySkills}</>;
    }
  },
  {
    field: 'total_years_of_experience',
    headerName: 'Years of Experience',
    width: 124,
    renderCell: (params: any) => {
      const total_years_of_experience = params.row.total_years_of_experience;
      return (
        <Typography className="coder-data-grid-row--items" variant="caption">
          {total_years_of_experience} Years
        </Typography>
      );
    }
  },
  {
    field: 'phone',
    headerName: 'Phone No',
    width: 114,
    renderCell: (params: any) => {
      const phoneNo = params.row.phone;
      return (
        <Typography className="coder-data-grid-row--items" variant="caption">
          {phoneNo}
        </Typography>
      );
    }
  },
  {
    field: 'username',
    headerName: 'Username',
    width: 118,
    renderCell: (params: any) => {
      const username = params.row.username;
      return (
        <Typography className="coder-data-grid-row--items" variant="caption">
          {username}
        </Typography>
      );
    }
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 104,
    renderCell: (params: any) => {
      const Country = params.row.country;
      return (
        <Typography className="coder-data-grid-row--items" variant="caption">
          {Country}
        </Typography>
      );
    }
  },
  {
    field: 'state',
    headerName: 'State',
    width: 85,
    renderCell: (params: any) => {
      const state = params.row.state;
      return (
        <Typography className="coder-data-grid-row--items" variant="caption">
          {state}
        </Typography>
      );
    }
  },
  {
    field: 'linkedin_url',
    headerName: 'Linkedin',
    width: 106,
    renderCell: (params: any) => {
      const linkedin_url = params.row.linkedin_url;
      return (
        <Typography
          onClick={() => (window.location.href = linkedin_url)}
          className="coder-data-grid-row--items-icon">
          <Box className="linkidin-outline-box">
            <LinkidinOutlineSvg />
          </Box>
        </Typography>
      );
    }
  },
  {
    field: 'active',
    headerName: 'Active Status',
    width: 93,
    renderCell: renderSwitch
  },
  {
    field: 'date_joined',
    width: 114,
    headerName: 'Onboarding Date ',
    renderCell: (params: any) => {
      const date_joined = params.row.date_joined;
      return <Typography className="coder-data-grid-row--items">{date_joined}</Typography>;
    }
  }
];
