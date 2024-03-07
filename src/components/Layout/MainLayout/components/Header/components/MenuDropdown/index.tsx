import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../../../../store/actions/login';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRightSvg } from '../../../../../../../assets/svg';
import './index.css';
import { useNav } from '../../../../../../../context/NavContext';
import { IMenuDropdownCard, INavProviderValue, TActionMenuDropdown } from '../../type';

const MenuDropdownCard: React.FC<IMenuDropdownCard> = ({
  listItems = [],
  showDropdown = false,
  className
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleClose }: INavProviderValue = useNav();
  const [isShow, setIsShow] = useState(false);
  const [list, setList] = useState([]);
  const handleMouseEnter = (list: any) => {
    if (list) setList(list);
    setIsShow(true);
  };
  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate('/login');
  };

  const action: TActionMenuDropdown = {
    logout: handleLogout
  };

  const handleNestedList = () => {
    handleClose();
    setIsShow(false);
  };

  return (
    <Fragment>
      {showDropdown && (
        <Fragment>
          <Box className={`menu-dropdown-box ${className}`}>
            <List className="dropdown-list">
              {listItems.map((list: any, i: number) => {
                return (
                  <Fragment key={`${list.name}_${i}`}>
                    {list?.isShowChild ? (
                      <ListItem
                        className={`list-box--list`}
                        onMouseEnter={() => handleMouseEnter(list.data)}>
                        <Typography component="span">{list.name}</Typography>
                        <ArrowRightSvg />
                      </ListItem>
                    ) : (
                      <ListItem
                        className="menu-dropdown-box--list-box"
                        onMouseEnter={() => handleMouseEnter([])}
                        onClick={handleClose}>
                        {list?.path ? (
                          <Link to={list.path}>{list.name}</Link>
                        ) : (
                          <Typography component="span" onClick={action[list.callbackFnc]}>
                            {list.name}
                          </Typography>
                        )}
                      </ListItem>
                    )}
                  </Fragment>
                );
              })}
            </List>
          </Box>
          {isShow && list.length > 0 && (
            <Box className="menu-dropdown-box right-dropdown">
              {' '}
              <List className="dropdown-list">
                {list.map((el: any, i: number) => {
                  return (
                    <ListItem
                      key={`${el.name}_${i}`}
                      className="menu-dropdown-box--list-box"
                      onClick={handleNestedList}>
                      <Link to={el.path}>{el.name}</Link>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default MenuDropdownCard;
