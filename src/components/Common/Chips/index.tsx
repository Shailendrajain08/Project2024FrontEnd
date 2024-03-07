import { Tooltip, Chip, Stack } from '@mui/material';

interface ChipsProps {
  chipTitles: string[];
  maxChipsToDisplayInRow: number;
}

const Chips = ({ chipTitles, maxChipsToDisplayInRow }: ChipsProps) => {
  // eslint-disable-next-line array-callback-return
  const chips = chipTitles.map((tech, i) => {
    if (i < maxChipsToDisplayInRow) {
      return (
        <Chip
          label={tech}
          key={i.toString() + tech}
          size="small"
          sx={{ bgcolor: '#F1F3F7', color: '#7C88B8' }}
        />
      );
    } else {
      return null;
    }
  });

  if (chipTitles.length > maxChipsToDisplayInRow) {
    const tooltipTitle = chipTitles.toString();
    const moreThan3label = `+${chipTitles.length - maxChipsToDisplayInRow} more`;
    chips.push(
      <Tooltip key={chipTitles.length.toString() + tooltipTitle} title={tooltipTitle}>
        <Chip label={moreThan3label} size="small" sx={{ bgcolor: '#F1F3F7', color: '#7C88B8' }} />
      </Tooltip>
    );
  }
  return (
    <Stack direction="row" spacing={1}>
      {chips}
    </Stack>
  );
};

export default Chips;
