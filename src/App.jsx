import { useState, useRef, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { v4 as uuidv4 } from 'uuid';
import "./App.css"
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const [formList, setFormList] = useState([])
  const [showImg, setshowImg] = useState("view-stroke-rounded.svg")
  const [showPasssword, setshowPasssword] = useState("password")
  const firstRender = useRef(true)
  const showPass = () => {
    if (showImg == "view-stroke-rounded.svg") { setshowImg("view-off-stroke-rounded.svg"); setshowPasssword("text") }
    else { setshowImg("view-stroke-rounded.svg"); setshowPasssword("password") }
  }

  useEffect(() => {
    const oldList = localStorage.getItem("formList");
    if (oldList) {

      setFormList(JSON.parse(oldList))
    }
  }, [])
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = !firstRender.current
      return
    }
    localStorage.setItem("formList", JSON.stringify(formList))
  }, [formList])

  const deleteData = (e) => {
    const deletepass = formList.filter(items => items.id !== e);
    setFormList(deletepass);
  }
  const editData = (e) => {
    const editForm = formList.find(items => items.id == e)
    setValue("name", editForm.name)
    setValue("url", editForm.url)
    setValue("password", editForm.password)
    const delForm = formList.filter(items => items.id !== e)
    setFormList(delForm)
  }
  const copyToClipBoard = (e) => {
    
    
    navigator.clipboard.writeText(e).then(() =>{ toast.success("Copied!!",{hideProgressBar: true,
  icon: false,style: {
    background: "#e610e6",   // Purple
    color: "white",
    progressbar:"false"
  }}) }).error(() => { toast.error("Copy failed",{hideProgressBar: true,
  icon: false,style: {
    background: "#e610e6",   // Purple
    color: "white",
    progressbar:"false"
  }}) })
  }


  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm()


  const onSubmitted = (e) => {
    setFormList([...formList, { id: uuidv4(), name: e.name, url: e.url, password: e.password }])
    reset()
  }


  return (
    <>
      <div className="absolute inset-0 -z-10 h-[100vh] w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#800080_100%)]"></div>
      <div className='w-full h-full  mx-auto'>
        <div className='w-4/5 mx-auto flex flex-col items-center'>
          <div className='header font-black text-5xl'>
            <span className="text-purple-500">&lt;</span><span className="text-purple-500">inferto</span><span className="text-purple-500">/&gt;</span>
          </div>
          <form className="form   flex flex-col gap-2.5 w-full mt-2" onSubmit={handleSubmit(onSubmitted)}>
            <div>
              <input type="text" {...register("url", { required: true })} className='p-2.5 bg-transparent appearance-none rounded-full border-2 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-purple-500 focus:shadow-purple-500' placeholder='your url' />

            </div>
            <div className='flex justify-between'>

              <input type="text" {...register("name", { required: true })} className='p-2.5 bg-transparent appearance-none rounded-full border-2 border-netural w-2/5 outline-none transition-all duration-300 focus:shadow-2xl focus:border-purple-500 focus:shadow-purple-500' placeholder='your name' />

              <button type="submit" className='bg-purple-600 text-white font-medium w-16 rounded-2xl' >
                Add
              </button>
              <div className='relative w-2/5'>

                <input type={showPasssword} {...register("password", { required: true })} className='p-2.5 bg-transparent appearance-none rounded-full border-2 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-purple-500 focus:shadow-purple-500' placeholder='your password' />
                <span className='absolute right-3 bottom-[12px] cursor-pointer' onClick={() => { showPass() }} onMouseDown={(e) => e.preventDefault()} >
                  <img src={showImg} alt="" />
                </span>
              </div>
            </div>

          </form>
          <div className=' w-full mt-4 rounded-lg'>
            {(formList.length == 0) && <div className='text-purple-800 font-black'>No Password Save Right Now</div>}
            {(formList.length > 0) && <table className="table-fixed w-full rounded-lg border-separate border-spacing-2">
              <thead className='bg-purple-400 text-white rounded-lg'>
                <tr>
                  <th className='text-center w-[50%] text-[10px] sm:text-[14px]' >Url</th>
                  <th className='text-center w-[35%] text-[10px] sm:text-[14px]' >Username</th>
                  <th className='text-center w-[35%] text-[10px] sm:text-[14px]' >Password</th>
                  <th className='text-center w-[15%] text-[10px] sm:text-[14px]' >Actions</th>
                </tr>
              </thead>
              <tbody>
                {formList.map(item => {
                  return <tr key={item.id}>
                    <td className='text-left px-1 border-purple-300 rounded-2xl  border-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-purple-900 relative'>
                      {item.url}
                      <img src="copy.svg" alt="copy-icon" className='absolute  right-3 bottom-0.5' width={20} onClick={() => { copyToClipBoard(item.url) }} />
                      <ToastContainer/>
                    </td>


                    <td className='text-left px-1 border-purple-300 rounded-2xl  border-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-purple-900 relative'>
                      {item.name}
                      <img src="copy.svg" alt="copy-icon" className='absolute  right-3 bottom-0.5' width={20} onClick={() => { copyToClipBoard(item.name) }} />
                      <ToastContainer/>
                    </td>


                    <td className='text-left px-1 border-purple-300 rounded-2xl  border-2 overflow-x-auto whitespace-nowrap scrollbar-hide text-purple-900 relative'>
                      {"*".repeat(item.password.length)}
                      <img src="copy.svg" alt="copy-icon" className='absolute  right-3 bottom-0.5' width={20} onClick={() => { copyToClipBoard(item.password) }} />
                      <ToastContainer/>
                    </td>

                    <td className='text-left px-1 border-purple-300 rounded-2xl  border-2 flex gap-1 justify-around flex-col items-center sm:flex-row'>
                      <img src="edit.svg" alt="" width={25} onClick={() => { editData(item.id) }} />
                      <img src="delete.svg" alt="" width={25} onClick={() => { deleteData(item.id) }} />
                    </td>
                  </tr>
                })}

              </tbody>
            </table>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
