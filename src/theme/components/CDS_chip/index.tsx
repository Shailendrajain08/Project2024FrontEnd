import { Components } from '@mui/material/styles';

const CDSChip: Partial<Components> = {
  MuiChip: {
    styleOverrides: {
      root: {
        padding: '3px 10px',
        borderRadius: '100px',
        height: '24px'
      },
      label: {
        padding: '0px',
        fontSize: '11px',
        fontWeight: '400',
        lineHeight: '18px',
        wordWrap: 'break-word'
      }
    }
  }
};

export default CDSChip;
