import { Components as CDSComponents } from '@mui/material/styles';
import CDSButton from './CDS_button';
import CDSTypography from './CDS_typography';
import CDSChip from './CDS_chip';

const CDSTheme_Components: Partial<CDSComponents> = {
  ...CDSButton,
  ...CDSTypography,
  ...CDSChip
};

export default CDSTheme_Components;
