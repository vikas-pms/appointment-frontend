"use client";
import React, { useState } from 'react';
import {
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: () => void
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  } as MenuItem;
}

const Dashbord = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const handleDoctorSignupClick = () => {
    router.push('/doctor/signup');
  };

  const handleDoctorLoginClick = () => {
    router.push('/doctor/login');
  };

  const handlePatientSignupClick = () => {
    router.push('/patient/signup');
  };

  const handlePatientLoginClick = () => {
    router.push('/patient/login');
  };

  const items: MenuItem[] = [
    getItem('HOME', '1', <PieChartOutlined />),
    getItem('Doctor', 'sub1', <UserOutlined />, [
      getItem('Signup', '3', undefined, undefined, handleDoctorSignupClick),
      getItem('Login', '4', undefined, undefined, handleDoctorLoginClick),
    ]),
    getItem('Patient', 'sub2', <TeamOutlined />, [
      getItem('Signup', '6', undefined, undefined, handlePatientSignupClick),
      getItem('Login', '8', undefined, undefined, handlePatientLoginClick),
    ]),
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <div className='w-full'>
          <img className='w-full h-[100vh]'
            src="pexels-pavel-danilyuk-5998448.jpg"
            alt="" />
            </div>
      </Layout>
    </Layout>
  );
};

export default Dashbord;
