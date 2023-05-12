import { SidebarConfig } from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '初见',
        link: '/',
    },
	{
        text: '开源项目',
        collapsible: true,
        children: ['/Md/开源项目/Wall.md'],
    },
	{
        text: '关于小柜',
        link: 'https://store.ityao.cn/other/about'
    },
	
    {
        text: '我的事记',
        link: 'https://store.ityao.cn/events',
    },
	{
        text: '云上相册',
        link: 'https://wall.ityao.cn/',
    }
	
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
