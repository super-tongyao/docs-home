import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '初见',
        link: '/',
    },
    /*{
        text: '内心想法',
        link: '/Md/内心想法.md',
    },*/
    {
        text: '我的对象',
        link: '/Md/我的对象.md',
    },
    {
        text: '字节小柜',
        link: '/Md/字节小柜.md',
    },
    {
        text: '我的事记',
        link: 'https://store.ityao.cn/events',
    },
    /*{
        text: '其他内容',
        collapsible: true,
        children: [
            '/Md/我的对象.md',
            {
                text: '字节小柜',
                link: '/Md/字节小柜.md',
            },
        ]
    },*/

] as SidebarConfig;
