import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';

interface ProfileMenuProps {
  menus: any[];
  getSelectedMenu: any;
}
export default function ProfileMenu({ getSelectedMenu, menus = [] }: ProfileMenuProps) {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    getSelectedMenu(index);
  };

  return (
    <List component="nav" className="side-menu--list">
      {menus.map((menu, id) => {
        return (
          <Box key={id} className={`${menu?.id === selectedIndex ? 'selected-menu' : null}`}>
            <ListItemButton
              onClick={(event) =>
                menu?.children?.length ? handleClick() : handleListItemClick(event, menu?.id)
              }
              selected={
                menu?.children?.length
                  ? menu.children.map((v: any) => v.id).includes(selectedIndex)
                  : selectedIndex === menu?.id
              }
              className="listItem-button">
              <ListItemIcon className="list-menu--icon">
                <menu.icon />
              </ListItemIcon>
              <Typography variant="subtitle1" className="list-menu--label">
                {menu?.label}
              </Typography>
              {menu?.children?.length ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItemButton>
            {menu?.children?.length
              ? menu.children.map((subMenu: any) => (
                  <Collapse in={open} timeout="auto" unmountOnExit key={subMenu?.id}>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === subMenu?.id}
                        onClick={(event) => handleListItemClick(event, subMenu?.id)}>
                        <ListItemIcon>
                          <subMenu.icon />
                        </ListItemIcon>
                        <ListItemText
                          primary={subMenu?.label}
                          primaryTypographyProps={{
                            fontSize: '0.85rem',
                            fontWeight: 'bold'
                          }}
                        />
                      </ListItemButton>
                    </List>
                  </Collapse>
                ))
              : null}
          </Box>
        );
      })}
    </List>
  );
}
