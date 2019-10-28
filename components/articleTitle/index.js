import React, { PureComponent } from 'react';
import Link from 'next/link'
import './style.min.css'
import {
    Icon
} from 'antd';

const ArticleTitle = (data) => {
    let article = data.article
    return (
        <div className="listHeaderWrap">
            <Link 
                href = { '/article?id=' + `${article.id}`}
            >
                <div className="list-title">{article.title}</div>
            </Link>
            <div className="list-icon">
                <span><Icon type="calendar" /> {article.addTime} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <span><Icon type="folder" /> {article.typeName} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <span><Icon type="fire" /> {article.view_count}人</span>
            </div>
        </div>
    )
}

export default ArticleTitle
