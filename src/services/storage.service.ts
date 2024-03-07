export const storageService = {
  saveItem: (key: string, value: any) => {
    return localStorage.setItem(key, value);
  },
  getItem: (key: string) => {
    const value = localStorage.getItem(key);
    let parsedValue;
    try {
      parsedValue = JSON.parse(value as string);
    } catch (e) {
      if (e instanceof SyntaxError && typeof value === 'string') {
        parsedValue = value;
      } else {
        throw e;
      }
    }
    return parsedValue;
  },
  removeItem: (key: string) => {
    return localStorage.removeItem(key);
  }
};
