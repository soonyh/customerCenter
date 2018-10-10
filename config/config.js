// https://umijs.org/config/
// import os from 'os';
import pageRoutes from "./router.config";
import globalConfig from "./global.config";
import path from "path";

// import webpackplugin from './plugin.config';
// import defaultSettings from '../src/defaultSettings';
export default {
    // add for transfer to umi
    plugins: [
        [
            "umi-plugin-react",
            {
                // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
                antd: true, //引入 antd 并实现按需编译
                dva: true,
                title: globalConfig.name,
                locale: {
                    enable: true, // default false
                    default: globalConfig.language, // default zh-CN
                    baseNavigator: true, // default true, 为true时，用navigator.language的值作为默认语言
                    antd: true, // 是否启用antd的<LocaleProvider />
                },
            }
        ]
    ],    
    theme: {
        // "font-size-base": "14px",
        "primary-color":'#fa9022',
        // "badge-font-size": "12px",
        // "btn-font-size-lg": "@font-size-base",
        // "menu-dark-submenu-bg": "#000B14",
        // "layout-body-background": "#f0f2f5",
        // "menu-dark-bg": "#1b1c21",
        // "layout-sider-background": "#363742",
        "menu-dark-item-active-bg":"#363742",
        "link-color":"#fa9022",
        "checkbox-color":"#fa9022",
        "btn-primary-bg":"#fa9022",
    },
    targets: {
        ie: 9
    },
    cssModulesExcludes: [path.join(__dirname, "../src/layouts/global.less"),path.join(__dirname, "../src/layouts/UserLayout.less")],
    // 路由配置
    routes: pageRoutes
};
