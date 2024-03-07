import { Palette as CDSPalette } from '@mui/material/styles';

const CDSTheme_Light: Partial<CDSPalette> = {
  mode: 'light',
  primary: {
    // Each of these can accept the following keys:
    // light?: string; => this is a light shade of main
    // main: string; => this is the key we are looking for in order to set our project primary. This is the main shade of the color.
    // dark?: string; => a darker shade of main
    // contrastText?: string; => Text color, intended to contrast with main. The contrastText token is calculated using the contrastThreshold value, to maximize the contrast between the background and the text.
    // read more here => https://mui.com/material-ui/customization/palette/
    // palette.contrastThreshold could be provided optionally by the designer. mui calculates otherwise.
    main: '#14A800',
    light: '',
    dark: '',
    contrastText: '#fff'
  },
  secondary: {
    main: '#BFC847',
    contrastText: '',
    light: '',
    dark: ''
  },
  error: {
    main: '#F93232',
    light: '',
    dark: '',
    contrastText: ''
  }
};

export default CDSTheme_Light;
