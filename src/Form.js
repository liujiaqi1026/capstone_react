import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Layout, Row, Col, Space, Divider, Menu, Typography, Avatar, Popover, Button, Input, Form } from "antd";
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

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

function App() {
    return (
        <>
        
    </>
    );
}

export default App;