import React from 'react';
import { useParams } from 'react-router-dom';

function Search() {
  // console.log(searchData);
  const searchData = [
    {
      _id: '636f4b4867222bd9aa59d669',
      isActive: true,
      town: 'Takilma',
      name: 'Amie hotel',
      price: 2419,
      picture: 'http://placehold.it/32x32',
      star: 2,
      phone: '+66 (996) 489-2004',
      address: '826 Henry Street, Wanship, New Jersey, 4206',
      about:
        'Est elit excepteur id eu duis ad aliqua incididunt consectetur esse exercitation enim velit. Sunt aute cillum laboris duis enim in dolor ad minim incididunt reprehenderit esse consequat est. Cupidatat exercitation laboris nisi eu aliqua consectetur.\r\n',
      registered: '2021-05-13T01:06:26 -07:00',
    },
    {
      _id: '636f4b483673c8a6860ec681',
      isActive: true,
      town: 'Silkworth',
      name: 'Olivia hotel',
      price: 1941,
      picture: 'http://placehold.it/32x32',
      star: 5,
      phone: '+66 (955) 472-2838',
      address: '269 Jodie Court, Gilmore, Arkansas, 520',
      about:
        'Id dolor culpa deserunt duis aliquip. Ullamco consequat do aliqua mollit voluptate sunt pariatur. Ex et nostrud irure excepteur tempor cupidatat eu dolore amet. Officia esse qui ad enim tempor ad Lorem. Anim qui est consequat Lorem commodo enim in incididunt ad quis ullamco amet. Voluptate est voluptate nisi incididunt mollit.\r\n',
      registered: '2018-03-23T11:19:34 -07:00',
    },
    {
      _id: '636f4b480c340b80a1f0672e',
      isActive: true,
      town: 'Chloride',
      name: 'England hotel',
      price: 2418,
      picture: 'http://placehold.it/32x32',
      star: 3,
      phone: '+66 (883) 444-3957',
      address: '411 Seaview Avenue, Leola, New Mexico, 9658',
      about:
        'Non ullamco ipsum excepteur quis ea est eu ipsum. Nisi ipsum consequat incididunt Lorem enim aliquip anim. Amet ad minim voluptate cillum est dolor sunt labore. Consectetur duis culpa incididunt incididunt eiusmod voluptate fugiat laboris aliqua proident exercitation excepteur ea. Nisi eiusmod et sint incididunt elit ipsum laboris enim anim quis elit. Sit eiusmod commodo sint deserunt minim occaecat deserunt sunt commodo non minim nulla fugiat.\r\n',
      registered: '2016-03-07T03:57:23 -07:00',
    },
    {
      _id: '636f4b489eede8faed232487',
      isActive: true,
      town: 'Steinhatchee',
      name: 'Erna hotel',
      price: 3899,
      picture: 'http://placehold.it/32x32',
      star: 2,
      phone: '+66 (925) 459-3841',
      address: '584 Lawrence Street, Epworth, Minnesota, 5702',
      about:
        'Minim dolore cupidatat consectetur laborum esse nulla labore proident laborum id. Cillum esse excepteur elit ex qui occaecat cillum adipisicing in eu Lorem labore aute enim. Consequat Lorem proident dolore eiusmod nostrud commodo Lorem labore pariatur eiusmod. Sint eiusmod veniam non do veniam minim et nisi consectetur pariatur aliquip exercitation. Esse laborum velit aliquip et aliquip cillum. Aliquip ex ipsum deserunt cupidatat veniam est officia. Et sunt amet esse velit minim minim.\r\n',
      registered: '2015-12-28T03:00:15 -07:00',
    },
    {
      _id: '636f4b48ecdde8d65bd8146f',
      isActive: true,
      town: 'Columbus',
      name: 'Antonia hotel',
      price: 1410,
      picture: 'http://placehold.it/32x32',
      star: 1,
      phone: '+66 (984) 484-2925',
      address: '469 Thatford Avenue, Newkirk, California, 7062',
      about:
        'Sit elit dolore est id nulla ullamco aliquip. Labore ut consectetur anim consectetur sint ad fugiat. Nulla ea sunt et officia nulla ad. Nulla adipisicing velit id velit dolore exercitation labore veniam ut. Laboris labore cillum cillum ea sunt eiusmod ea enim. Quis irure dolor et irure sint reprehenderit.\r\n',
      registered: '2016-12-03T05:15:20 -07:00',
    },
    {
      _id: '636f4b48f05c23d77851c749',
      isActive: true,
      town: 'Elrama',
      name: 'Frost hotel',
      price: 2339,
      picture: 'http://placehold.it/32x32',
      star: 2,
      phone: '+66 (812) 595-3314',
      address: '602 Bedford Place, Hasty, New Hampshire, 7002',
      about:
        'Consectetur pariatur Lorem esse non laborum amet eiusmod sint incididunt nostrud sit commodo nulla. Culpa cillum laboris dolor sint exercitation sit qui. Est officia commodo nostrud sit adipisicing quis dolore dolor cillum nostrud ea ipsum. Minim aliqua cupidatat exercitation elit deserunt non do ipsum eu sint nostrud ullamco nostrud qui. Cupidatat aliqua consectetur irure est qui dolor incididunt eiusmod ea ipsum. Velit nostrud commodo voluptate ipsum occaecat. Aliquip sint deserunt fugiat ex aute fugiat enim deserunt qui.\r\n',
      registered: '2014-01-01T03:20:01 -07:00',
    },
    {
      _id: '636f4b4862e43a3ee36889de',
      isActive: false,
      town: 'Trucksville',
      name: 'Larsen hotel',
      price: 3248,
      picture: 'http://placehold.it/32x32',
      star: 1,
      phone: '+66 (913) 596-2580',
      address: '919 Hamilton Avenue, Woodlake, Virgin Islands, 6869',
      about:
        'Nisi velit culpa ad dolor commodo do aute ipsum sunt enim culpa laboris excepteur. Aliqua dolor enim esse tempor sit do quis Lorem pariatur deserunt. Anim commodo eu commodo dolor deserunt amet qui pariatur veniam.\r\n',
      registered: '2015-12-12T06:03:47 -07:00',
    },
    {
      _id: '636f4b4855d3965069c636df',
      isActive: true,
      town: 'Garnet',
      name: 'Woods hotel',
      price: 1056,
      picture: 'http://placehold.it/32x32',
      star: 4,
      phone: '+66 (857) 587-2416',
      address: '624 Karweg Place, Jacksonburg, Illinois, 4214',
      about:
        'Anim eiusmod aute commodo consectetur proident incididunt labore labore cillum. Aliqua nulla velit velit adipisicing mollit adipisicing anim nostrud sit. Occaecat ullamco veniam occaecat elit dolor ea aute sint dolore reprehenderit. Nisi veniam consectetur pariatur voluptate anim ipsum cupidatat irure fugiat.\r\n',
      registered: '2014-02-24T07:28:58 -07:00',
    },
    {
      _id: '636f4b48b29e9e0125a517d9',
      isActive: false,
      town: 'Harold',
      name: 'Jewell hotel',
      price: 3386,
      picture: 'http://placehold.it/32x32',
      star: 1,
      phone: '+66 (888) 410-2503',
      address: '217 Lincoln Place, Ola, Wisconsin, 7732',
      about:
        'Reprehenderit excepteur velit id reprehenderit Lorem laboris duis qui velit aliquip dolor. Officia aliquip cupidatat est tempor quis labore adipisicing irure ea deserunt tempor sint. Deserunt reprehenderit adipisicing est commodo voluptate nostrud. Non ut exercitation ea proident pariatur magna id sint ipsum incididunt commodo veniam. Laborum velit ullamco eiusmod nostrud pariatur sit enim. Consectetur id ea fugiat amet reprehenderit. Laboris ad elit incididunt quis dolor id aliqua ut officia ut veniam do consectetur.\r\n',
      registered: '2021-02-05T08:12:48 -07:00',
    },
    {
      _id: '636f4b48618aaa66a6e46f8b',
      isActive: false,
      town: 'Muir',
      name: 'Mullen hotel',
      price: 2037,
      picture: 'http://placehold.it/32x32',
      star: 5,
      phone: '+66 (841) 585-2180',
      address: '334 Campus Road, Morningside, Alabama, 7161',
      about:
        'Reprehenderit elit laboris in ea consequat. Lorem ad amet ex amet dolor esse laboris ut ut proident id adipisicing esse. Elit culpa laboris ex commodo incididunt. Minim sit exercitation quis dolore velit mollit tempor fugiat pariatur. Duis esse cillum est aliqua dolore fugiat reprehenderit magna occaecat sint quis nisi aute.\r\n',
      registered: '2015-07-15T09:59:40 -07:00',
    },
  ];
  const name = useParams();
  console.log(name);
  return (
    <div className="pt-24">
      <div className="text-3xl font-kanit mx-52"> ที่พักใน ขอนแก่น</div>
      <div className="search-post">
        {searchData.map((data, key) => {
          return (
            <div className="mx-52 mb-4 ">
              <div className="border-2 rounded-xl shadow-md  ">
                <div key={key}>
                  <div className="grid grid-cols-4 grid-flow-row">
                    <img
                      src={data.picture}
                      className=" w-[390px] h-72 object-cover "
                    />
                    <div className="col-span-2 p-5">
                      <p className="font-kanit text-4xl">{data.name}</p>
                      <p className="font-kanit text-1xl text-blue-700">
                        {data.address}
                      </p>
                      <p className="font-kanit text-1xl text-gray-500">
                        {data.about}
                      </p>
                    </div>
                    <div className="grid grid-flow-rows grid-rows-6 p-5">
                      <p className="font-kanit text-4xl">star {data.star}</p>
                      <div className="font-kanit text-1xl row-span-4 text-right ml-28 ">
                        รีวิว 12345
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                        รายระเอียดเพิ่มเติม
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
