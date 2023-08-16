export const LocalStorageSetUser = (user: any) => {
  localStorage.setItem("User", JSON.stringify(user));
};

export const LocalStorageGetUser = () => {
  localStorage.getItem("User");
};
