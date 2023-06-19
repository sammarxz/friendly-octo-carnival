const fakeLogin = (email: string, password: string) => {
  if (
    email === import.meta.env.VITE_USER_EMAIL &&
    password === import.meta.env.VITE_USER_PASSWORD
  ) {
    return true;
  }

  return false;
};

export { fakeLogin };
