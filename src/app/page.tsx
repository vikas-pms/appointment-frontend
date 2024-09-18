"use client";
import FooterPage from '@/components/footer/FooterPage';
import NavbarPage from '@/components/header/NavbarPage';
import { AimOutlined, CalendarOutlined, EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React, { useState } from 'react';
const Dashbord = () => {
  return (
    <>
      <NavbarPage />
      <div className="px-24 py-5">
        <Row>
          <Col className='relative pt-24' span={12}>
            <h1 className="text-5xl font-bold"> Consult  <span className='text-sky-500'>Best Doctors </span></h1>
            <h1 className="text-5xl font-bold">Your Nearby Location.</h1>
            <p className="mt-5 text-xl  ">Embark on your healing journey with Doccure</p>


            <div className='flex gap-3 items-center mt-10'>
              <button className='border rounded-lg px-10 py-4 bg-sky-600 text-white text-xl hover:bg-white hover:text-sky-600 hover:border-sky-600'>Start a Consult</button>
              <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/down-arrow-img.png" alt="" />
            </div>
            <img className='absolute top-20 right-0' src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/header-icon.svg" alt="" />

          </Col>
          <Col className='relative' span={12}>
            <div>
              <img  src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner-img.png" alt="" />
            </div>
            <img className="absolute top-60 right-0 animate-bounce" src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img2.svg" alt="" />
            <img className="absolute left-0 top-80 animate-bounce" src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img1.svg" alt="" />
            <img className="absolute -bottom-24  right-0 animate-bounce animate__slow	5s" src="https://doccure.dreamstechnologies.com/html/template/assets/img/banner/banner-img3.svg" alt="" />
          </Col>
          <div className=' absolute -bottom-20 flex gap-10 border bg-white py-6 px-8 items-center'>
            <div className='flex gap-4'>
            <SearchOutlined />
              <input className='outline-none' type="text" placeholder='Search doctors, clinics, hospitals'/>
            </div>
            <div className='flex gap-20 items-center'>
              <div className='flex gap-4'>
              <EnvironmentOutlined />
              <p>Location</p>
              </div>
              <AimOutlined />
            </div>
            <div className='flex gap-20 items-center'>
              <div className='flex gap-4'>
              <CalendarOutlined />
                <p>18/09/2024</p>
              </div>
              <button className='border bg-sky-600 py-2 px-6 rounded-lg text-white hover:bg-white hover:text-sky-600 hover:border-sky-600'>Search</button>
            </div>
          </div>
        </Row>
      </div>

      <FooterPage/>
     

    </>
  );
};

export default Dashbord;
