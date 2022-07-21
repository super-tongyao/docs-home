import clipboardPlugin from "vuepress-plugin-clipboard";
import sidebar from "./sidebar";
import navbar from "./navbar";

const { defineUserConfig } = require('vuepress')
const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { searchConsolePlugin } from "vuepress-plugin-china-search-console";

export default defineUserConfig({
    title: 'docs-home-tongyao',
    description: 'Tongyao的小主页',
    base:'docs-home',
    head: [
        ['script', {}, `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
        `],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: '张童瑶,字节小柜'}],
        ['meta', {
            name: 'description', content:
                '帮助你学习编程的小圈子,编程学习资源,原创编程学习经验方法,程序员求职校招指南,原创编程项目'
        }],
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        repo: 'super-tongyao/docs-home',
        sidebar,
        navbar,
        editLink: false,
        smoothScroll: true,
        contributors: false,
        lastUpdated: false,
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),
        clipboardPlugin({
            align: 'top',
            staticIcon: true,
        }),
        seoPlugin({
            hostname: 'https://baidu.com',
            author: 'Tongyao',
        }),
        sitemapPlugin({
            hostname: 'https://baidu.com',
        }),
        searchConsolePlugin({
            // 改成自己的百度统计 id：https://tongji.baidu.com/
            baiduId: 'd6dba90b6d34581f364377a36215fd26'
        })
    ]
});
