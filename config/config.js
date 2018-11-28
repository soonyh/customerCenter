// https://umijs.org/config/
// import os from 'os';
import pageRoutes from './router.config';
import defaultSettings from '../src/defaultSettings';
import path from 'path';

// import webpackplugin from './plugin.config';
export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        // antd: true, //引入 antd 并实现按需编译
        dva: true,
        title: defaultSettings.name,
        dynamicImport: {
          // webpackChunkName:true,
          loadingComponent: './components/PageLoading/index',
        },
        locale: {
          enable: true, // default false
          default: defaultSettings.language, // default zh-CN
          baseNavigator: true, // default true, 为true时，用navigator.language的值作为默认语言
          antd: true, // 是否启用antd的<LocaleProvider />
        },
      },
    ],
  ],
  theme: {
    // "font-size-base": "14px",
    'primary-color': defaultSettings.primaryColor,
    // "badge-font-size": "12px",
    // "btn-font-size-lg": "@font-size-base",
    // "menu-dark-submenu-bg": "#000B14",
    // "layout-body-background": "#f0f2f5",
    // "menu-dark-bg": "#1b1c21",
    // "layout-sider-background": "#363742",
    'menu-dark-item-active-bg': '#363742',
    'border-radius-base':defaultSettings.borderRadiusBase,
    'link-color': defaultSettings.primaryColor,
    'checkbox-color': defaultSettings.primaryColor,
    'btn-primary-bg': defaultSettings.primaryColor,
  },
  targets: {
    ie: 9,
  },
  // 不使用 url-loader 的规则（即不让小图片被转成bas64）,为了兼容ie9
  urlLoaderExcludes: [/\.(png|jpe?g|gif|svg)$/],
  chainWebpack(config, { webpack }) {
    //  svg 使用 file-loader 引入
    config.module
      .rule('svg-with-file')
      .test(/.svg$/)
      .use('svg-with-file-loader')
      .loader('file-loader')
      .options({
        name: 'svg/[name]-[hash:8].[ext]',
      });

    //  png|jpe?g|gif 使用 file-loader 引入
    config.module
      .rule('image-file')
      .test(/\.(png|jpe?g|gif)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'images/[name]-[hash:8].[ext]',
      });
  },
  cssModulesExcludes: [
    path.join(__dirname, '../src/global.less'),
    path.join(__dirname, '../src/layouts/UserLayout.less'),
  ],
  base: process.env.gh ? '/unicom-custmer-center/' :'/',
  publicPath: process.env.gh ? '/unicom-custmer-center/' :'/',
  history: 'hash',
  hash:true,
  // 路由配置
  routes: pageRoutes,
};
