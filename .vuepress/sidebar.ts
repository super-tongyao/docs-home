import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '博主介绍',
        link: '/',
    },
    {
        text: '博主项目',
        collapsible: true,
        children: ['/博主项目/简介商城', '/博主项目/字节小柜'],
    },
    '关于博主',
] as SidebarConfig;