import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
const EditProfilePage = () => {
    return (
        <>
            <Form>
                <h1 className="text-2xl font-medium mb-5">Edit Profile</h1>
                <div className='flex mb-10'>
                    <Avatar size={100} src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors-dashboard/doctor-profile-img.jpg"
                    />
                    <div className='ml-5 leading-10'>
                        <h1 className='text-xl font-bold'>Dr. Vikas kumar</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div className='flex gap-4'>
                            <CloudUploadOutlined className='border p-3 rounded-md' />
                            <DeleteOutlined className='border p-3 rounded-md' />
                        </div>
                    </div>
                </div>
                <h1 className="font-medium text-lg mb-3">Personal Details</h1>
                <p className=''>Edit your personal information</p>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12}>
                        <h1 className="font-medium text-lg mt-5">First Name</h1>
                        <Input size="large" placeholder="large size" />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <h1 className="font-medium text-lg mt-5">Last Name</h1>
                        <Input size="large" placeholder="large size" />
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={12}>
                        <h1 className="font-medium text-lg mt-5">User Name</h1>
                        <Input size="large" placeholder="large size" />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <h1 className="font-medium text-lg mt-5">Phone Number</h1>
                        <Input size="large" placeholder="2213465454 " type="number" />
                    </Col>
                </Row>
                <h1 className="font-medium text-lg mt-5">Designation</h1>
                <Input size="large" placeholder="User Interface Design" />
                <h1 className="font-medium text-lg mt-5">Bio</h1>
                <TextArea rows={4} />
                <Button type="primary"   className="mt-5 bg-green-700">
                    Update Profile
                </Button>
            </Form>
        </>
    )
}
export default EditProfilePage