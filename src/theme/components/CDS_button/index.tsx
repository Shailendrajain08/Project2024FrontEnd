import { Components } from '@mui/material/styles';

const CDSButton: Partial<Components> = {
  MuiButton: {
    styleOverrides: {
      root: {
        // Some CSS
        borderRadius: '4px'
      }
    }
  }
};

export default CDSButton;
