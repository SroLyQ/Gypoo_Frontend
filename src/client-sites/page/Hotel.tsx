import React, { useState, useEffect } from 'react';
import { FaCheck, FaBed, FaRegCalendar } from 'react-icons/fa';
import ListBox from '../components/ListBox';
import StarRating from '../components/StarRating';
import GooGleMAP from '../components/googleMap';
import Roomtype from '../components/Roomtype';
import 'tw-elements';
import Imgslide from '../components/imgslide';
import config from '../../config.json';
import apiClient from '../../api/apiClient';
import { getCurrentUser } from '../../services/userService';
import { useParams } from 'react-router-dom';
import StarRate from '../components/StarRate';

const testFaci = [
  'อาหารเช้า',
  'สัตว์เลี้ยงเข้าพักได้',
  'ที่จอดรถ',
  'ปิ้งบาร์บีคิว',
  'Free Wi-Fi',
];

interface hotel {
  id: string;
  isAvailable: boolean;
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  mapURL: string;
  ownerID: string;
  locationType: locationType;
  picture: [string];
  price: number;
  discount: number;
  rating: number;
  review: number;
  room: [string];
  comments: [string];
}
interface locationType {
  isHotel: boolean;
  isRestaurant: boolean;
  isTravel: boolean;
}
function hotel() {
  const { id } = useParams();
  const [post, setPost] = useState<hotel>();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState<string>('Guest');
  const [userID, setUserID] = useState<string>('');
  const [comment, setComment] = useState<string>('No comment');
  const [hotelComment, setHotelComment] = useState<[any]>();
  const [rating, setRating] = useState<any>(0);
  useEffect(() => {
    const getHotelData = async () => {
      const res = await apiClient(`${config.api_url.localHost}/Hotel/${id}`, {
        method: 'GET',
      });
      setPost(res.data.hotel);
    };
    getHotelData();
    const getCommentHotel = async () => {
      const res = await apiClient(
        `${config.api_url.localHost}/Comment/hotel/${id}`,
        { method: 'GET' },
      );
      setHotelComment(res.data.comments);
    };
    getCommentHotel();
    const getUserData = async () => {
      const userData: any = await getCurrentUser();
      setUsername(userData.username);
      setUserID(userData.userID);
    };
    getUserData();
  }, []);
  const onChangeCommentHandler = (e: any) => {
    setComment(e.target.value);
    console.log(comment);
  };
  const commentSubmitHandler = async (e: any) => {
    e.preventDefault();
    const body = {
      content: comment,
      commentBy: userID,
      commentOn: id,
      rating: rating,
    };
    console.log(body);
    const res = await apiClient(`${config.api_url.localHost}/Comment`, {
      method: 'POST',
      data: body,
    });
    if (res) {
      window.location.reload();
    }
  };
  return (
    <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap grid">
        <Imgslide />

        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] p-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[5px]">
              <div className="mb-[5px]">
                <p className="text-[26px] font-semibold">{post?.name}</p>
              </div>
              <div className="mb-[5px]">
                <StarRate rating={post?.rating || 0} />
              </div>
              <div>
                <p className="text-[20px]">{'rating : ' + post?.rating}</p>
              </div>
            </div>
            <div className="border border-[#D8D8D8]"></div>
            <p className="mt-[15px]">{post?.about}</p>
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8 mt-[25px] gap-x-8 gap-y-6">
            <div className="border rounded-md border-[#999999] p-[25px] pt-[15px]">
              <p className="mb-[14px] text-[26px]">แผนที่</p>
              <div className="border border-[#D8D8D8]"></div>
              <div className="mt-[15px]">
                <GooGleMAP></GooGleMAP>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8">
            <Roomtype />
          </div>
        </div>

        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[14px]">
              <p className="text-[26px]">{username}</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex max-md:flex-wrap gap-x-5 px-5 ">
              <div className="basis-1/4 max-md:mb-5 max-md:basis-full">
                <p className="text-[20px]">ให้คะแนนที่พัก</p>
                <div className="my-[5px] flex flex-row">
                  <StarRating starSize={'25px'} setParentRating={setRating} />
                </div>
              </div>
              <div className="border border-[#D8D8D8] max-md:hidden"></div>

              <form className="w-[75%] max-md:w-[100%]">
                <div className="border rounded-md border-[#D8D8D8] p-3 text-slate-500">
                  <textarea
                    className=" px-2 py-3 w-full h-full grow resize-none focus:outline-none"
                    placeholder="Write a comment..."
                    onChange={onChangeCommentHandler}
                  />
                  <div className="flex flex-row-reverse">
                    <button
                      className="border rounded-md border-sky-500 bg-sky-500 text-white py-[1%] px-[5%]"
                      onClick={commentSubmitHandler}
                    >
                      ยืนยัน
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="mx-48 max-md:mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
            <div className="mb-[14px]">
              <p className="text-[26px]">ความคิดเห็น</p>
            </div>
            <div className="border border-[#D8D8D8]"></div>

            {hotelComment?.map((comment: any) => {
              return (
                <div className="border rounded-md border-[#D8D8D8] py-[15px] mt-[25px] flex max-md:flex-wrap gap-x-5 px-5 ">
                  <div className="basis-1/4 max-md:basis-full">
                    <p className="text-[20px]">{comment.usernameComment}</p>
                    <div className="my-[5px] flex flex-row">
                      <StarRate rating={comment.rating} />
                    </div>
                    <p className="text-[16px] text-sky-500">
                      {comment.rating + ' Rating'}
                    </p>
                    <p className="text-[14px]">{comment.date}</p>
                  </div>
                  <div className="border border-[#D8D8D8] max-md:my-3 max-md:w-[100%]"></div>

                  <form className="w-[75%] max-md:w-[100%]">
                    <div className=" text-slate-500">
                      <div className="px-2 py-3 w-full h-full grow resize-none focus:outline-none">
                        {comment.content}
                      </div>
                    </div>
                  </form>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default hotel;
