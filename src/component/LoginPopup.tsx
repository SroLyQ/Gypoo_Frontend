import logo from '../assets/logo.gif';
import { useState, Dispatch, SetStateAction } from 'react';
import { checkLogin, login, registerFunc } from '../services/authService';
import { getCurrentUser } from '../services/userService';
interface IParentPopup {
  setParentPopup: Dispatch<SetStateAction<boolean>>;
}
const LoginPopup: React.FC<IParentPopup> = (props: IParentPopup) => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [register, setRegister] = useState<boolean>(false);
  const [popUpHeight, setPopUpHeight] = useState<string>(' h-[530px]');
  const closeHandler = () => {
    console.log('close');
    props.setParentPopup(false);
  };
  const viewButton = () => {
    if (passwordType === 'text') {
      setPasswordType('password');
    } else {
      setPasswordType('text');
    }
  };
  const switchRegister = () => {
    console.log(register);
    register ? setPopUpHeight(' h-[530px]') : setPopUpHeight(' h-[620px]');
    register ? setRegister(false) : setRegister(true);
    console.log(register);
  };
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  };
  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(form);
    const data = await login(form);
    const token = data.token;
    localStorage.setItem('token', token);
    window.location.reload();
  };
  const registerHandler = async () => {
    console.log(form);
    const data = await registerFunc(form);
    const token = data.token || '';
    localStorage.setItem('token', token);
    window.location.reload();
  };
  return (
    <div className="fixed w-full h-full z-20">
      <div className="flex w-full bg-[#bebbbcb3] h-full items-center justify-center">
        <div
          className={
            'flex flex-col bg-white xs:w-[500px] w-full sm:mx-0 mx-5 rounded-md shadow-lg px-3 shadow-[#979797] items-center' +
            popUpHeight
          }
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
            className="w-5 md:m-3 m-5 mb-0 self-end hover:cursor-pointer"
            onClick={closeHandler}
          />
          <img src={logo} className="w-36" />
          <label className="lg:text-[32px] md:text-[30px] text-[26px] text-center md:pb-4 lg:pt-2 border-b-[1px] border-gray-300 w-[80%]">
            {' '}
            {register ? 'Register' : 'Login'}
          </label>
          <form className="flex flex-col mt-5">
            <label className="text-[20px] ">Username :</label>
            <input
              type="text"
              name="username"
              className="border-gray-400 border-[1px] rounded-md w-72 h-10 text-[20px] indent-3 mt-3 pb-1"
              placeholder="Username"
              onChange={changeHandler}
            />
            <label className="text-[20px]  mt-3">Password :</label>
            <div className="relative my-3">
              <input
                type={passwordType}
                name="password"
                className=" border-gray-400 border-[1px] rounded-md w-72 h-10 text-[20px] indent-3 pb-1"
                placeholder="Password"
                onChange={changeHandler}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                className="absolute w-6 top-2 right-2 hover:cursor-pointer"
                onClick={viewButton}
              />
            </div>
            {register && (
              <label className="text-[20px]  mt-1">Confirm Password :</label>
            )}
            {register && (
              <div className="relative my-3">
                <input
                  type={passwordType}
                  name="confirmPassword"
                  className=" border-gray-400 border-[1px] rounded-md w-72 h-10 text-[20px] indent-3 pb-1"
                  placeholder="Confirm Password"
                  onChange={changeHandler}
                />
              </div>
            )}
            <button
              type="button"
              className="xl:mt-0 my-3 h-12 bg-[#488BF8] w-32 self-center rounded-md text-white text-[22px] text-center align-middle items-center"
              onClick={register ? registerHandler : loginHandler}
            >
              {register ? 'Register' : 'Login'}
            </button>
            <div
              className="self-center md:my-1 my-3 text-sm hover:text-underline hover:cursor-pointer"
              onClick={switchRegister}
            >
              {register
                ? 'Already have an account? Login'
                : 'Need an account? register'}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
