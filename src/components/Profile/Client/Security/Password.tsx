import { Button, Card, Grid, Typography } from '@mui/material';
import { IPassword } from '../type';

const Password = ({ setIsOpen }: IPassword) => {
  return (
    <Card sx={{ p: 2, marginBottom: 3 }}>
      <Typography variant="h5" textAlign={'start'} marginBottom={2}>
        {'Security'}
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={7} textAlign={'start'}>
          <Typography variant="subtitle2">{`Password has been sent`}</Typography>
          <Typography variant="caption" marginLeft={1}>
            {`Choose a strong and unique password that's at least 8 character long.`}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          {' '}
          <Button
            variant="contained"
            onClick={() => {
              setIsOpen(true);
            }}>
            Change Password
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Password;
