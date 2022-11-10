//for login and reg func
import apiClient from '../api/apiClient'
interface loginProp{
  username:string,
  password:string,
}

export const login = async (body:loginProp) => {
  const res = await apiClient('https://localhost:7066/api/User/login',{
    method:'POST',
    data:body,
  })
  console.log(res);
  return res.data;
};
export const register = async (username: string, password: string) => {
  return 'login';
};
