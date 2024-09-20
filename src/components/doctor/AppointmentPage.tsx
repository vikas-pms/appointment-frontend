import { BarsOutlined, CalendarOutlined, CaretDownFilled, CarryOutFilled, CarryOutOutlined, CheckCircleOutlined, CheckOutlined, ClockCircleFilled, CloseOutlined, EyeFilled, EyeOutlined, FilterFilled, LeftOutlined, MailFilled, PhoneFilled, RightOutlined, SearchOutlined, TableOutlined, WechatFilled, WechatOutlined } from '@ant-design/icons'
import { Avatar, Card, Col } from 'antd'
import React from 'react'

function AppointmentPage() {
  return (
    <>
      <div className='grid sm:grid-cols-1 lg:flex justify-between'>
        <h1 className='text-2xl font-bold flex flex-col'>Appointment</h1>
        <div className="flex  flex-col">
          <div className=' grid sm:grid-cols-2  gap-4  lg:flex justify-between'>
            <div className=' flex justify-between border rounded-lg py-2 px-2'>
              <input className='outline-none ' type="text" placeholder='Search' />
              <SearchOutlined className='text-2xl ' />
            </div>
            <div className='' >
              <ul className='flex gap-2'>
                <li ><BarsOutlined className=' border rounded-lg  w-10 h-10 text-2xl place-content-center hover:bg-blue-700 hover:text-white hover:cursor-pointer' /></li>
                <li ><TableOutlined className='border rounded-lg  w-10 h-10 text-2xl place-content-center  hover:bg-blue-700 hover:text-white hover:cursor-pointer' /></li>
                <li ><CarryOutOutlined className='border rounded-lg  w-10 h-10 text-2xl place-content-center  hover:bg-blue-700 hover:text-white hover:cursor-pointer' /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='mt-5 mb-5' />

      <div className='grid sm:grid-cols-1 lg:flex md:flex gap-2'>
        <button className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Upcomming <span className='border rounded-lg px-2  bg-white text-black'>21</span></button>
        <button className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Cancelled <span className='border rounded-lg px-2  bg-white text-black'>16</span></button>
        <button className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Completed <span className='border rounded-lg px-2  bg-white text-black'>214</span></button>
      </div>
      <div className='grid sm:grid-cols-1 md:flex lg:flex gap-2'>
        <button className='border rounded-lg px-5 py-2 mt-3'><CalendarOutlined /> 09/10/2024 - 09/16/2024</button>
        <button className='border rounded-lg px-5 py-2 mt-3'><FilterFilled /> Filter By <CaretDownFilled /></button>
      </div>

      <div className="overflow-scroll  lg:overflow-hidden">

       
        <div className="mt-5  flex  items-center  justify-between lg:hover:bg-green-100 lg:shadow-md p-4 gap-10">
          <div className="flex items-center gap-x-3">
            <Avatar shape="square" size={70}
              src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
            <div className="font-medium">
              <span>#2465655</span>
              <h1 className="text-xl">Abhi</h1>
            </div>
          </div>
          <div className="text-nowrap font-medium">
          <p><ClockCircleFilled />11 Nov 2024 10.45 AM</p>
            <p className="  ">General Visit | Audio Call</p>
          </div>
          
          <div className='text-nowrap font-medium'>
            <div><MailFilled /> adran@example.com</div>
            <div><PhoneFilled /> +1 504 368 6874</div>
          </div>
          <div className='flex gap-2 '>
            <EyeFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white' />
            <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200 hover:bg-blue-700 hover:text-white' />
            <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white' />
          </div>
          <a href="#" className='underline text-lg font-medium text-nowrap'>Start Now</a>
        </div>

      </div>


    </>
  )
}

export default AppointmentPage