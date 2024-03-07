import { Fragment, useEffect } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Box,
  Card
} from '@mui/material';
import { Controller, UseFormSetValue, FieldValues, Control } from 'react-hook-form';
import '../index.css';
interface ListsI {
  [key: string]: string | number | boolean;
}
interface IRadioButtons {
  name: string;
  lists: ListsI[];
  label: string;
  defaultValue: any;
  setValue: UseFormSetValue<FieldValues>;
  control: Control | undefined;
  isCardView?: boolean;
  isRequired?: boolean;
  icon?: any;
}

const RadioButtons = ({
  name,
  lists,
  label,
  control,
  defaultValue,
  setValue,
  isCardView,
  isRequired,
  icon
}: IRadioButtons) => {
  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  const renderRadioGroupElements = (field: any) => {
    return (
      <RadioGroup {...field} className="radio-form-wrapper">
        {lists.map((list, i) => {
          return (
            <Box key={i}>
              <Box display={'flex'} flexDirection={'column'}>
                <FormControlLabel
                  value={list?.value}
                  control={<Radio />}
                  className="radio-form"
                  label={
                    <Typography variant="body1" component="span" className="radio-card-heading">
                      {list?.label}
                    </Typography>
                  }
                />
                {list?.helperText && (
                  <Typography
                    variant="body2"
                    component="div"
                    textAlign="start"
                    className="radio-card-text">
                    {list?.helperText}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </RadioGroup>
    );
  };

  return (
    <FormControl className="radio-card-section" fullWidth>
      <Box className="radio-header-wrapper">
        <Box className="radio-header--label-imp">
          {label && (
            <Typography variant="h3" textAlign="start">
              {label}
            </Typography>
          )}
          {isRequired && <Typography className="imp-star">*</Typography>}
        </Box>
        <Box className="radio-header--green-marker">
          {icon && (
            <Typography component="span" className="green-marker">
              {icon}
            </Typography>
          )}
        </Box>
      </Box>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) =>
          isCardView ? (
            <Card className="radio-card">{renderRadioGroupElements(field)}</Card>
          ) : (
            renderRadioGroupElements(field)
          )
        }
      />
    </FormControl>
  );
};

export default RadioButtons;
