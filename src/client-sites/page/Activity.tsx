import React, { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import StarRating from '../components/StarRating';
import { FaMapMarkerAlt, FaAngleRight } from 'react-icons/fa';
import 'tw-elements';
import Imgslide from '../components/imgslide';
import GooGleMAP from '../components/googleMap';
import apiClient from '../../api/apiClient';
import config from '../../config.json';
import { useParams } from 'react-router-dom';
import { getCurrentUser } from '../../services/userService';

function Activity() {
  const params = useParams();
  console.log(params.id);
  const [items, setItems] = useState({
    hotels: [
      {
        id: '637a46251a451ba0de2dd734',
        isAvailable: true,
        name: 'Test1 Hotel',
        email: 'test1@gmail.com',
        phone: '0111111111',
        address: '11/11 11 Bankok Kanbob 21111',
        about:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lorem elit, iaculis sit amet semper id, feugiat id lectus. Maecenas mattis vestibulum lacinia. Integer sollicitudin justo eu venenatis viverra. Nunc sed urna sagittis metus laoreet sodales eu et odio. Cras posuere feugiat orci, nec pretium nisl ultricies sit amet. Aenean facilisis laoreet diam vitae fermentum. Phasellus vitae ipsum sit amet lectus volutpat ullamcorper vel at lectus. Integer tincidunt ultrices est, quis vulputate ante iaculis eu. Praesent consectetur elit id sem hendrerit porta. Ut id placerat arcu.',
        mapURL: 'https://somethingMap.com',
        ownerID: '6378ca0a297675a2b1863c5d',
        locationType: {
          isHotel: true,
          isRestaurant: true,
          isTravel: true,
        },
        picture: ['string'],
        rating: 0,
        review: 0,
        comments: [],
      },
    ],
  });

  const [sendContent, setSendContent] = useState('');

  const [commentObject, setCommentObject] = useState({
    content: sendContent,
    commentBy: ' ',
    commentOn: '637b8bf80d570d6712626f1f',
    rating: 5,
  });

  const useOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSendContent(e.target.value);
  };

  const sentComment = async () => {
    const user: any = getCurrentUser();
    setCommentObject({ ...commentObject, content: sendContent });
    setCommentObject({ ...commentObject, commentBy: user.userID });
    const res = await apiClient(`${config.api_url.localHost}/Comment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: commentObject,
    });
    console.log('ok');
  };
  useEffect(() => {
    const getAll = async () => {
      const res = await apiClient(`${config.api_url.localHost}/Hotel`, {
        method: 'GET',
      });
      console.log(res.data.hotels);
      setItems(res.data);
      // console.log(items.);
    };
    getAll();

    // const sendComment = async () => {
    //   const res = await apiClient(`${config.api_url.localHost}/Comment`, { method: 'POST', headers : {"Content-Type" : "application/json"},data:json});
    // };
    // sendComment();
  }, []);

  const Star = (n: number) => {
    const arr = new Array(5);
    for (let i = 1; i <= 5; i++) {
      let str = 0;
      if (i <= n) {
        str = 1;
      }
      arr[i] = str;
    }

    return arr;
  };

  return (
    <div className="pt-[95px]">
      {items.hotels.map((data, key) => {
        return (
          <div className="container mx-auto flex-wrap">
            <div key={key}>
              <Imgslide />
              <div className="block">
                <div className="md:hidden">
                  <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%]">
                    <div className="mb-[5px]">
                      <div className="mb-[5px]">
                        <p className="text-[20px] font-semibold">{data.name}</p>
                      </div>

                      <div className="mb-[5px] flex">
                        {Star(data.rating).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          );
                        })}
                      </div>

                      <div>
                        <p className="text-[16px]">10.00 very good</p>
                      </div>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>
                    <p className="mt-[10px] text-[15px]">{data.about}</p>
                  </div>
                </div>
                <div>
                  <div className="mx-48 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%] hidden md:block">
                    <div className="mb-[5px]">
                      <div className="mb-[5px]">
                        <p className="text-[26px] font-semibold">{data.name}</p>
                      </div>

                      <div className="mb-[5px] flex">
                        {Star(data.rating).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          );
                        })}
                      </div>

                      <div>
                        <p className="text-[16px]">10.00 very good</p>
                      </div>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>
                    <p className="mt-[15px]">{data.about}</p>
                  </div>
                </div>
              </div>

              <div className="block">
                <div className="md:hidden">
                  <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%]">
                    <div className="mb-[5px]">
                      <div className="mb-[5px]">
                        <p className="mb-[14px] text-[20px]">แผนที่</p>
                      </div>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>
                    <p className="mt-[15px]">
                      <GooGleMAP></GooGleMAP>
                    </p>
                  </div>
                </div>
                <div className="mx-48 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%] hidden md:block">
                  <div className="mb-[5px]">
                    <div className="mb-[5px]">
                      <p className="mb-[14px] text-[26px]">แผนที่</p>
                    </div>
                  </div>
                  <div className="border border-[#D8D8D8]"></div>
                  <p className="mt-[15px]">
                    <GooGleMAP></GooGleMAP>
                  </p>
                </div>
              </div>

              <div className="block ">
                <div className="md:hidden">
                  <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%]">
                    <div className="mb-[14px]">
                      <p className="text-[20px]">Boom Burapee</p>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>

                    <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] gap-x-5 px-5 ">
                      <div className="basis-1/4 mb-5">
                        <p className="text-[18px]">ให้คะแนนที่พัก</p>
                        <div className="mb-[5px]">
                          <StarRating starSize={'24px'} />
                        </div>
                      </div>

                      <form className="w-[100%]">
                        <div className="border rounded-md border-[#D8D8D8] p-3 text-slate-500">
                          <textarea
                            className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none"
                            placeholder="Write a comment..."
                            onChange={useOnChange}
                          />
                          <div className="flex flex-row-reverse">
                            <button
                              className="border rounded-md border-sky-500 bg-sky-500 text-white py-[1%] px-[5%]"
                              type="button"
                              onClick={sentComment}
                            >
                              ยืนยัน
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mx-48 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%] hidden md:block ">
                  <div className="mb-[14px]">
                    <p className="text-[26px]">Boom Burapee</p>
                  </div>
                  <div className="border border-[#D8D8D8]"></div>

                  <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex gap-x-5 px-5 ">
                    <div className="basis-1/4">
                      <p className="text-[20px]">ให้คะแนนที่พัก</p>
                      <div className="mb-[5px]">
                        <StarRating starSize={'24px'} />
                      </div>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>

                    <form className="w-[75%]">
                      <div className="border rounded-md border-[#D8D8D8] p-3 text-slate-500">
                        <textarea
                          className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none text-[15px]"
                          placeholder="Write a comment..."
                          onChange={useOnChange}
                        />
                        <div className="flex flex-row-reverse">
                          <button
                            className="border rounded-md border-sky-500 bg-sky-500 text-white py-[1%] px-[5%] "
                            type="button"
                            onClick={sentComment}
                          >
                            ยืนยัน
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="md:hidden">
                  <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%]">
                    <div className="mb-[14px]">
                      <p className="text-[20px]">ความคิดเห็น</p>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>

                    <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] gap-x-5 px-5 ">
                      <div className="basis-1/4">
                        <p className="text-[18px]">Boom Burapee</p>
                        <div className="mb-[5px] flex">
                          {Star(data.rating).map((s: number, i) => {
                            return s ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#EDEA10"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="#EDEA10 "
                                className="md:w-8 w-5 md:h-8 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1"
                                stroke="#EDEA10 "
                                className="md:w-8 w-5 md:h-8 h-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                              </svg>
                            );
                          })}
                        </div>
                        <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
                      </div>
                      <div className="border border-[#D8D8D8] my-5"></div>

                      <form className="w-full">
                        <div className=" text-slate-500 text-[15px]">
                          <div className="px-2 py-3 w-full h-full grow resize-none focus:outline-none">
                            A little out of the way but tucked nicely away from
                            the noise and traffic. Spotless rooms and general
                            areas. Staff very friendly and although not much
                            English spoken we got by with smiles and Google
                            translate.
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mx-48 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[2%] hidden md:block ">
                  <div className="mb-[14px]">
                    <p className="text-[26px]">ความคิดเห็น</p>
                  </div>
                  <div className="border border-[#D8D8D8]"></div>

                  <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[2%] flex gap-x-5 px-5 ">
                    <div className="basis-1/4">
                      <p className="text-[20px]">Boom Burapee</p>
                      <div className="mb-[5px] flex">
                        {Star(data.rating).map((s: number, i) => {
                          return s ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#EDEA10"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1"
                              stroke="#EDEA10 "
                              className="md:w-8 w-5 md:h-8 h-5"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          );
                        })}
                      </div>
                      <p className="text-[16px] text-sky-500">9.6/10 ดีมาก</p>
                    </div>
                    <div className="border border-[#D8D8D8]"></div>

                    <form className="w-[75%]">
                      <div className=" text-slate-500">
                        <div className="px-2 py-3 w-full h-full grow resize-none focus:outline-none">
                          A little out of the way but tucked nicely away from
                          the noise and traffic. Spotless rooms and general
                          areas. Staff very friendly and although not much
                          English spoken we got by with smiles and Google
                          translate.
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Activity;
