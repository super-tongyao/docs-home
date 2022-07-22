import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '我的介绍',
        link: '/',
    },
    {
        text: '我的项目',
        collapsible: true,
        children: ['/我的项目/简洁商城/', '/我的项目/字节小柜/'],
    },
    '/我的故事',
] as SidebarConfig;