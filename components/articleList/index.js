import React from 'react';
import Link from 'next/link'
import ArticleTitle from '../articleTitle'
import './style.min.css'
import {
    Col,
    List
} from 'antd';

const ArticleList = (data) => {
    const articleList = data.articleList
    return (
        <Col xs={24} sm={24} md={18} lg={16} xl={16} className="listWrap">
            <List
                itemLayout = "vertical"
                dataSource = {articleList}
                renderItem = {item => (
                    <List.Item>
                        <ArticleTitle article={item}></ArticleTitle>
                        <div className="list-context">{item.introduce}</div>
                        <Link 
                            href = { '/article?id=' + `${item.id}`}
                        >
                            <p className="context-more"><a href="">阅读全文 »</a></p>
                        </Link>
                    </List.Item>
                )}
            />
        </Col>
    )
}

export default ArticleList
