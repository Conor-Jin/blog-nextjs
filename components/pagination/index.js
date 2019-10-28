import React, { PureComponent } from 'react';
import './style.min.css'
import {
    Row,
    Col,
    Pagination
} from 'antd';

class PaginationCom extends PureComponent {
    render() {
        return (
            <Row type="flex" justify="center" className="PaginationSWrap">
                <Col xs={24} sm={24} md={18} lg={16} xl={16}>
                    <Pagination simple defaultCurrent={2} total={50} className="paginationStyle"/>
                </Col>
            </Row>
        )
    }
}

export default PaginationCom
