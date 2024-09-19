"use client"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

function SignupPage() {
    const route = useRouter();
    return (
        <>
            <div className='flex justify-center '>
                <div className='mt-10'>
                    <button className='flex gap-4 items-center'><ArrowLeftOutlined onClick={()=>route.push("/login")}/>
                        Back to Login</button>
                    <h1 className='text-2xl font-bold mt-5'>Signup</h1>
                    <Card className='bg-gray-200 mt-5 mb-5' style={{ width: 300, }}>
                        <div className='flex justify-between'>
                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/doctor-icon.svg" alt="" />
                            <div>
                                <h1>Doctor</h1>
                                <p>Welcome to Doctor sign..</p>
                            </div>
                            <ArrowRightOutlined onClick={()=>route.push("/doctor/signup")} className=' w-8 h-8 border rounded-full place-content-center bg-white hover:cursor-pointer hover:bg-blue-700 hover:text-white' />

                        </div>
                    </Card>
                    <Card className='bg-gray-200' style={{ width: 300 }}>
                        <div className='flex justify-between'>
                            <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/icons/patient-icon.svg" alt="" />

                            <div>
                                <h1>Patient</h1>
                                <p>Welcome to Patient sign..</p>
                            </div>
                            <ArrowRightOutlined onClick={()=>route.push("/patient/signup")} className=' w-8 h-8 border rounded-full place-content-center bg-white hover:cursor-pointer hover:bg-blue-700 hover:text-white' />

                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default SignupPage