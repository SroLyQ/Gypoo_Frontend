import React,{FormEvent,useEffect} from 'react'
interface profileFormState {
  name: string;
  lastname: string;
  email: string;
}


function HotelProfile() {
  const [userForm, setUserForm] = React.useState<profileFormState>({
    name: '',
    lastname: '',
    email: '',
  });
  const [popup,setpopup] = React.useState<boolean>(false)
  const sendForm = async(e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const {name,lastname,email} = e.target as typeof e.target & {
      name : {value : string},
      lastname : {value : string},
      email : {value : string},
    }
    const jason = JSON.stringify({
             name : name.value,
            lastname : lastname.value,
            email : email.value
         })
    console.log(jason)
    setpopup(false)
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
    setUserForm({name:name.value,lastname:lastname.value,email:email.value})
  }
  function handleProfile(e:FormEvent<HTMLFormElement>){
    const {name,lastname,email} = e.target as typeof e.target & {
      name : {value : string},
      lastname : {value : string},
      email : {value : string},
    }
    setUserForm({name:name.value,lastname:lastname.value,email:email.value})

  }
  const openEditPopUp = () =>{
    setpopup(!popup)
  }
  const closeEditPopUp = () =>{
    setpopup(false)
  }
  return (
    <>
    <div className="pt-24">โปรไฟล์อะไรก็ใส่มึงได้อะ</div>
    
    <div>{
        popup ?
        <div className="block w-screen ">
        <div className=" mx-auto border-2 border-black-900 w-2/3 rounded-lg md:px-16 sm:px-12 px-10 py-10  ">
        <div className="flex  justify-between w-auto ">
            <p className=" md:text-2xl sm:text-sm text-sm">Edit Profile</p>
            <div className="flex">
            <svg  onClick={closeEditPopUp} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
          </div>
          <div className="border-b-2 border-black-900 pb-4 mt-2 md-2">
          </div>
        <form className="pt-4" onSubmit={e=>{sendForm(e)}} >
          <fieldset className="field-area pt-3">
            <label htmlFor='name' className='mr-2'>
              Name :
            </label>
            <input type="text" id ="name" className="border-2 border-black-900 rounded-lg"/>
            
          </fieldset>
          <fieldset className="field-area pt-3" >
            <label  className='mr-2'>
            Lname :
            </label>
            <input type="text" id="lastname" className="border-2 border-black-900 rounded-lg"/>
          </fieldset >
          <fieldset className="field-area pt-3">
            <label htmlFor='name' className='mr-2'>
            Email :
            </label>
            <input type="text" id ="email"  className="border-2 border-black-900 rounded-lg"/>
          </fieldset>
          <div className="flex  justify-end w-auto ">
          <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">ยืนยัน</button>
          </div>
        </form>
      </div>
      </div> : 
      <div className="block w-screen ">
        <div className=" mx-auto border-2 border-black-900 w-2/3 rounded-lg md:px-16 sm:px-12 px-10 py-10  ">
          <div className="flex  justify-between w-auto ">
            <p className=" md:text-2xl sm:text-sm text-sm">My Profile</p>
            <div className="flex pt-3">
            <svg  onClick={openEditPopUp} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>

            <p  onClick={openEditPopUp} className='text-sm'>edit</p>
            </div>
          </div>
          <div className="border-b-2 border-black-900 pb-4 mt-2 md-2">
          </div>
          <div className="flex mt-4 ">
            <div className="mr-8">
            <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67abf060-d47c-4593-9655-19533a29e467/dew31gr-65edb5db-42ad-4c1d-af4f-637aa7d555f8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY3YWJmMDYwLWQ0N2MtNDU5My05NjU1LTE5NTMzYTI5ZTQ2N1wvZGV3MzFnci02NWVkYjVkYi00MmFkLTRjMWQtYWY0Zi02MzdhYTdkNTU1ZjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GyaK76NJ2JwRCx017QDOfMD3WdZhmxEqr9bijyidgHM" className="rounded-full md:h-40 sm:h-20 h-20"/>
            <div className=" rounded-lg my-4 mx-auto bg-slate-300 md:w-32 sm:w-16 w-16 ">
              <div className="text-center md:text-base sm:text-sm text-sm">ผู้ให้บริการห้องพัก</div>
            </div>
            </div>
            <div className="mt-6">
                <p className="mb-4 text-sm text-ellipsis overflow-hidden">ชื่อ : {userForm.name}</p>
                <p className="mb-4 text-sm text-ellipsis overflow-hidden">นามสกุล : {userForm.lastname}</p>
                <p className="mb-4 text-sm text-ellipsis overflow-hidden">Email : {userForm.email}</p>
            </div>
          </div>
        </div>
      </div>
      
    }
    </div>
    
      
      
    </>
  )
}

export default HotelProfile