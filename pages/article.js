import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Header from '../components/header'
import ArticleMain from '../components/articleMain'
import AffixCom from '../components/affix'
import Footer from '../components/footer'

import {
    Row
} from 'antd';

const Article = (article) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <Header></Header>
                <Row type="flex" justify="center">
                    <ArticleMain article={article.data}></ArticleMain>
                    <AffixCom></AffixCom>
                </Row>
                <Footer></Footer>
            </div>
        </>
    )
}

Article.getInitialProps = async (context) => {
    const id      = context.query.id
    const promise = new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleById?id=' + id).then(
            (res) => {
                resolve(res.data)
            }
        )
    })
    return await promise
}
export default Article
