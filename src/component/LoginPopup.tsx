import logo from '../assets/logo.gif';
import { useState } from 'react';
const LoginPopup: React.FC = () => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const closeHandler = () => {
    console.log('close');
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
  const loginHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Login');
    console.log(form);
  };
  return (
    <div className="absolute w-full h-full z-10 ">
      <div className="flex w-full bg-[#bebbbcb3] h-full items-center justify-center">
        <div className="flex flex-col bg-white w-[30%] h-[60%] rounded-md shadow-lg shadow-[#979797] items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/75/75519.png"
            className="w-5 m-5 self-end hover:cursor-pointer"
            onClick={closeHandler}
          />
          <img src={logo} className="w-44" />
          <label className="text-[32px] text-center pb-4 pt-2 border-b-[1px] border-gray-300 w-[80%] font-semibold">
            {' '}
            Login
          </label>
          <form className="flex flex-col mt-5">
            <label className="text-[20px] font-semibold">Username :</label>
            <input
              type="text"
              name="username"
              className="border-gray-400 border-[1px] rounded-md w-72 h-10 text-[20px] indent-3 mt-3 pb-1"
              placeholder="Username"
              onChange={changeHandler}
            />
            <label className="text-[20px] font-semibold mt-3">Password :</label>
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
              className="mt-6 h-12 bg-[#488BF8] w-32 self-center rounded-md text-white font-semibold text-[22px] text-center align-middle items-center"
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
