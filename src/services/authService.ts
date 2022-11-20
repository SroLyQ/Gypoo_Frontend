//for login and reg func
import apiClient from '../api/apiClient';
import config from '../config.json';

interface loginProp {
  username: string;
  password: string;
}
interface registerProp {
  username: string;
  password: string;
  confirmPassword: string;
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
export const registerFunc = async (body: registerProp) => {
  const res = await apiClient(`${config.api_url.localHost}/User/register`, {
    method: 'POST',
    data: body,
  });
  console.log(res.data);
  return res.data;
};
