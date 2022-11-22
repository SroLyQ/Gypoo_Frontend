import React,{useState,FormEvent,useEffect} from 'react'
import { FaCheck, FaBed, FaRegCalendar,FaStar } from 'react-icons/fa';
import {useParams, Link} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import RoomCard from './RoomCard';
import testroomdata from '../pages/testroomdata.json'
import formatRoomtype from '../pages/formatRoomtype.json'
import formatOldRoomtype from '../pages/formatOldHotelRoomtype.json'
import { getCurrentUser } from '../../services/userService';
import config from '../../config.json'  
import apiClient from '../../api/apiClient';
type dataType = {
    data:{
    id: string;
    index: number;
    isAviable: boolean;
    price: number;
    picture: Array<string>;
    name: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    discount : number;
    rating: number;
    review: number;
    room: Array<any>;
    }
}
type imgSlide = {
  arr: Array<string>;
  image:any;
  index:number;
}
interface commentFormState {
  //name: string;
  //roomtype: string;
  //period: string;
  rating: number;
  content: string;
}
const Star = (n:number) =>{
    const arr = new Array(5);
    for(let i=1; i<=5; i++){
    let str = 0
      if (i<=n){
        str = 1
      }
      arr[i] = str;
    }

    return arr;
}
const SelectDescription = (n:number) =>{
    if (n>4) return "excellent";
    else if (n>3) return "good";
    else if (n>2) return "fairly good";
    else if (n>1) return "fair";
    else return "poor";
}
{/*{data}:dataType}*/}

function HotelInnerRoomCard() {
  const {id} = useParams();
  const [olddata,setOldData] = useState(formatRoomtype);
  const [data,setData] = useState(formatRoomtype);
  const [selectDelete,setSelectDelete] = useState(false)
  const [selectConfirm,setSelectConfirm] = useState(false)
  const [selectEdit,setSelectEdit] = useState(false)
  const [selectEditId,setSelectEditId] = useState("")
  const [selectStatus,setSelectStatus] = useState(Array(data.room.length).fill(false))
  const [deletedData,setDeletedData] = useState<string[]>([])
  const [commentForm, setCommentForm] = React.useState<commentFormState>({
    //name: '',
    //roomtype: '',
    //period: '',
    rating: 0,
    content: ''
  });
  const [currentRating, setCurrentRating] = React.useState(0);
  const toggleDelete = () =>{
    setSelectDelete(!selectDelete)
    if(selectDelete){
      //console.log(deletedData.toString())
      setSelectStatus(Array(data.room.length).fill(false))
      setDeletedData([])
    }
  }
  const toggleStatus = (index:number) =>{
    const updatedStatus = selectStatus.map((status,i)=>{
      if (i==index){
        if (!status){
        deletedData.push(data.room[i])
        }
        else {
        
        setDeletedData(deletedData.filter(d => d!== data.room[i]))
        }
        return !status
      }
      else 
        return status
      
    })
    setSelectStatus(updatedStatus)
    //console.log(selectStatus.toString())
  }
const toggleConfirm = () =>{
      setSelectConfirm(!selectConfirm)
}
const sendFormDelete=() =>{
  toggleConfirm()
   const jason = JSON.stringify({
          id : id,
           deletedData
       })
  //console.log(jason)
  // await fetch('/route',{
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   method : 'POST',
  //   body : JSON.stringify({
  //       name : name.value,
  //       lastname : lastname.value,
  //       email : email.value
  //   })
  //})
}
const toggleEdit = ()=>{
  setSelectEdit(!selectEdit)
  if (!selectDelete){
      setSelectEditId('')
  }
}
const makeEditform = (dataId:string)=>{
  //console.log(dataId)
  toggleEdit()
  setSelectEditId(dataId)
}
  const sendForm = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const {/*name,roomtype,period,rating,*/content} = e.target as typeof e.target & {
      //name : {value : string},
      //roomtype: {value : string},
      //period: {value : string},
      //rating: {value : number},
      content:  {value : string},
    }
    const jason = JSON.stringify({
            //name : name.value,
            //roomtype : roomtype.value,
            //period : period.value,
            rating : currentRating,
            content : content.value,
         })
    //console.log(jason)
    // await fetch('/route',{
    //   headers:{
    //     'Content-Type': 'application/json'
    //   },
    //   method : 'POST',
    //   body : JSON.stringify({
    //       name : name.value,
    //       lastname : lastname.value,
    //       email : email.value
    //   })
    //})
    setCommentForm({/*name:name.value,roomtype:roomtype.value,period:period.value,*/rating:currentRating,content:content.value})
  }
  const StarRating = (props: { starSize: any; }) => {

    const [rating, setRating] = React.useState(0);
    const [hover, setHover] = React.useState(0);
    const { starSize } = props
    const stars = Array(5).fill(0);
  
  const setRatinginValue = (e:number) =>{
    setRating(e);
    setCurrentRating(e);
    return e;
  }
  
  return (
    <div className="flex flex-rows">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              className="hidden ml-1"
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRatinginValue(ratingValue)}
            ></input>
            <FaStar
              className="cursor-pointer duration-[200ms]"
              fontSize={starSize}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            ></FaStar>
          </label>
        );
      })
      }
    </div>
  );
  }
  
  const Thumbnail = ({ arr, image, index }:imgSlide) => {
    return (
    <div className="flex h-[20%] w-[20%] space-x-2">
      {
        arr.map((imgsrc, i) => (
          <img
            key={i}
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? 'active' : ''}
          />
        ))
      }
    </div>)
  }
  
  const Slideshow = ({ imgs }:any) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
    return (
      <div className="  justify-center block">
        <img className="h-[30%] w-[30%] mx-auto mb-2" src={imgs[index]} />
        
        <div className="">
          <div className="ml-auto">
          <Thumbnail arr={imgs} image={setIndex} index={index} />
          </div>
          
        </div>
      </div>
    )
  }
  useEffect(()=>{
    setData(formatRoomtype)
    const originaldat = async () =>{ 
    const res = await apiClient(`${config.api_url.localHost}/Hotel/${id}`,{method : 'GET',}) 
    console.log("kuyinhotel")
    console.log(res.data.hotel)
    
    setData(res.data.hotel)
    }
    originaldat()
    
    //setData(data)
  },[])
    
    //data.room = []
    // useEffect(()=>{
    //   const originaldat = async () =>{ 
    //    olddata.room.map(async (r)=>{
    //    const res = await apiClient(`${config.api_url.localHost}/Room/getroom/${r}`,{method : 'GET',}) 
    //     data.room.push(res.data)
    //    }) 
    //   }
    //   originaldat()
    // console.log("changedata")
    // console.log(data)
    //  },[])
  //console.log("EEEEEEEE")
  //console.log(data.room)
  return (
      <div className="pt-[95px]">
      <div className="container mx-auto flex-wrap">
        <div className="mx-8 border rounded-md border-[#999999] p-[25px] mt-[25px]">
        <div className="App">
      <Slideshow
        imgs={["https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjAyNzE5NzAwMjk3/hith-hanging-gardens-of-babylon-2.jpg","https://i.natgeofe.com/n/18b80fef-63f4-4423-8da0-d99ad9b614df/babylonian-oasis-artist-rendering.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1200px-Hagia_Sophia_Mars_2013.jpg","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcWFRgVFhYZGRgZHBocHBwcHCMeHRocHBoaGhoaHBwcIS4lHh4rIRwaJjgmKy8xNTU1HCQ9QDs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDQ0PTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAJ0BQQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBQIEBgEAB//EAD8QAAIBAgQEAwYFAgUCBwEAAAECEQAhAwQSMQVBUWEicYEGEzKRobEUQlLB8NHhI2JykvEVshYzU2OCouIH/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAnEQACAgICAgICAQUAAAAAAAAAAQIRITEDEkFRImETceEyUpGhsf/aAAwDAQACEQMRAD8AwWBk+v0q7h5UCjYS0dcKWECTB5dL/wBa4JTZ2RiQw8uByqymEtWcrkMTEE4aMw6jYxyHU9hVfWFJDSCNwQQQehHLekfYZVoKuD2oy4PahYeYHlRVzA61N9h6QQ5XtXFyx6Ga8mNVrDzAoOUkZJFY5M73ri5XtTJMcda6XU9KXvIPVC8ZbtXvww6VcL9K6p7UybNRVTK9qn+EPT51ev0oqaTyaaFmoWPlB3+Vdw8raYmKbOoAhhPmf6ULWBeAPNj9Vm9OpKw9RW+A7G9u2wihfhSd6ZDCDeMkweZsJ6TeujAG4/f70ZSaCoootkjA6faptw4iwI7Hr5VdRI3ntFXB8MnSTvLHb/470YysDiKcThzzBuY3v9K42SZBLH6x8utM24gf0rA7RNCzefSDKSCORM94Iv8AWmw/IKYqfNIPiYA/6p+lWk4euKgfCwTiHmQrKJ6TFzSTMOgPgQj/AF3NSyOfzSEDCzDqDqIUt4PDPIiqqEYq7FtnuI5J0a+C6diD++9UxhPJJgryU7iBemvGc07nDbEdmcoCzG0zyCiyi3yg0pzLDRY9Pv51eMk45A7RF8ktpWDANjMT59opbmMAiZp1mXAYXMgC/oKFjqGE/P8ArWirQrSE7LtB26daIqTvAPXrVk5cHax386jjJIgi8bd6GnQOuLK6JMwQTO396LDDy8zUPdgCxvAttXcvszEQYt/xRYlBGex0rB6yT1sJJ7VCG+vWvBzuaDq3Amx3o2Cgr4bNc8vnXWwVgDSTPSJqzl8MEQWidzEgWsZ+9GfJ6YSQGB3BmQRIMbieR70JTiMoksNEDKrxpCiBzv1iu5nhyG6OB5g/ei5fICZkEm886m/D2O01Hsl5KKLFn4BhsUPk1SxcAqBqU3FXMThzaZg/L+WqKa0TaR86LbawK4in3Q6CvU494f8A0/pXaX5eheqJYWXH6gK8pKOGU3VlKwel/nMfKqajqac+zyB2LM1lYjTJvA1SeVyNMd60+NRjey8KbLvEQ6AYuAzYCYqnXFpK6SxAi0ybjYixvSXL5bBxQWQlnBEvJBJixMWJ7mtfnOHriq7KdB+JVMOTH5dO5HKRYRPnkcXEQYjr70g7Rt4lFxaBAHWocbtVlFais1+yKZWJVnXUDsLbxBi3060TOZMoivpclpusMvncz8pvVbGyuGRrdyHO2k6jaQCD5fKu/iyUUFiUi2q8XPKImfnbpVnlKl/IlU3fn/RFMcwDBAJtIj6GjjFPKqmHhlzJsOXf5VZZDMDlvQcAJFnCxDHP51YTGHWqMECoRF5rPjiw5Q5DlthbrU8HAdjAFutVclngAdQ8jV/L8RUmNW/rPpU2mvAR3gZVNPi1XshHzv8A3qeDkliWcT0iYnqJ38qJlimjSz4c/lCi/K5nn6VSxSFMhwRzAEg/OlbjdtCqzmaxlR9WqegWCPWRVfHzaGT4Vm/j39IECqWfx2MkCByFI3xCTtJ8qeKT/QdDfF4mrQiqTfew+Qjam+TKBJgsYvLC3oCDSjggAaGAkzTHNOgiQsjkP3jajL3Ri1rZhqTC1dYKt/3GQaX5rHxdhgsfMoP3NMctjKyhw+gCCRA09LgUxwAhBcsrTeVse5sZ70nTOAdqMJn85iA6XhOqg39YvUMbEyhU+LGOJp20QmuNtZO09qL7T4GGjDQ7Em8NBN+erc+ooeW4FjPhjFUoUK6rYg1RpMjQTOoi23PeutRUdE5SEmaeB4bes1PLOTBBAMx8R8IOkazaAsm/l5URxKEjCc8pMD6C9WstlzolsLwquq5kxuC3QC8LaIk3vWUl5GUbY043kcQukJ4SiAEzE3PhLbiCLzSfiWX0QpZHJmQjao7Ha9OM3xXCdUCLOImGU1HbUxkPMzYB7bS88gKGuSV1LEDUbyQbknlBv8qXtT6h6+gGPlFxGCqyIdrncgxtvNW8lwRDJOMGCkqwA8JPbFTWqgbnUFIG+kGapvlcZNTzoCIXVg5WCGN1WLtMWB5edX8kFOLrd2QBgzvBuJ3KqDqnnuNz1plKS+IHHyVOJcEKSyMzATKlGDrESWlQCv8AmFvOqb4UjxDSYBvYnlIB5VpOOvlMRtOHjF2aDqVQ+kggmZIN+Ymlw4G+I4H4jUqodIZWUgal/KeVyd6Kd/1Gp1gSrw5Zk9bljb5VQ4gQhAUCPOZ/pT7M5TFwujr1U6h6jceormUyf4iVGCXKiToWSB5c/LselZOs7Qko2qWBbwpw3idF0joASadocFgYZV6qbVWHBolUOki8NYz5UrzWWZGIYbVOSUsjRtKmMsXh+HujqvOxkfI1NMJCwOoaoAm94Ec9vKk+E8G9XV2mlp6sZUy3inSbEgek+lETi7rGk9jqvPnQcmdRIJ3/AJaoY2V0mCs0U0jZGeLxhgsqAZ7AjvUMtxPCfwMgUnmBY+Y/vUOH8PVg0ntEbetAzHDoHh9aZqFXoWmMPeJ/k/2//qvUk/AN1rtTtezULg07in2VOA+WULpRwx1apUmCwPiiD5dhvSE4ZG5+dXcrlHVSxEKTvJHXl3vuIrp5FFpZEg2nRp/Z7ERCUVg7GTaWtaYiL95A3rL+1aF81iNpiQvMGfAp3FjvTLgrAYwUkEEOIYkiw1CV2g004zkEdg5dkYqAfDKkrCgxuPCD12HSue4w5LflDvtJUYQIYC/pmNhY3G3eT61ay2ATAbYbD60yxMFUJkbiJgXIYiVm8WP18qro1dMWpLAji08lpUAWwiL1M4gC2AvQcPErwSL8v5vSSXkvFnWcWFdx72XYCoBSTNWSPrUroNWBTCYiwtRUGgyd+UVLEb8s2G9dXDMyVOwo/aAMcuhVJLSx3qf4g13LPoGoxHQ86oZjPyxIH02qcuFtWzKXgZFA4EE36j+XrmKMIHSqydyZ27Uq/EsRvFjH8NVkQgyWj96PSlSNZoFSx02Jt6fKgtkzYHbt0oeSzYJjfzpnlzqO8D+fKueXdOg4FWcy0qUB0r8586q5fg6iPHDddO3zNTTjquSPdsIte37b0LEz2JifChgWn+RXRD8iViPqxfxvA0PE6hy8qq5LDWVlVJ1KZJ07HaT4Y2uelX8zl8UwDAkWj+tAy+WYbwenX51e7uxGs4GqFnQoWZCD8SMAT2kjbyNAdDhDUHYuAYmL6twYEmq+Hn2w2MHn37cwQaBmOLa2I0qJkTcm/STbzqX422P2obHiyFVXGyyoFZQ3ujDMIJWzEaRYyQOY86muXwmZHwDiokNfEgGBY2IvsbyPvVBMc/8Amss+NCbbj3bAG5uCL7x51zieKyLhhAQGSbNa55dPIfeaZp6WAJrbZdzDYSeN8x7yfCOaiJMALIJ8W3ehZbNNDyjvhvsRAYD/AEEAkd5FJFy2IVKaSV+KNI3Ox1eXKaBg5gpKguDcQCRuNh0qvFFRbk3bFfI3gZ68N2Y67f8AuJO3cTf1/enuJmsLAwUKuuIWhBFlWI1SRJ6k2m0RWdyDrbWk7nxQALAEjmTCiB9qEuaDBVYAKk6QeZJJZjPPbyqc3b1/geKs1ie1aRD4YEGAyydQ5NfSb/6f6Ut9o9LujYepGgmxIJMwLCBNC4fmEbSzAThkaT11at+sEWHeau5bhuFOvU0ltZBIgmZ6T9aguvG7V/8AQuL1srZzLPhtrViy28U32/N3NG/FjEUK4EjZovTPCwpYyPCRfmDPUde9Js/lThuVHmO45VbjmpLq9mceuSrm+FFbi89KhlDoPiFXsvnCLHbvXsbBV7rY9OvlQacXk1J5RTC1dwsdjYm/lel2Kmnkalk8fxCaWsmsunMFW8JIPM868eIupnVPY3oeI66rXFqMmCpWTuaPXs6Ce/6036V+Veon4Feg+teqn4ELYryGIuuXEgcr/cU4zTJir4GCMCYmYMnmRcHnMdazK4hXa3kYpo2C4vZh1Fj/AGoz41aZPjm2mi/wrDOvYllkhVJglQWk9vCfTvWkwsrocPikFhYYa7KCwkHzIa5/UIFZfg2ZCYstqDaSBbxdwp8p3I8602XyTuNTEYaXm/8A3NYmfTuDXNyJJ5ZS34FXtNm0OHoPxbKFE6YIJ1Oee8je+3OsmHrc8eymG2A+HhpdF96HO50EalFtgrEx9Kwkgc66eCSccEp2nksI1WcPEqmjUZXqjDGRdA77/SquYeGAFS97byo2XUMwJNc8lTL7R3CwyCCd96Z4WMCN7/t/PtVbEI5fShK3T61lOlgFewufeRNUsMTRMd+1Q1TypstaBSsMpjnuYqvmcXUbbCus216GVFB6Cz2HikGaZJmmKkAlSREjcTzHelzX9OdWUOvBdbpAvibrAJLCLG4gWJ3J6ClklsCsFwhFQMz43jkqqkhZ06QdRmD8VvU3izPM4xEMCTM8oH97gjzBrPZJTrIddRVfCwNrmeYgnzB500zGVCaDhuyGBrYfCWljBVIgjbptSyw1k0HcXgJjISNTD1E0E3rmYxnTCDnSyl9ABjVOgkNKESBuZG570PC4lht+pCT2YQTziG2j8p51aM1WQNK8A8XLgz1qs3DGEt0BY9gOdMHzeGI8YLG8AE/l1XMWMwNtyelc4ZnMT3oKMSWlYG2lvAYEGDfeOfQ0JNRV7N1UhUzk7mdMW9IH0EUbP59sRgSANKhQAIEDsOpJNOczk8LCD4jotySQPhAnwhQTAFwJqGXyaiMy6omEVKqgALOxuGUxEi1+UVlNbSJtNYZVyDtpEmRtXcXBB8QF+vPyoyKCSxIXUxIk9eUnfzo64ageIz2pLyUUcCoado87c6mmUG5imGJhpuP7igNidaZP0Gq2DCAfCPlVvAxP1D+1A9+BIiKFjZpdMXn+fSlabGwaTAzqrYEweRtVX2lA04bDeSP3rP4ebbYk1f4rjyqCep+wH70sIdZoDlaYPDyxdSyCWXdeZHVf3FBRjyv9/Sj8J4gySRH871LN6cSXUQ/5hybqR/m69fPe3bNMWvKKzOCb71B8sWuoPoJFDXFE6X2Ozc/7+VFV3wzYyORFwR+9Cs0a09kVwGBgz67CraYgVdwT0I+dTw8dcT4jBPyoWPlSNjS2vAUiX4xuteqp7lu9erdn7DQtB7CmmsSDzKrt3HalSKTYAknYAXPYCmpRkKhlghBItuLR51fk0cvExpwbNacfCNj4xMxImxuPWtZm8VtRLEsQTbkNJIAAtbnt0msEhiCLEQfK/wDftW6xsS+qLvoceTrc79jyrh5llM6UVsySpVyICsZGw0GzcriGY+lY7NcLZMTFwoLaNQBAnYyh2/MPvW0xcPUvi2YREdLAbdL0n4nnnT3DBvBpbDddKt40trBYGGIKnp2rcU3HCBKKezMHKOCwIMgAx5wY84P0NFymSd1LKDvbvvME7x+9Pv8AqGXfQ5Z5QhmsSzAgpLrJG5ksDy26XHyHvkOhm0BRqKgqjA3AUN4jHPzAvVnztLKoC414MgXixo2G4nYUPP4OhwJJlQZiJIJUwD5T61XD9KulasRyadDNsxUDjVRV+9XMLh+KwDBDB2JtPzrdUgdmyOJidzQUxPOgO56fWhsx6imSB2GAxrVBnG5pecQ8orxc8z8jW6h7jXK4iFoedPYTJkDrMQSbXt3o+LnWICHRpmVCiVAggK6sATe+3QjaaS5bEhr7R58xU85jFQpAJKtIXccwftU3FOWR+3xuyxlniRYiWgG8D4Y8UiOnP70zz2IwVFcKA8vp0xfvG/xavUdKUZR7sCZ0mw7SdulxTfjeKynLCDoZWY2sSEUeI+tqlJLsl+xov43+jmfKDLFiSRdEAUCHJ1FzBMWtvsPKkmHha1XTYmZJ/KAab52MbATBTTrV9WmY1WxLBjYnbpuKQ4JBXWlsQOVIn8oAmRMET0rRVJ+7BJ5PZlAjwYYQdJNth2tM+dEy+YVUZjOuIg8geaz358qjn8JdcO2luhnbkY5SCDUHysj4gRM7g8tv+ar0bSsn2puhvwnjRTCT3ialJMEswmNIgTICwoGw+lGzOaTEOrUFUA6UKwqg6msUkSbbxJf1pE+vwJAKpLKTbcixmQQN+m9WcsVxHfFdtAadA3lhaCQbCef8KONOxk7wHzY1OqBGa+lWQ6gSTBHhParb4ukkGxFjedrb867wRCMyiDxQ5vNjAb1O4v8A1rmfybI7CQY38QN+f9YvE7mjF3KmGTpWgRzBqLY9VmmoM9WSQndlr3lSZgdxVHVfnRUes0ZSDJheIRtNWM83iA6CgYT3qWZvfmKRJKVjN4BoStWExIINVsJzVhMShKA0ZEs5h7Hk1/I86hlm/K11PzU9aO7Blg1SmDRStU9oDdMNiYZViOf8vVrAzRiCZ86Cj6xB3GxoDoQazinvZlJrQz/Er0rtK9Rr1D8aD+RljUuGgKoZIEsbxPInYnlFh2NdwpfSdQ1AHckTc9vKjjMMN/FHWx/3Dc+ddCo5j4GPMmB/uHh+lK3Zkl4K+LhsvxDfny9CLVtOHvqwMFt5RkPONJkbHeLWFZ8cJxlXUhDKdvEIPk0lD/untTz2ed0RkfDuCXCixWQAZJ8Ki20zfblXPzO44GQyw8iAQzsFFyRabjxSeVKOIZL8S4RIXBXxEgQXciNUnYAW1GZmwYUxxyW8WMYWQVQedpnczzYeQU13Ee0uww0HLvIMzPigcupqEW078meQeWymGgCYSKxBnVFgRI1LN2YXuZjlArq8Xwkw3DYuH7xdQXmzmzAQDJWWYTePQ1lPaH2m1FsHCBVNmcCGbssjwjrG/bmlyjo9iDMGCWkg9fOrx4XJdpCuS0PDnlgI/iWTZrys2329KPlvcoYTDQHqfEfUtWbONeDuD/P53qXvq7EsEXJWbHBzOCrM4w8MELvoG/5YB260tzHEWZw3KQflSgZwhItLHftQff23t96NB7DPifDkxPGrhGO4IkE7zA2pHjZIgwuIjDqLfejPxCPCTVLGzo2AH7/0qkV7Fk0ROXcGJH0rmJhMoksAPOSfSa9hNqYA2HX0t9YomZyUAwbWN2tPO/OhJ1o0Unk4MZVgr0hmIvJ7dO4qWGDoLgFVBuxvz+u+1Ayzg2a/YbjpA536X7GjpmN/CAJgc+VugP73qd/Y1WAwM4isSg3ESxtIm40i2+21W3zT42Nh6tkREW4A2CFmJ+EEknp0JqtmMBS+l4LAxI26CQLen13qCxrUr+UxItIvy5iPvS3btGp6Y9w86MvdcOWY/G1gVgfDFvzA+oneATK/hljHZGAhtSEyCwvIYCSSbmeVUsHMst0MxBIHOCphgJESBuOVTTMIy6GQiwhkCiLILpMH4ZtEkntUqyWatUxRmXGIzO6QWMxB8I/KJ8oonDuHK7qNRK3kTyG/86kUxw8rvoxEcEN4WGkyVMHQ9jeNiaJlstiqj4hKLoVYIM6ySIEHn59vSsuT40sE48VO2Vs7kwHIwsVMNuaMWC3iNLQQN9iflUPw2JKq2EDqgLpZTc2kaTEEmqz5sa2LEAkz9hf5U44Ms4mHpG7qRuLyP6D5UjclGmMlFu0AzWbbBxlVNKsgdXIAgtcWAHLaed62Xs3ncIYekBSY8ZIBLE7kk7jzpTxv2VGIGxMEn3oZ9aOfC3iPwn8p33tfcVkExsTCcqwKspurCCD3Hyq8IprOyMpNM1XG8nhYjs+CVRQo8Oh9LMASxXSCqjYdPKs0DRsXieI/xOx9T8t9qAKZpLQtnK7NdrsULGJ4Zo5earA1MUGGzkxREY1BjUQTWNZZXENexCDQkna89qspkMVtkf1BH1NCg2V1xINGDzQ8fCZDDqVPcR96gpNZmsNprtBk16sawGHjkbMfLlVsZz9UX5g/tSfDxZjrUzifKazj7NGY+yXECp/w3ZD2m46EbGtL7MZcuxD4jlUhlUt4RvJv0iw7189wzvFP+EcexcEkIy+NSskTAPMX3sKjy8baaQ6karM8bRHdFl8RdQkmFLA3VibkTAsOW9YrOcZfEY+8ueQOy3uoB2vVXCtigsxEEbbk9yeX1oHEV0v5z85k3rQ4op4BKb2NMvmkaA4Ukc9Inykiaqv4GMbfaYIpamIN9iP+KtYuYkRNjyqqhT+icuS19kviM89zUg3WqwmZk1I4kbiq0RssYmYHW8VWfHPT+egoT4hOyxQnDHr/ADyoqIbCs57VEP8A5Yoa4XOI9YqRQdvnRoNkmjpQXedyY8+VSdR69aA4vNbqBs0yLlsZbKuHiR4jE6o/SAQBaLCLgXN55i8HKuUlmZipA02Lbssi0z3vI51n1xKbZHj+LhAANqC/CGgx032HOBbtUHFrRSMkGzXDhhKDikqN1BXcEQYOrxfa5vS5M0HJAB0r6kjuReOw61Uz+bfEYu7FmPWmXDs8gREcNAG4PmeY2kmm6tR+zKScq8EMfBUaDhkkkAteymOpvy2muLisPG3iiVjn5mOV9/KrZy6uSUIvyJgk9p9BvTjI8HKIzYulAqsJMFgzARIG9rx3FTkuqzkosv0hNlswbBhBbrsbjb6U/wAPCb8HmGMQukm0TGkA/vWRz+aLYuoSArHT2v8ASrT8Sdsu6M50llJERJG0xvFaXFbVfRlzNJidmuTenHBeKPhMmnTCmRI23PLe971Ry+VZyFRSWOwFya1XB/Yh2ZTjvoUn4Vu3q2w+tXlFVkhHteCXDfaVpOolpJmTeTuZqxxjPZfMYZJXTioPCxAkgGdGobi5sdqdZT2SygGpsLUBJviYikgnwizwTtyG9SxvZPKhgyYThSP1vYyRB1b8rjrQdD/LRgDhVzSa+hL7M5e3gb/eaHjeyWBMasRJ+E6gQ0b2KnxDmJ77GgwdWYCK6K1WZ9jnnwYuGwP6gUP0DD1mqWN7L5lZ/wAItH6CrE+Sg6j8q2DUxJproNGbAKkqQQRYgiCD0IO1QK1qDYMk9K9Ndee1VnY8zWo1jHIZ58JtStE71oMH2sBs6C3Nf3BrFO55VATzFMl7N2fg+ktxjKY6aMWV7kbHqpGxrN8V4PoHvMNxiYRMBpEqf0sOvf7Vn0QmrCp/JpWktGtvYTT3rtDg9q9QCI8FzO1WzidaprPKpDEM3NWasgpUXVeBHb966j28qotO9e9786DgMuRjLN4l1YG+xoTtqXfagB5EV1UPWlUUgSk2dRSRA+Z/pUtMbkTXQveveV6YBxnPpUW+fzqTk/wVwJRMQKHvXQpoiiOQqRb+Ch2CBjrUgwHKa4+H50Mp3o7MFLA2j0H/ABUHRdrg/wA61rfYDh8s+M0QPAv3Y/atg+VBNwD5gH70rmk6KRhas+P6VHI1xsQdKd+1vBvcYislsPE1Mg/SVI1p5CQR2YdKSBBTKnkm7Tors00ZHsKKqjtXjh1qsGjyv0+lNMnmG0EFiQGkDvG9KlTl+9XMDDIFzbekcBlJgFwWYzG5NM+E8LLyp+GZMelu5oGWl3CIN+cbVv8AgmTVIsdK8+rdTTDQjbGHCuDpgqAigGPEYv8AOaY6B6UbAcH0uD08+1BxCA7qJEERad1DbHz9PpU7tlvo65Gw+GRA/TG0GhkgCAPraou5n9x+4OxqLdKZGCYbUXDxVhlcShFxz1CdJXo08+5qohmpwSYNKzbC4agQSSR0gC/nf+Ci4QceEDWOTAgOfMOYJ7g+lDbLn8jR2Nwa5lMRphxpA3I5VtqzFXj/AAdMwoaDh4wEIzizjYIxEjyPLbbb57mcsyMyOpVlMMDYg9DX2HH4ghXSATNoaCv+rzpD7QcHTHUPOl1EawJlRsri0xyM22oJk3Fs+ZlKC1jWlxvZvEjwMj9g2k/J4H1pFncm6GHR0P8AmUgeh2PpRZqaK0dq6AK4F6VICgA6AK9NeAqSisMjleqderBofZD2UwFjWXbzaB/9QD9af4Ps5lPzZdDPMgk/7iZoiMGg1bZ1EdaRzbAox9GT45//AD4GXyhNrnCZpn/Q5vPZvmKwr5XSxVgQwMEGxBG4I5V90yeIt56H7V8f4/iBs3jEbayD5iA31BqkJydpkpxSaooph9IrrCrSYQY2hQIkkz8hzr2YwRyP1Bmt2zQemLKUV6a89RmqEyVM+C8ExMy0IIUfE5HhX+p7CmPCfZZm0vj+FDfTMMRyk8vLfyr6HkMfLhFTDdFC2gECO0UknWisYf3GIzfskmFhO74jtoEnSAATMAQQYv3rIgdxW19uPaFSGy2GbGNZ8iDB+W3z5VhBiCjG2siScbwGI71EoO1DOL2oT4n8mmSYLR9S9ihpyyACxknzJn+lPS1Yn2X9okRURrKAAeewiQK1Z9pcsCFRmcm3hUkk9AIkn0qcou8I6IyjWxZ7VZI42VeBLYRGIvoCHHeUk+YFfMgp6VvPbPjg1e7QMoi4NiZ6isQpp42kQk05Oji4fWiIgrwFcZwO9HLBgOu1VcbMk7WqGLjcuVOOA8G1/wCK48A+FT+Y9T/l+/luarYUuzpDn2P4MxBxm3bYn8q9fM1tsPKlPCokQSYInuYNeyGH4FERaI6/3ruI8OF5q0N28+lI27OlRpUhjlsKFghrzO1xGwvvvVLFxSzMxEEm46dvtVvCxJE86Fj4Oo6l+Ibj9Y8+TDvSp5yZFZbzRBhg78t/OhssfPp9+lcHemCScbgV7AxDZo5bVFT1NhUVxxtBFBg0MkxAYijKFclGEWBDDdZn5r2pYmYQNpYlZ5xI9avYBG4YO35QDEecwfSleDOgWNkXRipAa3I7jkY3HKp4GGIIvB68qEcZtRZvi2PXe8968+ZvPWtk2SpmMppYQwg7H7A9KLhYxW0kGiO4I7Gq2ZSPELgCjd4ZrA5/hGBjjxoFb9aAK/raG9QfSsxxP2RdJbC/xUF7CHHml9XmvyFa7LYwIn59qtM8fSs1QHFHydsIi1xFRINbT2uw0ZVfSvvCZZoGplAiWIuYtc1kIEiTA5neO8c6VtAoFfv8q9Tj/wAOY3XD/wB/9q9WtGG2XzUEVfGODc8uVfNxx/EUTY+dU34zitPiib2n+tMuMl+Sj6hm+KKg323EiflNfOuNZoYmZxMRdmafoB+1K3xWYwzE+f8ASp4LXp1FREcm2MsvmY2W/wDOdGzMOJG/Oqi36/OiAaRIqTq7Wyqbqiu9CZqhmcU6jQiaulgjJ5HC8efQEJYgbDVaYiY61W/GvMgwdweY8jVJLVOaNg3skzbk79+dCUGpsbUKayMwgNcZaiK9NEx4OVuDX2D2UyeFg4aFUUOyDU5uxJEm52HYWr48BNbr2Wz74imWYAECxj6xSTVopxUno2XtLl8HEy7nFRXIEIw+MOdtJF/TYxXyR8B0s6sp6MpU/Wt42WJ/xhiONBMLqnxCRqJaeXKKzntfnWZcLUzN4nHiMxbDmIAielJFVhDS9iJ35Chu0Che8MVLLJrdFJsxAPrerrCJbLnBuH++xADOkXI69q+o8OyAUAkC0QNojakfA8DDw592gWI5kk9yTc05ws4waN7fepyydMI9UavJYxJUnS0Ebi/oetJMkpXExkYywctJ3Ia4Pyg+tU8TPNuLHz71fdzixjElXgoSseIWImQdr/OkqjXTLGAhA0/Kj4zaPD+bn51XwwRHiJ53j9gKk66hMkfX70reQ2gDKZmhEdD/AD+lBbMkMRvAH7/0rxxTv9KYNhny3hIkAkQp2g9+3avYDyBrADx4o2J8xaq74pkCdr1JGoPJiWZQdSB9q5hwpuZB51wt2qAjpRMMlcGCDPXvFeaqQxYsAAK6Mck0KMH1AHz5fzaps0eXfa/KqRxib15McyR2P0uDRNZ3FQK4ZLBt+1poy4piD/IqhmMTa2wB+dKjiNrJ1EhhBU3HmJ2ou2gWFz3HsIPp06gLFwZAneBzFAPC8LWrqTp3ABBXqCO1ZniK6XZRsP8AmKs8H4gxBTkLjt28qinbpitmq/EN+qvUj/FNXqegH//Z"]}
      />
    </div>
        </div>
        <div className="mx-8 border rounded-md border-[#999999] px-[25px] pb-[25px] pt-[15px] mt-[25px]">
          <div className="mb-[5px]">
            <div className="mb-[5px]">
              <p className="text-[26px] font-semibold">
                {data.name}
              </p>
            </div>
            <div className="mb-[5px]">
              <div className="flex">
                {
                    Star(data.rating).map((s:number,i)=>{
                    return(
                        s?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#EDEA10" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#EDEA10 " className="md:w-8 w-4 md:h-8 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                    )})}
                </div>
            </div>
            <div className='py-2'>
              <p className="text-[16px]">{data.rating} { SelectDescription(data.rating)}
              </p>
            </div>
            <div className="flex text-blue-500 text-sm md:text-base py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="md:w-6 w-8 md:h-6 h-8 md:pb-0 pb-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p className="">{data.address}</p>
        
        </div>
        <div className="flex py-2"> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-8 md:h-6 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>

          <p className="">
            {data.phone}
          </p> 
        </div> 
        <div className="flex py-2 space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="md:w-6 w-8 md:h-6 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>

          <p className="">
            {data.email}
          </p> 
        </div>
          </div>
          <div className="border border-[#D8D8D8] mt-[15px]"></div>
          <p className="mt-[15px]">
            {data.about}
          </p>
          
        </div>
        <div className="md:grid md:grid-flow-col md:justify-self-center mt-5">
          <div className=" w-96 "></div>
          <div className=" w-96 "></div>
          <div className="flex space-x-4 ml-72 md:ml-5">
            {
              
              selectDelete ?
                deletedData.length>0 ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10" onClick={sendFormDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              :'':
              <Link to={`/hotel/${id}/addroom`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </Link>
            }
            {
              selectDelete ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>

              :<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8" onClick={toggleDelete}><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
            }
          
          </div>
        </div>
        <div className="grid grid-flow-row mx-8 ">
            {
                
                data.room.map((ro,i)=>{
                    // const props = {
                    //   roomid : data.room[i],
                    //   discount : data.discount
                    // } 
                    
                    //r.discount = data.discount;
                    return(
                        selectEdit? '':
                    selectDelete ?
                    <div className="grid grid-flow-col place-content-center ">
                        <div className=" relative grid-flow-row ">
                        <div>
                        {
                        selectStatus[i] ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="z-40 h-16 w-16 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        : <button className="z-40 h-16 w-16 bg-white rounded-md border-2 border-black-900 absolute top-5 left-[0%]" onClick={()=>toggleStatus(i)}> </button>
                        }
                        
                    </div>
                        
                    <div className="z-30 w-[100%]  h-[95%] bg-slate-300 opacity-20  mx-auto absolute top-5 left-[0%]  rounded-lg"></div>
                    <RoomCard ro={ro}/>
                    
                    </div>
                    </div>
                    :
                    <div >
                    <div className="flex justify-end relative" >
                      <Link to = {`/hotel/${data.id}/editroom/${ro}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" mt-5 w-6 h-6 md:w-10 md:h-10 absolute top-7 right-[5%] md:right-[8%]" onClick={()=>makeEditform(data.id)}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                    </Link>
                    </div>
                    <RoomCard ro={ro}/>
                    
                    </div>
                        
                    )
                })
              }
        </div>
      </div>
    </div>
  )
}

export default HotelInnerRoomCard
