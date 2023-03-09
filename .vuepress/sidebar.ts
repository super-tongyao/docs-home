import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '初见',
        link: '/',
    },
	{
        text: '相册画廊',
        link: 'https://wall.ityao.cn/',
    },
	{
        text: '开源项目',
        link: 'https://github.com/super-tongyao/wall',
    },
    {
        text: '字节小柜',
        link: '/md/字节小柜.md',
    },
    {
        text: '我的事记',
        link: 'https://store.ityao.cn/events',
    },
	{
        text: '导航中心',
        link: '/md/导航中心.md',
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
