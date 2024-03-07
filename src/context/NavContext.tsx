import React, { createContext, useContext } from 'react';

const NavContext = createContext({});

export const useNav = () => {
  return useContext(NavContext);
};

export const NavProvider = ({ children }: any) => {
  const [value, setValue] = React.useState({});
  const handleShowDropdown = (data: any) => {
    setValue(data);
  };

  const handleClose = () => {
    setValue({});
  };
  const propValue = {
    value,
    setValue,
    handleShowDropdown,
    handleClose
  };
  return <NavContext.Provider value={propValue}> {children}</NavContext.Provider>;
};
