import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
  Typography,
  Button
} from '@mui/material';
import './index.css';
import { ClientTableTab } from './ClientTable';
import { CSVLink } from 'react-csv';

const ClientHeaderSection = () => {
  const [country, setCountry] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const [csvData, setCSVData] = useState<any[]>([]);

  return (
    <Box className="admin--client-table-box" display={'flex'} flexDirection={'column'}>
      <Box
        border={'1px solid rgba(0, 0, 0, 0.12)'}
        borderBottom={'none'}
        borderRadius={'8px 8px 0px 0px'}>
        <Box display={'flex'} padding={'24px'}>
          {' '}
          <Typography variant="h3">Clients</Typography>
        </Box>

        <Box
          display={'flex'}
          padding={'0px 24px 26px 24px'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Box>
            <FormControl className="client-header-select--box" size="small">
              <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                defaultValue="USA"
                id="demo-simple-select-helper"
                value={country}
                label="Country"
                onChange={handleChange}>
                <MenuItem value={10}>USA</MenuItem>
                <MenuItem value={20}>Anywhere</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <CSVLink data={csvData} filename={'client_data.csv'}>
              <Button
                className="client-section-csv-button"
                variant="contained"
                onClick={() => setCSVData([])}>
                DOWNLOAD CSV
              </Button>
            </CSVLink>
          </Box>
        </Box>
      </Box>

      <Box>
        <ClientTableTab setCSVData={setCSVData} />
      </Box>
    </Box>
  );
};

export default ClientHeaderSection;
