import { Button } from '@mui/material';
import { Fragment } from 'react';

interface IActionButton {
  handleLeftBtnClick: () => void;
  handleRightBtnClick: () => void;
  leftBtnText: string;
  rightBtnText: string;
}
const ActionButton = ({
  handleLeftBtnClick,
  handleRightBtnClick,
  leftBtnText,
  rightBtnText
}: IActionButton) => {
  return (
    <Fragment>
      <Button className="action-revise-proposal" variant="outlined" onClick={handleLeftBtnClick}>
        {leftBtnText}
      </Button>
      <Button className="action-submit-proposal" variant="outlined" onClick={handleRightBtnClick}>
        {rightBtnText}
      </Button>
    </Fragment>
  );
};

export default ActionButton;
