import React from 'react';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { NotificationIconSvg, NotificationOffSvg } from '../../../../../../../assets/svg';
import './index.css';
import { useNav } from '../../../../../../../context/NavContext';
import { TNotificationBox, INavProviderValue, TListIem } from '../../type';

const NotificationBox: React.FC<TNotificationBox> = ({ notification = [] }) => {
  const { value, handleShowDropdown }: INavProviderValue = useNav();
  return (
    <Box onClick={() => handleShowDropdown({ notification: !value['notification'] })}>
      <NotificationIconSvg />
      {value?.notification && (
        <Box className="notification-box">
          <List className="notification-box-heading">
            <ListItem>
              <Button variant="text">{`Notification(${notification.length})`}</Button>
            </ListItem>
          </List>
          <Box display="flex" justifyContent="center" alignItems="center" width={1} height={1}>
            {notification.length > 0 ? (
              <List>
                {notification.map((listItem: TListIem, i: number) => {
                  return <ListItem key={i}>{listItem?.value}</ListItem>;
                })}
              </List>
            ) : (
              <Box className="">
                <NotificationOffSvg />
                <Typography variant="subtitle2" className="subtitle-text">
                  No Notifications
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NotificationBox;
