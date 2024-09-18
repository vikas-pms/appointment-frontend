import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import React from 'react'

function NavbarPage() {

    const route = useRouter()
    return (
        <>
            <div className="navbar bg-base-100 px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Doctor</a>
                                <ul className="p-2">
                                    <li><a>Dashboard</a></li>
                                </ul>
                            </li>
                            <li>
                                <a>Patient</a>
                                <ul className="p-2">
                                    <li><a>Dashboard</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                    <img src="https://doccure.dreamstechnologies.com/html/template/assets/img/logo-01.svg" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>
                            <details>
                                <summary>Doctor</summary>
                                <ul className="p-2">
                                    <li><a>Dashboard</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Patient</summary>
                                <ul className="p-2">
                                    <li><a>Dashboard</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className=" navbar-end flex gap-5">
                    <div className='flex gap-2 hover:border hover:rounded-3xl py-2 px-5  hover:bg-sky-600 hover:text-white'>
                    <LockOutlined />
                        <button onClick={()=>route.push("/login")}>Login</button>
                    </div>
                    <div className='flex gap-2 border rounded-3xl py-2 px-5 bg-sky-600 text-white hover:bg-white hover:text-sky-600 hover:border-sky-600'>
                        <UserOutlined />
                        <button onClick={()=>route.push("/signup")}>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarPage
