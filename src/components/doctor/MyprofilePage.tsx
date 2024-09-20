"use client"
import { EditOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Row } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

function MyprofilePage() {
  const route = useRouter();
  return (
    <>
    <div className="flex justify-end gap-2 border py-2 px-2 bg-slate-300"><button
    onClick={()=> route.push("/doctor/editprofile")}
    className=' bg-red-700 px-2 py-2 rounded-lg text-white items-center hover:bg-white hover:text-sky-600 hover:outline hover:outline-sky-600 '><EditOutlined /> Edit Profile</button>
    </div>
      <Row className=' grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1  bg-gradient-to-r from-orange-200 via-yellow-300 to-red-500 p-6 text-white'>
        <Col >
          <div className='w-full h-full'>
          <img className='' alt="example" src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/doctor-profile-img.jpg" />
          <h1 className='text-2xl font-bold text-center mt-10'>Dr. Vikas Kumar</h1>
        </div>
      </Col>
      <Col  className='bg-slate-500 flex justify-center flex-col items-center text-center p-2'>
        <h1 className='text-2xl font-bold mb-5'>Profile</h1>
        <h1>Dr. Vikas Kumar</h1>
        <h1>MBBS</h1>
        <p>Appollo Hospital Lucknow</p>
        <h1>India</h1>
        <h1 className=' font-bold mt-5 text-red-300'>Speciality</h1>
          <h1>Caidiology</h1>
          <h1>Nrurology</h1>
          <h1>Periodontology</h1>
          <h1>Psychology</h1>
        <h1 className=' font-bold mt-5  text-red-300'>Experience</h1>
        <h1>20 Years +</h1>
        <h1 className=' font-bold mt-5  text-red-300'>Contact</h1>
        <h1>7752986139</h1>
        <h1 className=' font-bold mt-5  text-red-300'>Address</h1>
        <p>Lucknow Uttar Pradesh India</p>
      </Col>
    </Row >

    </>
  )
}

export default MyprofilePage