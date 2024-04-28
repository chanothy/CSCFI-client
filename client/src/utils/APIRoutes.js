let URL = import.meta.env.VITE_SERVER_URL;

export const host = URL;
export const registerRoute = `${host}api/auth/register`;
export const loginRoute = `${host}api/auth/login`;