import '../App.css';
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Layout, Row, Col, Space, Divider, Menu, Typography, Avatar, Popover } from "antd";
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

/***
 * This js file corresponde to the Home Page.
 * It will have 3 main component on this Page.
 * 
 * 1. Menu Layout 
 * Allow user go to different Pages
 * 
 * 2. Hotel Introduction
 * Introduction information (name, location, openning hour...) for the hotel.
 * 
 * 3. Hotel Photos Albums
 * Display the hotel's images.
 * 
 * 4. Customer's feedback
 * 5. Hotel Contact Infomation
 * 
 * Also, It has the Google OAuth component and Profile at this Page. (Almost every Pages)
 *
 */

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

function App() {

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ float: "left", width: "360px" }}
                    defaultSelectedKeys={['1']}
                    items={[
                        { key: 1, label: (<Link to='/home'>home</Link>), icon: <HomeOutlined /> },
                        { key: 2, label: (<Link to='/calculation'>calculation</Link>), icon: <ShopOutlined /> },
                        // { key: 3, label: (<Link to='/'>order list</Link>), icon: <WalletOutlined /> },
                    ]}
                />

            </Header>

            <Content style={{ padding: '0 50px', }}>

                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Divider></Divider>
                    {/* <Typography>
                        <Title>Merulanties Inn - FEEL THE MAGIC OF DALI!!!</Title>
                        <Paragraph>
                            In the center of Lijiang ancient town, there is a hidden B&B - {' '}
                            <Text strong>
                                Merulanties Inn
                            </Text>.
                        </Paragraph>
                        <Paragraph>
                            The Merulanties Inn is a New Luxury Green Hotel, where guests can experience the beauty of nature, inspiration of art and culture, and conscious green and healthy living.
                            We placed an emphasis on culture, nature and sustainability.
                        </Paragraph>
                        <Paragraph>
                            The owner has been operating here for 18 years, welcoming and seeing off guest everyday.
                        </Paragraph>
                        <Paragraph>
                            Natural stone, reclaimed wood crafted into floors and furnishings, old hand-carved wood doors, old wooden trunks have be turned into coffee tables, and nature is brought indoors through living green walls.
                            The garden is full of flowers, trees and herbs.
                        </Paragraph>
                        <Paragraph>
                            The Merulanties Inn followed the Global Sustainable Tourism for Hotels Standards.
                            All cleaning and laundry products are naturally made, leaving no toxins for our precious ground and water resources. Energy and water saving features include passive energy saving design, solar water heating system, LED lighting, sun and lavender-dried sheets and water saving shower heads.
                            Our rooms have zero disposable plastics, and bathroom amenities are biodegradable. We compost organic wastes to fertilize our organic vegetables.
                        </Paragraph>

                    </Typography>
                    <Divider dashed style={{ backgroundColor: "black" }}></Divider>
                    <Typography>
                        <Title>Contact Us</Title>
                    </Typography> */}
                </Space>

            </Content>
            {/* <Footer
                style={{ textAlign: 'center' }}
            >
                <div style={{ color: "black" }}>
                    <Row justify="left" align="top">
                        <Col span={4}><Avatar src="/1.jpg" /> <Text>Jiaqi Liu</Text></Col>
                        <Col span={4}><Avatar src="/2.JPG" /> <Text>Jie Zhu</Text></Col>
                        <Col span={4}><Avatar src="/3.jpg" /> <Text>Haorong Zhu</Text></Col>
                        <Col span={4}><Avatar src="/4.jpg" /> <Text>Yuting Long</Text></Col>
                        <Col span={4}><Avatar src="/5.jpg" /> <Text>Yufan Lu</Text></Col>
                    </Row>
                    <Row>
                        <Col span={4}><MailOutlined /> jiaqili3@andrew.cmu.edu</Col>
                        <Col span={4}><MailOutlined /> jiezhu2@andrew.cmu.edu</Col>
                        <Col span={4}><MailOutlined /> haorong2@andrew.cmu.edu</Col>
                        <Col span={4}><MailOutlined /> haorong2@andrew.cmu.edu</Col>
                        <Col span={4}><MailOutlined /> haorong2@andrew.cmu.edu</Col>
                    </Row>
                    <Row>
                        <Col span={4}><PhoneOutlined /> +1 412 954 8356</Col>
                        <Col span={4}><PhoneOutlined /> +1 412 954 8360</Col>
                        <Col span={4}><PhoneOutlined /> +1 412 579 0281</Col>
                        <Col span={4}><PhoneOutlined /> +1 412 954 8360</Col>
                        <Col span={4}><PhoneOutlined /> +1 412 579 0281</Col>
                    </Row>
                    <Row>
                        <Col span={4}><IdcardOutlined /> jiaqili3</Col>
                        <Col span={4}><IdcardOutlined /> jiezhu2</Col>
                        <Col span={4}><IdcardOutlined /> haorong2</Col>
                        <Col span={4}><IdcardOutlined /> 陆老师</Col>
                        <Col span={4}><IdcardOutlined /> 龙老师</Col>
                    </Row>
                </div>
                <Divider></Divider>
                Final Project Team 8
            </Footer> */}
        </Layout>
    );
}

export default App;