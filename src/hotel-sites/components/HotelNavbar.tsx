import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavLink, Link } from 'react-router-dom';
import { checkLogin } from '../../services/authService';
import LoginPopup from '../../component/LoginPopup';
import { getCurrentUser } from '../../services/userService';

const logo =
  'https://cdn.discordapp.com/attachments/798208544914407465/1034861427472732171/logo.gif';
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
function HotelNavbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const checkAuthRes = await checkLogin();
      if (checkAuthRes) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      console.log(isLogin);
    };
    checkAuth();
  }, []);
  const loginClickHandler = () => {
    setLoginPopup(true);
    // console.log(loginPopup);
  };
  const logoutHandler = () => {
    localStorage.setItem('token', '');
    setIsLogin(false);
  };
  console.log(loginPopup);

  return (
    <div>
      {loginPopup && <LoginPopup setParentPopup={setLoginPopup} />}
      <div className="w-screen h-[95px] z-10 bg-gray-100 fixed drop-shadow-md">
        <div className="px-8 flex justify-between items-center w-full h-full">
          <a>
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="  border-1   hidden md:flex w-24 "
              />
            </a>
            <div className="md:hidden mr-auto ml-24">
              <a href="/">
                <img src={logo} alt={'logo'} className="w-32" />
              </a>
            </div>
          </a>
          <div className="flex items-center md:order-2 ">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 mt-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/hotelprofile"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          โปรไฟล์
                        </a>
                      )}
                    </Menu.Item>
                    <div className="border-b-2 border-black-900 my-2 mx-auto w-3/4 "></div>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/hotel"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900 md:hidden'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm md:hidden',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                              />
                            </svg>
                          </div>
                          ที่พัก
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/restaurant"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900 md:hidden'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm md:hidden',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                              />
                            </svg>
                          </div>
                          ร้านอาหาร
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/activity"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900 md:hidden'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm md:hidden',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                              />
                            </svg>
                          </div>
                          กิจกรรม
                        </a>
                      )}
                    </Menu.Item>
                    <div className="border-b-2 border-black-900 my-2 mx-auto w-3/4 md:hidden "></div>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/hotelhotels"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                              />
                            </svg>
                          </div>
                          กิจการของฉัน
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/hotelhistory"
                          className={classNames(
                            active
                              ? ' bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          ประวัติการให้บริการที่พัก
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/hoteldiscount"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                              />
                            </svg>
                          </div>
                          คูปองส่วนลด
                        </a>
                      )}
                    </Menu.Item>
                    <div className="border-b-2 border-black-900 my-2 mx-auto w-3/4 "></div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'flex px-4 py-2 text-sm',
                          )}
                          onClick={isLogin ? logoutHandler : loginClickHandler}
                        >
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                              />
                            </svg>
                          </div>
                          {isLogin ? 'ออกจากระบบ' : 'เข้าสู่ระบบ'}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelNavbar;
