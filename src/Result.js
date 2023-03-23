import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Layout, Row, Col, Space, Divider, Menu, Typography, Avatar, Popover, Button, Form, Input, Modal, List, Collapse } from "antd";
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
const { Panel } = Collapse;

const onClick = () => {
    window.location.href = 'kopper/#/calculation';
}

const text = "tie detail."


function App() {


    return (
        <>
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        style={{ float: "left", width: "360px" }}
                        items={[
                            { key: 1, label: (<Link to='/home'>home</Link>), icon: <HomeOutlined /> },
                            { key: 2, label: (<Link to='/calculation'>calculation</Link>), icon: <ShopOutlined /> },
                            // { key: 3, label: (<Link to='/'>order list</Link>), icon: <WalletOutlined /> },
                        ]}
                    />
                </Header>

                <Content style={{ padding: '0 50px', }}>
                    {/* // todo: 加一个和result相关的变量 用 useState改变 动态调整下边的展示 */}
                    <Collapse>
                        <Panel header="Car 1" key="1">
                            <Collapse defaultActiveKey="1">
                                <Panel header="Leftside of Car 1" key="1">
                                    <p>{text}</p>
                                </Panel>
                                <Panel header="Rightside of Car 1" key="2">
                                    <p>{text}</p>
                                </Panel>
                            </Collapse>
                        </Panel>
                        <Panel header="Car 2" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Car 3" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>


                    <Button type="primary" onClick={onClick}>
                        Back to Dashboard
                    </Button>
                </Content>
            </Layout>

        </>
    );
}

export default App;