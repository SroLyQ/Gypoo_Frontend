import jwtDecode from 'jwt-decode';
export const getCurrentUser = () => {
  const token = localStorage.getItem('token') || '';
  const userData = jwtDecode(token);
  console.log(userData);
  return userData;
};
