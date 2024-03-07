import { useForm } from 'react-hook-form';
import { Grid, Button } from '@mui/material';
import { Input, MultilineTextField } from '../../Common';

interface InviteCoderFormProps {
  onCancel: () => void;
  onInvite: (data: any) => void;
}

const InviteCoderForm = ({ onCancel, onInvite }: InviteCoderFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleCoderForm = (data: any) => {
    console.log(data); // API logic will be here
    onInvite(data);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(handleCoderForm)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Input
              type="email"
              id="email"
              name="email"
              label="Email"
              isRequired={true}
              register={register}
              error={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <MultilineTextField
              name="personalMessage"
              register={register}
              label="Let your coders know why you're inviting them"
              id="customId"
              rows={6}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '1rem'
            }}>
            <Button onClick={onCancel} variant="outlined" sx={{ marginRight: 2 }}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Invite
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default InviteCoderForm;
