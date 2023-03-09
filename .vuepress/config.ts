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
    title: 'Tongyao',
    description: '🐻你好，我是张童瑶，很高兴认识你。',
    //base:'/docs-home/',
    head: [
        ['script', {}, `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
        `],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'keywords', content: '张童瑶,字节小柜,wall,tongyao'}],
        ['meta', {
            name: 'description', 
			content: '🐻你好，我是张童瑶，很高兴认识你。'
        }],
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        repo: 'super-tongyao',
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
            hostname: 'https://ityao.cn',
            author: 'Tongyao',
        }),
        sitemapPlugin({
            hostname: 'https://ityao.cn',
        }),
        searchConsolePlugin({
            // 改成自己的百度统计 id：https://tongji.baidu.com/
            baiduId: '1f46e781fce3ce28ede61e6671623b35'
        })
    ]
});
