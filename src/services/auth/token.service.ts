import { LOCALSTORAGE_KEYS } from '../../constants/app.constants';
import { storageService } from '../storage.service';

const getLocalRefreshToken = () => {
  return storageService.getItem(LOCALSTORAGE_KEYS.refreshToken);
};

const getLocalAccessToken = () => {
  return storageService.getItem(LOCALSTORAGE_KEYS.token);
};

const updateLocalAccessToken = (token: string) => {
  storageService.saveItem(LOCALSTORAGE_KEYS.token, token);
};

const getRefreshTokenKey = (): string => {
  return LOCALSTORAGE_KEYS.refreshToken;
};

// TODO: Add type<User>
const getUser = () => {
  return storageService.getItem(LOCALSTORAGE_KEYS.authUser);
};

// TODO: Add type<User>
const setUser = (user: any): void => {
  storageService.saveItem(LOCALSTORAGE_KEYS.authUser, JSON.stringify(user));
};

const removeUser = (): void => {
  storageService.removeItem(LOCALSTORAGE_KEYS.refreshToken);
  storageService.removeItem(LOCALSTORAGE_KEYS.token);
  storageService.removeItem(LOCALSTORAGE_KEYS.authUser);
};

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getRefreshTokenKey,
  getUser,
  setUser,
  removeUser
};

export default TokenService;
