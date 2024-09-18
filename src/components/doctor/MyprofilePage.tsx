import { Avatar, Card, Col, Row } from 'antd'
import React from 'react'

function MyprofilePage() {
  return (
    <>
      <Row className=' flex justify-around bg-gradient-to-r from-orange-200 via-yellow-300 to-red-500 p-6 text-white'>
        <Col className='bg-purple-300' span={12}> 
        <div className=' w-fullh'>
          <img className='w-full h-full ' alt="example" src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/doctor-profile-img.jpg" />
          <h1 className='text-2xl font-bold text-center mt-10'>Dr. Vikas Kumar</h1>
        </div>
        </Col>
        <Col span={12}><div className='bg-slate-500 place-content-center p-10'>
          <h1 className='text-2xl font-bold mb-5'>Profile</h1>
          <h1>Dr. Vikas Kumar</h1>
          <h1>MBBS</h1>
          <p>Appollo Hospital Lucknow</p>
          <h1>India</h1>
          <h1 className=' font-bold mt-5 text-red-300'>Speciality</h1>
          <div className='flex gap-5 mt-2'>
            <h1 className='border rounded-3xl bg-slate-500 py-1 px-4'>Caidiology</h1>
            <h1 className='border rounded-3xl bg-slate-500 py-1 px-4'>Nrurology</h1>
          </div>
          <div className='flex gap-5 mt-2'>
            <h1 className='border rounded-3xl bg-slate-500 py-1 px-4'>Periodontology</h1>
            <h1 className='border rounded-3xl bg-slate-500 py-1 px-4'>Psychology</h1>
          </div>
          <h1 className=' font-bold mt-5  text-red-300'>Experience</h1>
          <h1>20 Years +</h1>
          <h1 className=' font-bold mt-5  text-red-300'>Contact</h1>
          <h1>7752986139</h1>
          <h1 className=' font-bold mt-5  text-red-300'>Address</h1>
          <p>City : Lucknow ,State : UP ,Country : India</p>
        </div>
        </Col>
      </Row>

    </>
  )
}

export default MyprofilePage