import { createTheme } from '@mui/material/styles';
import CDSTheme_Light from './pallette/light';
import CDSTheme_Dark from './pallette/dark';
import CDSTheme_Components from './components';

// interface THEME_OPTIONS {
//   paletteType: string;
// }

export const CDS_HIRCDR = (paletteType: any) => {
  console.log('COMPOENTS', CDSTheme_Components);
  const CDS_THEME_CHOICE = paletteType === 'light' ? { ...CDSTheme_Light } : { ...CDSTheme_Dark };
  return createTheme({
    palette: {
      ...CDS_THEME_CHOICE
    },
    components: {
      ...CDSTheme_Components
    },
    typography: {
      fontFamily: 'Outfit'
    }
  });
};
