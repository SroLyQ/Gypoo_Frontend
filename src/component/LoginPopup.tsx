import logo from '../assets/logo.gif';
import { useState, Dispatch, SetStateAction } from 'react';
import { checkLogin, login } from '../services/authService';
import { getCurrentUser } from '../services/userService';
interface IParentPopup {
  setParentPopup: Dispatch<SetStateAction<boolean>>;
}
const LoginPopup: React.FC<IParentPopup> = (props: IParentPopup) => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
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
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });
  };
  const loginHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const data = await login(form);
    const token = data.token;
    localStorage.setItem('token', token);
    window.location.reload();
  };
  return (
    <div className="fixed w-full h-full z-20">
      <div className="flex w-full bg-[#bebbbcb3] h-full items-center justify-center">
        <div className="flex flex-col bg-white xs:w-[500px] w-full sm:mx-0 mx-5 h-[530px] rounded-md shadow-lg px-3 shadow-[#979797] items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
            className="w-5 md:m-3 md:mb-0 m-5 mb-2 self-end hover:cursor-pointer"
            onClick={closeHandler}
          />
          <img src={logo} className="w-40" />
          <label className="lg:text-[32px] text-[30px] text-center md:pb-4 lg:pt-2 border-b-[1px] border-gray-300 w-[80%]">
            {' '}
            Login
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
            <button
              type="button"
              className="xl:mt-8 mt-3 h-12 bg-[#488BF8] w-32 self-center rounded-md text-white font-semibold text-[22px] text-center align-middle items-center"
              onClick={loginHandler}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
