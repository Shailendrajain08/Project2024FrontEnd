import { Fragment, useEffect } from 'react';
import { FormControlLabel, Checkbox as MUICheckbox, Typography, Box } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../index.css';

interface ICheckBox {
  lists: any[];
  title?: string;
  control: any;
  defaultValue?: any;
  name?: string;
  setValue: any;
  sxStyles?: any;
  isCardView?: boolean;
  isShowLink?: boolean;
}

const CheckBox = ({
  lists = [],
  title,
  control,
  defaultValue,
  name,
  setValue,
  sxStyles = {},
  isShowLink,
  isCardView
}: ICheckBox) => {
  useEffect(() => {
    if (name) setValue(name, true);
  }, []);
  return (
    <Fragment>
      {title && (
        <Typography variant="h3" textAlign="start" marginBottom={'24px'}>
          {title}
        </Typography>
      )}
      <Box className="job-post--checkbox-container">
        {lists.map((list, i) => {
          return (
            <Controller
              key={i}
              name={list.name}
              control={control}
              defaultValue={defaultValue[list?.name]}
              render={({ field }) => (
                <Box className="mui-common--checkbox">
                  <FormControlLabel
                    className="mui--common--checkbox-form"
                    control={
                      <MUICheckbox
                        {...field}
                        value={list.value}
                        name={list.name}
                        defaultChecked={list?.value === defaultValue}
                      />
                    }
                    label={
                      <Box>
                        <Typography variant="subtitle2" component="span" textAlign="start">
                          {list?.isShowLink ? (
                            <Box className="link-label">
                              By Signing up you agree to our{' '}
                              <Link className="link-url-text" to={''}>
                                {' '}
                                Terms and Condition{' '}
                              </Link>
                              and{' '}
                              <Link className="link-url-text" to={''}>
                                {' '}
                                Privacy Policy{' '}
                              </Link>
                            </Box>
                          ) : (
                            <Box> {list?.label}</Box>
                          )}
                        </Typography>
                      </Box>
                    }
                  />
                  {list?.helperText && (
                    <Typography
                      variant="body2"
                      component="div"
                      textAlign="start"
                      marginLeft={'38px'}>
                      {list?.helperText}
                    </Typography>
                  )}
                </Box>
              )}
            />
          );
        })}
      </Box>
    </Fragment>
  );
};

export default CheckBox;
