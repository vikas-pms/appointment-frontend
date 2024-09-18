import { ArrowDownOutlined, ArrowUpOutlined, CalendarFilled,  CheckOutlined, CloseOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import React from 'react'

function DashboardPage() {
  return (
    <>
  <Row gutter={16}>
    <Col flex={2}>
      <div className='space-y-4'>
        <Card className='w-full'>
          <div className='flex items-center justify-between p-4'>
            <div>
              <p className='text-xl'>Total Patient</p>
              <p className='text-3xl font-bold'>978</p>
              <span className='text-green-500 flex items-center'>
                <ArrowUpOutlined className='mr-1' /> 15% From Last Week
              </span>
            </div>
            <div>
              <UserOutlined className='border w-12 h-12 text-4xl place-content-center bg-slate-100 rounded-full' />
            </div>
          </div>
        </Card>
        <Card className='w-full'>
          <div className='flex items-center justify-between p-4'>
            <div>
              <p className='text-xl'>Patient Today</p>
              <p className='text-3xl font-bold'>978</p>
              <span className='text-red-500 flex items-center'>
                <ArrowDownOutlined className='mr-1' /> 15% From Yesterday
              </span>
            </div>
            <div>
              <UserSwitchOutlined className='border w-12 h-12 text-4xl place-content-center  bg-slate-100 rounded-full' />
            </div>
          </div>
        </Card>
        <Card className='w-full'>
          <div className='flex items-center justify-between p-3'>
            <div>
              <p className='text-xl'>Appointment Today</p>
              <p className='text-3xl font-bold'>978</p>
              <span className='text-green-500 flex items-center'>
                <ArrowUpOutlined className='mr-1' /> 20% From Yesterday
              </span>
            </div>
            <div>
              <CalendarFilled className='border w-12 h-12 text-4xl place-content-center bg-slate-100 rounded-full' />
            </div>
          </div>
        </Card>
      </div>
    </Col>

    <Col flex={3}>
      <Card title="Appointment" bordered={false} className='w-full'>
        <div className='space-y-4'>
          {[{
            id: 'Apt0001',
            name: 'Adrian Marshall',
            date: '11 Nov 2024 10.45 AM',
            type: 'General',
          }, {
            id: 'Apt0002',
            name: 'Kelly Stevens',
            date: '10 Nov 2024 11.00 AM',
            type: 'Clinic Consulting',
          }, {
            id: 'Apt0003',
            name: 'Samuel Anderson',
            date: '03 Nov 2024 02.00 PM',
            type: 'General',
          }, {
            id: 'Apt0004',
            name: 'Catherine Griffin',
            date: '01 Nov 2024 04.00 PM',
            type: 'Clinic Consulting',
          }, {
            id: 'Apt0005',
            name: 'Robert Hutchinson',
            date: '28 Oct 2024 05.30 PM',
            type: 'General',
          }].map(appointment => (
            <div key={appointment.id} className='flex items-center justify-between p-1'>
              <img className='w-16 h-16' src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/profile-01.jpg" alt="" />
              <div className='flex-1 ml-4'>
                <span className='text-blue-500'>{`#${appointment.id}`}</span>
                <p>{appointment.name}</p>
              </div>
              <div className='text-right'>
                <p>{appointment.date}</p>
                <span className={`border px-2 py-1 rounded-lg text-center bg-green-500`}>{appointment.type}</span>
              </div>
              <div className='flex gap-2 ml-4'>
                <CheckOutlined className='border border-green-500 text-green-500 w-6 h-6 place-content-center rounded-full' />
                <CloseOutlined className='border border-red-500 text-red-500 w-6 h-6 place-content-center rounded-full' />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Col>
  </Row>
</>

  )
}

export default DashboardPage