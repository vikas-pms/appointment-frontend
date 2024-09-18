"use client";
import {
  AppstoreFilled,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Col, Menu, MenuProps,  Row } from "antd";
import { useRouter } from "next/navigation";
import React, { useContext } from "react"; 

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "dashboard",
    label: "Dashboard ",
    icon: <AppstoreFilled />,
  },
  {
    key: "appointment",
    label: "Appointment",
    icon: <LogoutOutlined />,
  },
  {
    key: "myprofile",
    label: "My profile",
    icon: <UserOutlined />,
  },

  {
    key: "logout",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
  
];
const SidebarPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    router.push(e.key);
  };
  return (
    <Row className=" mt-10 gap-5" justify="center">
      <Col xs={24} md={6}>
        <div className="sticky top-10">
          <Card className="relative z-1 h-64" styles={{ body: { padding: 0 } }}>
            <div className="h-32 bg-[var(--theme-color)] bg-yellow-400"></div>
            <div className=" text-center leading-10 font-bold absolute top-[30%] left-[34%] ">
              <Avatar
                size={120}
                className=""
                src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/doctor-profile-img.jpg"
              />
            </div>
            <div className=" text-center leading-10 font-bold m-20  ">
             
              <p>Doctor</p>
            </div>
          </Card>
          <Card className="font-semibold !mt-5" classNames={{ body: "!px-0" }}>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={["/doctor/dashboard"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Card>
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Card>{children}</Card>
      </Col>
    </Row>
  );
};
export default SidebarPage;