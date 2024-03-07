import { useState } from 'react';
import { List, ListItemIcon, Box, ListItemButton, Typography } from '@mui/material';

interface MenuItemProps {
  menu: any[];
  getSelectedMenu?: any;
}

const ProfileSideMenu = ({ menu, getSelectedMenu }: MenuItemProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);
  const [selectedSubItem, setSelectedSubItem] = useState<number | null>(1);

  const handleItemClick = (itemId: number) => {
    setSelectedItem(itemId);
    // Default to the first subitem when a main item is clicked
    setSelectedSubItem(menu.find((item: any) => item.id === itemId)?.children?.[0]?.id || null);
    getSelectedMenu(itemId);
  };

  const handleSubItemClick = (subItemId: number) => {
    getSelectedMenu(subItemId);
    setSelectedSubItem(subItemId);
    setSelectedItem(1);
  };

  return (
    <Box className="client-side--menu-container">
      <List className="client-menu--list">
        {menu.map((item: any) => {
          return (
            <>
              {!item.label ? null : (
                <Box key={item.id} className="client--main-menu">
                  <ListItemButton
                    disableRipple
                    selected={selectedItem === item.id}
                    onClick={() => handleItemClick(item.id)}>
                    <ListItemIcon
                      className={`${
                        selectedItem === item.id ? 'selected-menu' : 'not-selected-menu'
                      }`}>
                      <item.icon />
                    </ListItemIcon>
                    <Typography
                      variant="subtitle1"
                      className={`${
                        selectedItem === item.id ? 'selected-menu' : 'not-selected-menu'
                      }`}>
                      {item.label}
                    </Typography>
                  </ListItemButton>
                  {item.children && (
                    <Box className="client-sub-menu">
                      <ListItemButton selected={selectedItem === item.id} disableRipple>
                        <List component="div" disablePadding>
                          {item.children.map((subItem: any) => (
                            <ListItemButton
                              key={subItem.id}
                              selected={selectedSubItem === subItem.id}
                              onClick={() => handleSubItemClick(subItem.id)}
                              disableRipple>
                              <Typography
                                variant="body2"
                                className={`${
                                  selectedSubItem === subItem.id
                                    ? 'selected-menu'
                                    : 'not-selected-menu'
                                }`}>
                                {subItem.label}
                              </Typography>
                            </ListItemButton>
                          ))}
                        </List>
                      </ListItemButton>
                    </Box>
                  )}
                </Box>
              )}
            </>
          );
        })}
      </List>
    </Box>
  );
};

export default ProfileSideMenu;
