import React, { PureComponent } from 'react';
import './style.min.css'
import {
    Row,
    Col,
    Icon
} from 'antd';
class Footer extends PureComponent {
    render() {
        return (
            <Row type="flex" justify="center" className="footerWrap">
                <Col xs={24} sm={24} md={18} lg={16} xl={16} className="footerCol">
                    <Icon type="github" />
                </Col>
            </Row>
        )
    }
}

export default Footer


