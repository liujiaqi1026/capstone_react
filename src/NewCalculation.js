
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Layout, Row, Col, Space, Divider, Menu, Typography, Avatar, Popover, Button, Form, Input, Modal, List } from "antd";
import { UserOutlined } from '@ant-design/icons';
import {
    HomeOutlined,
    ShopOutlined,
    WalletOutlined,
    LoginOutlined,
    MailOutlined,
    PhoneOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import {
    Link
} from "react-router-dom";
import FormDiv from './Form';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;



function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCarModalOpen, setIsCarModalOpen] = useState(false);
    const [list, setList] = useState([]);
    const [cars, setCars] = useState([0, 0]);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const showCarModal = () => {
        setIsCarModalOpen(true);
    };
    const handleCarOk = () => {
        setIsCarModalOpen(false);
    };
    const handleCarCancel = () => {
        setIsCarModalOpen(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);

        var tie = {
            width: values.width,
            length: values.length,
            height: values.height,
            quantity: values.quantity,
        }

        setList(list => [...list, tie]);

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCarFinish = (values) => {
        console.log('Success:', values);

        setCars([cars[0] + parseInt(values.seventyThree), cars[1] + parseInt(values.sixtyOne)]);
        // var car = {
        //     seventyThree: values.seventyThree,
        //     sixtyOne: values.sixtyOne,
        // }

        // setCars(cars => [...cars, car]);

    };

    const onCarFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const reset = () => {
        setList([]);
        setCars([0, 0]);
    }

    const CALCULATION_URL = "";

    const calculate = () => {
        axios.post(CALCULATION_URL, {
            data: {
                list: list,
            }
        }, {
            withCredentials: true,
            headers: {
                // 'X-CSRFToken': window.sessionStorage.getItem('CSRF-Token'),
                // 'access-token': window.sessionStorage.getItem('access-token'),
                // 'profile': window.sessionStorage.getItem('profile'),
            },
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
        }).catch((err) => {
            if (err.response.status == 403) {
                window.location.href = 'hotelPortal/#/403';
            } else if (err.response.status == 404) {
                // window.location.href = 'hotelPortal/#/404';
            } else if (err.response.status == 500) {
                window.location.href = 'hotelPortal/#/500';
            }
        }).then((res) => {
            window.location.href = 'kopper#/result';
        })
    }


    return (
        <>
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ float: "left", width: "360px" }}
                        defaultSelectedKeys={['2']}
                        items={[
                            { key: 1, label: (<Link to='/home'>home</Link>), icon: <HomeOutlined /> },
                            { key: 2, label: (<Link to='/calculation'>calculation</Link>), icon: <ShopOutlined /> },
                            // { key: 3, label: (<Link to='/'>order list</Link>), icon: <WalletOutlined /> },
                        ]}
                    />
                </Header>

                <Content style={{ padding: '0 50px', }}>
                    <Space>
                        <Button type="primary" onClick={showModal}>
                            Add New Ties
                        </Button>

                        <Button type="primary" onClick={showCarModal}>
                            Add Cars
                        </Button>

                        <Button type="primary" onClick={reset}>
                            reset
                        </Button>

                        <Button type="primary">
                            History Calculation
                        </Button>
                    </Space>
                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Length"
                                name="length"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input tie length!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Width"
                                name="width"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input tie width!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Height"
                                name="height"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input tie height!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Quantity"
                                name="quantity"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input quantity!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" onClick={handleOk}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <Modal title="Add New Cars" open={isCarModalOpen} onOk={handleCarOk} onCancel={handleCarCancel}>
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                            style={{
                                maxWidth: 600,
                            }}
                            onFinish={onCarFinish}
                            onFinishFailed={onCarFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="seventyThree"
                                name="seventyThree"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the quantity of 73 feet long railcars!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="sixtyOne"
                                name="sixtyOne"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input the quantity of 61 feet long railcars!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit" onClick={handleCarOk}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>

                    <List
                        size="large"
                        // header={<div>Header</div>}
                        // footer={<div>Footer</div>}
                        bordered
                        dataSource={list}
                        renderItem={(item, index) => {
                            return <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
                                    title={<a href="https://ant.design">{"tie" + index}</a>}
                                    description={"length: " + item.length + " width: " + item.width + " height: " + item.height + " quantity: " + item.quantity}
                                />
                            </List.Item>
                        }}
                    />

                    {
                        cars[0] == 0 && cars[1] == 0 ? <></> : <List
                            size="large"
                            bordered
                            dataSource={cars}
                            renderItem={(item, index) => {
                                var title = "quantity of "
                                var description = "quantity of "
                                var time = 0;
                                if (index == 0) {
                                    title += "73 feet railcars";
                                    description += "73 feet railcars: ";
                                } else {
                                    title += "61 feet railcars";
                                    description += "61 feet railcars: ";
                                    time = 1;
                                }
                                description += item;
                                return <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
                                        title={<a href="https://ant.design">{title}</a>}
                                        description={description}
                                    />
                                </List.Item>
                            }}
                        />
                    }

                    <Button type="primary" onClick={calculate}>
                        calculate
                    </Button>
                </Content>
            </Layout>

        </>
    );
}

export default App;