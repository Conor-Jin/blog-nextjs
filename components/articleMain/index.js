import React, { PureComponent } from 'react';
import ArticleTitle from '../articleTitle'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import './style.min.css'


// let markdown = '# P01:课程介绍和环境搭建\n' +
//   '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
//   '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
//    '**这是加粗的文字**\n\n' +
//   '*这是倾斜的文字*`\n\n' +
//   '***这是斜体加粗的文字***\n\n' +
//   '~~这是加删除线的文字~~ \n\n'+
//   '\`console.log(111)\` \n\n'+
//   '# p02:来个Hello World 初始Vue3.0\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n'+
//   '***\n\n\n' +
//   '# p03:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p04:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '#5 p05:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p06:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '# p07:Vue3.0基础知识讲解\n' +
//   '> aaaaaaaaa\n' +
//   '>> bbbbbbbbb\n' +
//   '>>> cccccccccc\n\n'+
//   '``` var a=11; ```'



  const renderer = new marked.Renderer();

  marked.setOptions({
      renderer   : renderer,
      gfm        : true,
      pedantic   : false,
      sanitize   : false,
      tables     : true,
      breaks     : false,
      smartLists : true,
      smartypants: false,
      highlight  : function (code) {
        return hljs.highlightAuto(code).value;
      }
    }); 
  
const ArticleMain = (data) => {
    const article = data.article
    const html    = marked(article[0].introduce)

    return (
        <div className="markdown-content" >
            <ArticleTitle article={article[0]}></ArticleTitle>
            <div dangerouslySetInnerHTML = {{__html:html}}></div>
        </div>
    )
}


export default ArticleMain
