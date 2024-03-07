import { Components } from '@mui/material/styles';

const CDSTypography: Partial<Components> = {
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: '32px',
        lineHeight: '40px',
        fontWeight: 400
      },
      h2: {
        fontSize: '24px',
        lineHeight: '31.2px',
        fontWeight: 400
      },
      h3: {
        fontSize: '20px',
        lineHeight: '29px',
        fontWeight: 500
      },
      h4: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400
      },

      h5: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px'
      },
      body1: {
        lineHeight: '24px',
        fontSize: '16px'
      },
      body2: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21.7px'
      },
      subtitle1: {
        lineHeight: '24px',
        fontSize: '16px',
        fontWeight: 500
      },
      subtitle2: {
        lineHeight: '21.7px',
        fontWeight: 500
      },
      caption: {
        lineHeight: '19.2px'
      }
    }
  }
};

export default CDSTypography;
