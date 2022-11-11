//for login and reg func
import apiClient from '../api/apiClient';
import config from '../config.json';
interface loginProp {
  username: string;
  password: string;
}
export const checkLogin = async () => {
  const token: string = localStorage.getItem('token') || '';
  try {
    const res = await apiClient(`${config.api_url.localHost}/User/token`, {
      method: 'GET',
    });
    if (res.status === 401 || res.status === 403) {
      return false;
    }
  } catch (e) {
    console.log(e);
  }
  return true;
};
export const login = async (body: loginProp) => {
  const res = await apiClient(`${config.api_url.localHost}/User/login`, {
    method: 'POST',
    data: body,
  });
  console.log(res);
  return res.data;
};
export const register = async (username: string, password: string) => {
  return 'login';
};
