import React, { Fragment, useState } from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import '../index.css';

interface IMenuDropdown {
  title: string;
  menuList: any[];
  callBackFnc?: (value: string) => void;
  sx?: any;
}

const MenuDropdown = ({ title, menuList = [], callBackFnc, sx }: IMenuDropdown) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const submenuList = React.useRef([]);
  const navigate = useNavigate();

  const handleClick = (event: React.SyntheticEvent<any>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuList = (list: any) => {
    if (list?.data) {
      setShowCard(!showCard);
      submenuList.current = list.data;
    } else {
      setAnchorEl(null);
      if (list?.path) navigate(list.path);
    }
    if (callBackFnc) callBackFnc(list.name);
  };

  const handleSubmenu = (value: any) => {
    setAnchorEl(null);
    setShowCard(false);
    if (value?.path) navigate(value.path);
  };

  return (
    <Fragment>
      <Box>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          sx={sx}
          component={'span'}>
          {title} <KeyboardArrowDownIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {menuList.map((list: any, i: number) => {
            return (
              <MenuItem
                onClick={() => {
                  handleMenuList(list);
                }}
                key={i}>
                {list.name}
                {list?.data && <KeyboardArrowRightIcon />}
              </MenuItem>
            );
          })}
          {showCard &&
            submenuList.current.map((el: any) => {
              return (
                <Box
                  key={el.name}
                  marginLeft={4}
                  className="submenu"
                  onClick={() => {
                    handleSubmenu(el);
                  }}>
                  {el.name}
                </Box>
              );
            })}
        </Menu>
      </Box>
    </Fragment>
  );
};

export default MenuDropdown;
