import { useForm } from 'react-hook-form';
import { Grid, Button } from '@mui/material';
import { Input, MultilineTextField, CheckBox } from '../../Common';

interface InviteCoworkerFormProps {
  onCancel: () => void;
  onInvite: (data: any) => void;
}

const InviteCoworkerForm = ({ onCancel, onInvite }: InviteCoworkerFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm();

  const handleCowerkerForm = (data: any) => {
    console.log(data); // API logic will be here
    onInvite(data);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit(handleCowerkerForm)}>
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
              label="Let your coworkers know why you're inviting them"
              id="customId"
              rows={6}
            />
          </Grid>
          <CheckBox
            lists={[
              {
                name: 'Coworker',
                label: 'Also allow these coworkers to hire and pay with this account.',
                defaultChecked: true
              }
            ]}
            name="Coworker"
            setValue={setValue}
            control={control}
            sxStyles={{ marginLeft: 3 }}
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
      </form>
    </div>
  );
};

export default InviteCoworkerForm;
