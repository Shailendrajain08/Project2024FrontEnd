import { NavigateFunction } from 'react-router-dom';

type NavigateType = NavigateFunction;

export interface IMenuDropdownCard {
  listItems: any[];
  showDropdown: boolean;
  className?: string;
}

export interface IProfileBox {
  userLoginData: any;
  role: string;
}

export interface INavProviderValue {
  value?: any;
  setValue?: any;
  handleShowDropdown?: any;
  handleClose?: any;
}

export interface IMobileNavBar {
  handleToggleClose: () => void;
  role: string;
  currentPath: string;
  navigate: NavigateType;
  handleClose: any;
  setValue: any;
}

type TNotificationBox = { notification: TListIem[] };

type TListIem = { [key: string]: string };

type TSearchBoxDrawer = {
  setShowSearchDrawer: (value: boolean) => void;
};

type TSearchBox = TSearchBoxDrawer & {
  role: string;
};

type TUserLoginData = { [key: string]: any };

type TSearchOptionList = { label: string; value: string };

export type TData = { [key: string]: boolean | undefined };

export type TActionMenuDropdown = { [key: string]: () => void };
