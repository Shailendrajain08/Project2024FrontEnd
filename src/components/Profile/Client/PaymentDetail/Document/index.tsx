import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import { FileInput, Select } from '../../../../Common';
import { EditI } from '../../type';

interface DetailProps {
  title?: string;
  register: any;
  errors: any;
  setValue: any;
  getValues: any;
  name: any;
  edit: EditI;
  handleEdit: () => void;
}

const Document = ({
  title,
  register,
  errors,
  setValue,
  getValues,
  name,
  edit,
  handleEdit
}: DetailProps) => {
  return (
    <Box className="payment-document-form--wrapper">
      <Box>
        <Typography variant="h5" className="payment-document-form--heading">
          {title}
        </Typography>
      </Box>
      {edit.isEdit ? (
        <Box className="payment-document--select-field">
          <Select
            id="unique_id"
            name="uniqueid"
            label="Unique ID"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Box className="attach--file-wrapper">
            <FileInput
              register={register}
              name="uniquefile"
              label="Unique ID"
              setValue={setValue}
              // defaultValue={name}
              error={errors}
              getValues={getValues}>
              <Box className="attach-btn-wrapper">
                <Button component="span" className="attach-file-btn">
                  Choose file
                </Button>
              </Box>
            </FileInput>
          </Box>
          <Select
            id="tax_id"
            name="tax"
            label="Tax ID"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <TextField id="taxID" label="Enter your Tax ID" {...register('taxid')} />
        </Box>
      ) : (
        <Box className="payment-document--select-field disable">
          <Select
            id="unique_id"
            name="uniqueid"
            label="Unique ID"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <Box className="attach--file-wrapper">
            <FileInput
              register={register}
              name="uniquefile"
              label="Unique ID"
              setValue={setValue}
              // defaultValue={name}
              error={errors}
              getValues={getValues}>
              <Box className="attach-btn-wrapper">
                <Button component="span" className="attach-file-btn">
                  Choose file
                </Button>
              </Box>
            </FileInput>
          </Box>
          <Select
            id="tax_id"
            name="tax"
            label="Tax ID"
            isRequired={false}
            register={register}
            defaultValue={''}
            error={errors}
            options={[{ value: '', label: '' }]}
          />
          <TextField id="taxID" label="Enter your Tax ID" {...register('taxid')} disabled />
        </Box>
      )}
    </Box>
  );
};
export default Document;
