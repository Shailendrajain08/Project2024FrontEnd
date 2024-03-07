import React, { Fragment } from 'react';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';

interface IconFieldProps {
  id: string;
  type: string;
  name: string;
  position: string;
  label?: string;
  size?: 'small' | 'medium';
  helperText?: string;
  PrimaryIcon: any;
  SecondaryIcon: any;
  iconPosition?: string[];
  register: any;
  error?: any;
  title?: string;
  placeholder?: string;
  primaryIconAction?: any;
  secondaryIconAction?: any;
}

const IconTextField = ({
  id,
  label,
  name,
  helperText = '',
  size,
  type,
  PrimaryIcon,
  SecondaryIcon,
  iconPosition = [],
  register,
  error,
  title,
  placeholder,
  primaryIconAction,
  secondaryIconAction
}: IconFieldProps) => {
  const [toggleIcon, setToggleIcon] = React.useState(false);
  const toggleIconAction = () => {
    setToggleIcon((show) => !show);
    if (toggleIcon) {
      primaryIconAction();
    } else {
      secondaryIconAction();
    }
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  type inputPropsType = { [key: string]: any };
  const inputProps: inputPropsType = {};
  const getIconButton = (inputAdornmentPosition: any) => {
    return (
      <InputAdornment position={inputAdornmentPosition}>
        <IconButton
          aria-label={label}
          onClick={toggleIconAction}
          onMouseDown={handleMouseDownPassword}
          edge="end">
          {toggleIcon ? <SecondaryIcon /> : <PrimaryIcon />}
        </IconButton>
      </InputAdornment>
    );
  };
  iconPosition.forEach((element) => (inputProps[`${element}Adornment`] = getIconButton(element)));

  return (
    <Fragment>
      {title && (
        <Typography variant="h6" textAlign="start" marginBottom="10px">
          {title}
        </Typography>
      )}
      <TextField
        name={name}
        helperText={helperText ? helperText : error[name]?.message}
        type={type}
        label={label}
        placeholder={placeholder}
        id={id}
        fullWidth
        size={size}
        disabled={false}
        InputProps={inputProps}
        {...register(name)}
        error={!!error[name]}
      />
    </Fragment>
  );
};

export default IconTextField;
