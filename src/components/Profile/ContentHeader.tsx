import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
interface ContentHeaderProps {
  title?: string;
  isEdit?: boolean;
  toggleEditMode?: any;
}
export default function ContentHeader({
  toggleEditMode,
  isEdit = false,
  title = ''
}: ContentHeaderProps) {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 8 }} alignItems={'center'}>
        <Grid item xs={6} textAlign={'end'}>
          <Typography sx={{ fontSize: 17, fontWeight: '900' }}>{title}</Typography>
        </Grid>
        {!isEdit ? (
          <Grid item xs={6} textAlign={'end'}>
            <IconButton onClick={toggleEditMode}>
              <EditOutlinedIcon />
            </IconButton>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}
