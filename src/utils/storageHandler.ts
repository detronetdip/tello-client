export const getItem = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  else return null;
};
export const setItem = (key: string, value: object | string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};

export const setUserStorage = (key: string, value: object) => {
  const data = getItem(key);
  setItem(key, { ...data, ...value });
};
