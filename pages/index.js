import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Header from '../components/header'
import ArticleList from '../components/articleList'
import AffixCom from '../components/affix'
// import PaginationCom from '../components/pagination'
import Footer from '../components/footer'

import {
    Row
} from 'antd';

const Home = (articleList) => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <Header></Header>
                <Row type="flex" justify="center">
                    <ArticleList articleList={articleList.data}></ArticleList>
                    <AffixCom></AffixCom>
                </Row>
                <Footer></Footer>
            </div>
        </>
    )
}

Home.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('http://127.0.0.1:7001/default/getArticleList').then(
            (res) => {
                resolve(res.data)
            }
        )
    })
    return await promise
}
export default Home
