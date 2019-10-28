import React, { PureComponent } from 'react';
import Link from 'next/link'
import './style.min.css'
import {
    Row,
    Menu,
    Col,
    Icon
} from 'antd';

class Header extends PureComponent {
    render() {
        return (
            <Row type="flex" justify="center" className="RowStyle">
                <Col xs={20} sm={16} md={12} lg={10} xl={10}>
                    网络日志
                </Col>
                <Col xs={0} sm={4} md={6} lg={6} xl={6}>
                    <Menu mode="horizontal" className="MenuStyle">
                        <Menu.Item key="home">
                            <Icon type="home"/>
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="switcher" />
                            <span>分类</span>
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="meh" />
                            <span>关于</span>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        )
    }

}

export default Header
