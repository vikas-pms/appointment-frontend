import { BarsOutlined, CalendarOutlined, CaretDownFilled, CarryOutFilled, CarryOutOutlined, CheckOutlined, ClockCircleFilled, CloseOutlined, EyeFilled, FilterFilled, LeftOutlined, MailFilled, PhoneFilled, RightOutlined, SearchOutlined, TableOutlined, WechatFilled } from '@ant-design/icons'
import { Card, Col } from 'antd'
import React from 'react'

function AppointmentPage() {
  return (
    <>
    <div className='flex justify-between'>
      <h1 className='text-2xl font-bold'>Appointment</h1>
      <div className='flex gap-4'>
        <div className='border rounded-lg py-2 px-2'>
        <input  className='outline-none ' type="text" placeholder='Search' />
        <SearchOutlined className='text-2xl place-items-center'/>
        </div>
        <ul className='flex gap-2'>
          <li ><BarsOutlined className=' border rounded-lg  w-10 h-10 text-2xl place-content-center hover:bg-blue-700 hover:text-white hover:cursor-pointer'/></li>
          <li ><TableOutlined className='border rounded-lg  w-10 h-10 text-2xl place-content-center  hover:bg-blue-700 hover:text-white hover:cursor-pointer'/></li>
          <li ><CarryOutOutlined  className='border rounded-lg  w-10 h-10 text-2xl place-content-center  hover:bg-blue-700 hover:text-white hover:cursor-pointer'/></li>
        </ul>

      </div>
    </div>
    <hr className='mt-5 mb-5' />
    <div className='flex gap-2'>
    <button  className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Upcomming <span className='border rounded-lg px-2  bg-white text-black'>21</span></button>
    <button  className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Cancelled <span className='border rounded-lg px-2  bg-white text-black'>16</span></button>
    <button  className='border rounded-3xl px-2 py-2 bg-slate-200 hover:bg-blue-700 hover:text-white font-bold'>Completed <span className='border rounded-lg px-2  bg-white text-black'>214</span></button>
    </div>
    <div className='flex gap-2'>
      <button className='border rounded-lg px-5 py-2 mt-3'><CalendarOutlined  /> 09/10/2024 - 09/16/2024</button>
      <button className='border rounded-lg px-5 py-2 mt-3'><FilterFilled /> Filter By <CaretDownFilled /></button>
    </div>

    <div>
      <div className='flex justify-between items-center mt-5 border rounded-lg py-5 px-5 '>
        <div className='flex  items-center gap-2'>
          <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
          <div>
            <span>#Apt0001</span>
            <h1>Adrin</h1>
          </div>
        </div>
        <div>
          <div><ClockCircleFilled />11 Nov 2024 10.45 AM</div>
          <div className='flex gap-2'>
            <p>General Visit</p>   
            <p>Vedio call</p>
            </div>
        </div>
        <div>
          <div><MailFilled /> adran@example.com</div>
          <div><PhoneFilled /> +1 504 368 6874</div>
        </div>
        <div className='flex gap-2 '>
        <EyeFilled  className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200 hover:bg-blue-700 hover:text-white' />
        <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        </div>
       <a href=""><button className='underline'>Start Now</button></a> 
      </div>
      <div className='flex justify-between items-center mt-5 border rounded-lg py-5 px-5 '>
        <div className='flex  items-center gap-2'>
          <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
          <div>
            <span>#Apt0001</span>
            <h1>Adrin</h1>
          </div>
        </div>
        <div>
          <div><ClockCircleFilled />11 Nov 2024 10.45 AM</div>
          <div className='flex gap-2'>
            <p>General Visit</p>   
            <p>Vedio call</p>
            </div>
        </div>
        <div>
          <div><MailFilled /> adran@example.com</div>
          <div><PhoneFilled /> +1 504 368 6874</div>
        </div>
        <div className='flex gap-2 '>
        <EyeFilled  className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white' />
        <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        </div>
       <a href=""><button className='underline'>Start Now</button></a> 
      </div>
      <div className='flex justify-between items-center mt-5 border rounded-lg py-5 px-5 '>
        <div className='flex  items-center gap-2'>
          <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
          <div>
            <span>#Apt0001</span>
            <h1>Adrin</h1>
          </div>
        </div>
        <div>
          <div><ClockCircleFilled />11 Nov 2024 10.45 AM</div>
          <div className='flex gap-2'>
            <p>General Visit</p>   
            <p>Vedio call</p>
            </div>
        </div>
        <div>
          <div><MailFilled /> adran@example.com</div>
          <div><PhoneFilled /> +1 504 368 6874</div>
        </div>
        <div className='flex gap-2 '>
        <EyeFilled  className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white' />
        <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        </div>
       <a href=""><button className='underline'>Start Now</button></a> 
      </div>
      <div className='flex justify-between items-center mt-5 border rounded-lg py-5 px-5 '>
        <div className='flex  items-center gap-2'>
          <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
          <div>
            <span>#Apt0001</span>
            <h1>Adrin</h1>
          </div>
        </div>
        <div>
          <div><ClockCircleFilled />11 Nov 2024 10.45 AM</div>
          <div className='flex gap-2'>
            <p>General Visit</p>   
            <p>Vedio call</p>
            </div>
        </div>
        <div>
          <div><MailFilled /> adran@example.com</div>
          <div><PhoneFilled /> +1 504 368 6874</div>
        </div>
        <div className='flex gap-2 '>
        <EyeFilled  className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200 hover:bg-blue-700 hover:text-white'/>
        <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200 hover:bg-blue-700  hover:text-white' />
        <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        </div>
       <a href=""><button className='underline'>Start Now</button></a> 
      </div>
      <div className='flex justify-between items-center mt-5 border rounded-lg py-5 px-5 '>
        <div className='flex  items-center gap-2'>
          <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
          <div>
            <span>#Apt0001</span>
            <h1>Adrin</h1>
          </div>
        </div>
        <div>
          <div><ClockCircleFilled />11 Nov 2024 10.45 AM</div>
          <div className='flex gap-2'>
            <p>General Visit</p>   
            <p>Vedio call</p>
            </div>
        </div>
        <div>
          <div><MailFilled /> adran@example.com</div>
          <div><PhoneFilled /> +1 504 368 6874</div>
        </div>
        <div className='flex gap-2 '>
        <EyeFilled  className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        <WechatFilled className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white' />
        <CloseOutlined className='border rounded-full w-8 h-8 place-content-center text-xl bg-slate-200  hover:bg-blue-700 hover:text-white'/>
        </div>
       <a href=""><button className='underline'>Start Now</button></a> 
      </div>
    </div>
    <div className='flex justify-center mt-10 gap-5'>
      <LeftOutlined className='border rounded-sm text-xl  w-8 h-8 place-content-center py-2 px-3' />
      <ul className='flex gap-5'>
        <li className=''><a className='border rounded-sm text-xl w-8 h-8 place-content-center py-2 px-3' href="">1</a></li>
        <li><a className='border rounded-sm text-xl w-8 h-8 place-content-center py-2 px-3' href="">2</a></li>
        <li><a className='border rounded-sm text-xl w-8 h-8 place-content-center py-2 px-3' href="">3</a></li>
        <li><a className='border rounded-sm text-xl w-8 h-8 place-content-center py-2 px-3' href="">4</a></li>
        <li><a className='border rounded-sm text-xl w-8 h-8 place-content-center py-2 px-3' href=""> ...</a></li>
      </ul>
      <RightOutlined className='border rounded-sm  w-8 h-8 place-content-center py-2 px-3'/>
    </div>

    </>
  )
}

export default AppointmentPage