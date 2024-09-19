import { EnvironmentOutlined, FacebookFilled, FacebookOutlined, InstagramFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, MailOutlined, PhoneOutlined, TwitterOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

function FooterPage() {
    return (
        <>
            
            <footer className="footer bg-sky-600 text-neutral-content items-center px-24 py-5">
                <aside className="grid-flow-col items-center">
                    <div>
                    <Avatar size={50}
                    src="1722336887739.jpg" alt="" />
                    </div>
                    
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                    <FacebookFilled className='border w-8 h-8 rounded-full bg-sky-700 place-content-center border-white text-white hover:bg-white hover:text-sky-600' />
                    </a>
                    <a>
                    <InstagramFilled className='border w-8 h-8 rounded-full bg-sky-700 place-content-center border-white text-white hover:bg-white hover:text-sky-600' />
                    </a>
                    <a>
                    <TwitterOutlined className='border w-8 h-8 rounded-full bg-sky-700 place-content-center border-white text-white hover:bg-white hover:text-sky-600' />
                    </a>
                    <a>
                    <LinkedinFilled className='border w-8 h-8 rounded-full bg-sky-700 place-content-center border-white text-white hover:bg-white hover:text-sky-600' />
                    </a>
                </nav>
            </footer>
        </>
    )
}

export default FooterPage