import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import React from 'react'

function NavbarPage() {

    const route = useRouter();
    return (
        <>
           
            <div className="navbar bg-slate-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            {/* <div className='border rounded-full '>
                                <img className='text-5xl' src="vs.jpg" alt="" />
                            </div> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" 
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center md:navbar-left-10 ">
                    {/* <a className="btn btn-ghost text-xl text-white">Vikas Kumar</a> */}
                </div>
                <div className=" navbar-end flex gap-5">
                    <div className='flex gap-2 hover:border-2 hover:rounded-3xl py-2 px-5  hover:bg-sky-600 hover:text-white'>
                        <LockOutlined />
                        <button onClick={() => route.push("/login")}>Login</button>
                    </div>
                    <div className='flex gap-2 border-2 rounded-3xl py-2 px-5 bg-sky-600 text-white hover:bg-white hover:text-sky-600 hover:border-sky-600'>
                        <UserOutlined />
                        <button className='text-nowrap' onClick={() => route.push("/signup")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarPage
