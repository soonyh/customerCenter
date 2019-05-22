# 前端架构设计

* [技术选型](#技术选型)
* [开发环境准备](#开发环境准备)
* [启动说明](#启动说明)
* [命令](#命令)
* [目录结构](#目录结构)
* [路由和菜单](#路由和菜单) 
* [权限管理](#权限管理)     
* [数据mock](#数据mock) 
* [国际化](#国际化) 
* [数据流方案](#数据流方案) 
* [组件](#组件) 
    * [小颗粒组件](#小颗粒组件) 
    * [大颗粒组件](#大颗粒组件) 
* [兼容性](#兼容性) 
* [主题配置](#主题配置) 
* [异步方法封装](#异步方法封装) 
* [动态加载组件](#动态加载组件) 
* [React组件规范](#React组件规范) 
* [其他](#其他)

## 技术选型

| 类型         | 名称    |
| :----------- | :------ |
| MVVM        | [react@16.5.2](https://reactjs.org/) |
| 视图框架     | [antd@3.10.1](https://ant.design/index-cn)、[pro-antd@2.0.0](https://pro.ant.design/index-cn) |
| 数据流方案   | [dva@2.0](https://dvajs.com) |
| 构建工具     | [umi@2.1.2](http://umijs.org) |
| 其     他    | [less](http://www.css88.com/doc/less/)、[css modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)、[lodash](http://www.css88.com/doc/lodash/)、[jquery](http://www.css88.com/jqapi-1.9/)、[moment](https://momentjs.com/) |



## 开发环境准备

安装 [NodeJS](https://nodejs.org/en/)

安装完成后，执行下面的命令确认是否安装成功。

```
node -v
npm -v
```

在国内，你可以安装 cnpm 获得更快速、更安全的包管理体验。使用如下命令安装：

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

下载依赖包

```
cnpm install
```

## 启动说明

1.  `npm run dev`启动
2. 登录账号密码  test/123456

## 命令

```
npm run dev             // 以开发模式启动
npm run dev:no-mock     // 以开发模式启动(无mock)
npm run prettier        // 格式化源码
npm run analyze         // 分析bundle构成,分析依赖模块的体积分布
npm run build           // 打包生产代码
```

## 目录结构


```javascript
|--- config 
|    |--- config.js                      # umi 配置，同 .umirc.js，二选一   
|--- mock                                # mock 文件所在目录
|--- public       
|--- dist                                # 源码编译生成的目录                  
|--- src                                 # 源码目录                  
|    |--- pages                        
|    |    |--- Log                       # 业务模块1：日志管理
|    |    |    |--- index.html           # 组织整个场景的索引页面（每个场景）
|    |    |    |--- index.js             # 视图
|    |    |    |--- index.less           # 页面级样式
|    |    |    |--- ...
|    |    |--- Tasks                     # 业务模块2
|    |    |--- User                      # 业务模块3
|    |    |--- document.ejs              # HTML模板
|    |--- layouts                        # 布局模板                
|    |    |--- BasicLayout.js                   
|    |    |--- UserLayout.js               
|    |--- components                     # pro-antd组件                
|    |    |--- Charts                   
|    |    |--- Exception               
|    |--- assets                         # 静态资源 
|    |--- utils                          # 工具方法                
|    |--- models                         # 数据模型                
|    |--- services                       # 异步请求服务                
|    |--- locales                        # 国际化                
|    |--- defaultSettings.js             # 项目配置，可设置主题色、异步超时时长、菜单宽度等                
|    |--- global.js                      # 全局JS                
|    |--- global.less                    # 约定的全局样式，自动引入                
|--- package.json                        # 依赖包配置文件
```

[更多说明]（https://umijs.org/zh/guide/app-structure.html）

## 路由和菜单

### 路由

`路由管理` 通过约定的语法根据在 _config/router.config.js_ 中配置路由。

`菜单生成` 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。

```javascript
  {
    path: '/roleManage',
    name: 'roleManage',
    icon: 'usergroup-add',
    component: '/RoleManage',
    authority:['admin','guest']
  }
```

`name` 和 `icon`分别代表生成菜单项的文本(name对应国际化文件上的key)和图标。

`authority` 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。

### 菜单

菜单根据 _router.config.js_ 生成，具体逻辑在 _src/layouts/BasicLayout_ 中的 `formatter` 方法实现。

[更多介绍](https://pro.ant.design/docs/router-and-nav-cn)

## 权限管理

[https://pro.ant.design/docs/authority-management-cn](https://pro.ant.design/docs/authority-management-cn)

## 数据mock

`npm run dev` 默认启动的是Mock模式。除了可以模拟POST\GET\请求之前，还可以模拟500、404等错误。

引入[Mock.js](http://mockjs.com/)可以让数据更逼真。

引入[roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc) 可以模拟延迟返回

Mock语法如下:

```javascript
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    res.status(200).send({
      resultCode: '0',
      resultMsg: '成功',
      resultObject: {
        name: 'soon',
        userid: '00000001',
      },
    });
  },
};
```
[更多用法点击这里](https://pro.ant.design/docs/mock-api-cn)

## 国际化

配置中文包 _src/locales/zh-CN.js_
```javascript
export default {
  'menu.dashboard': '首页'
}
```
调用
```javascript
import { FormattedMessage} from 'umi/locale';

export default () => {
  return <div><FormattedMessage id="menu.dashboard" /></div>
}
```

[更多用法](https://pro.ant.design/docs/i18n-cn)

## 数据流方案

[React间组件的通信机制](https://github.com/sunyongjian/blog/issues/27)是单向向下逐级分发，在应对复杂项目时显得捉襟见肘。所以，需要引入一种数据流方案。我们采用的是基于[redux](https://github.com/reduxjs/redux)和[redux-saga](https://github.com/redux-saga/redux-saga)的dva数据流方案。

数据流转描述如下：

1. 用`connect`方法把`model`和`component`链接起来
2. 页面事件触发，开始 `dispatch` `action`
3. `action`到达`model`中的`effects`中间件
4. 中间件获取数据，继续`dispatch` `action`到`reducer`
5. `reducer`改变state后重新注入组件
6. 组件的state被改变，触发页面重新渲染

![数据流转](https://gw.alipayobjects.com/zos/rmsportal/ZSCxeNAFqHgKXsyjtpxt.png)


model、dispatch、action、reducer和effects都是redux中的重要概念

[Dva概念](https://dvajs.com/guide/concepts.html) | [Dva快速上手](https://www.yuque.com/ant-design/course/abl3ad) | [为什么要用redux](https://segmentfault.com/a/1190000012142449)

## 组件

### 小颗粒组件

- [x] Table
- [x] Tabs
- [x] Button
- [x] Icon
- [x] DatePicker
- [x] Switch
- [x] Dropdown
- [x] Message
- [x] Card
- [x] Tag
- [x] Divider
- [x] Step
- [x] Popover
- [x] Tooltip
- [x] Tree
- [x] Modal
- [x] Slider

大约有二十多种常用的UI组件，更多查看[antd官网](https://ant.design/docs/react/introduce-cn)

### 大颗粒组件

- [x] Charts
- [x] DescriptionsList
- [x] Exception
- [x] CountDown
- [x] Ellipsis
- [x] NumberInfo
- [x] Trend
- [x] PageHeaderWrapper
- [x] Result

这块由pro-antd输出，更多查看[pro-antd官网](https://pro.ant.design/components/AvatarList-cn)

## 兼容性

兼容IE9+，以及其他现代浏览器

针对IE9的样式统一定义在 _src/fix-ie9.less_

## 主题配置

可以通过配置`defaultSettings.js`文件快速更改主题效果

```javascript
module.exports = {
  name: '政企客户中心',            //项目名称
  language: 'zh-CN',
  timeout: 1000 * 60,             //异步超时设定，1分钟
  footer: 'xxx有限公司版权所有', // footer中显示的字, 可以嵌入html标签
  siderWidth: 200,                //侧边栏宽度
  fixSiderbar: true,              //fixed侧边栏
  delay: 300,                     //mock接口延迟返回的时长，单位毫秒
  breakpoint: 'xxl',              //根据视窗宽度,自动收起侧边栏。还支持：xs: '480px', sm: '576px',md: '768px',lg: '992px',xl: '1200px',xxl: '1600px'
  navTheme: 'dark',               //侧边栏主题色
  primaryColor: '#fa9022',        //主色调
```

## 异步方法封装

因为需要兼容低版本浏览器IE9，所以放弃使用fetch类的库,（如：Axios,isomorphic-fetch等）。而直接引入jquery，但进行了二次封装，加装内容如下：

一、约定回参格式，主动提示请求错误。

```javascript
{
  resultCode:"0",
  resultMsg:"成功返归约定数据",
  resultObject:{}
}
```

二、扩展了3个属性：_expiry_，_showMask_ 和 _showError_。其中设置_expiry_可以缓存数据。根据场景合理应用可以有效 __减少请求，提升用户体验__。


### 使用方法：

`request(url[,options])` options是一个对象，与jquery.ajax中的[settings](http://www.css88.com/jqapi-1.9/jQuery.ajax/)用法一致。


```javascript
import request from '@/utils/request';

//默认为post请求
request('/api/project/notice')

//get
request('/api/project/notice',{method:'get'})

//带入参
request('/api/project/notice',{data:{name:'soon',uid:'8088'}})

//缓存60秒(即60秒内相同的地址和入参请求,不向服务器发请求，直接从sessionStorage取值)
request('/api/project/notice',{expiry:1000*60})

//开启一个全屏遮罩（不推荐这种用法，建议以dva的loading形式实行遮罩）
request('/api/project/notice',{showMask:true})
```

## 动态加载组件

只加载当前页面需要用到的组件，其余的按需加载，对 __性能优化__ 很有意义。

```javascript
import dynamic from 'umi/dynamic';
import LoadingComponent from '@/components/PageLoading/index';

const LoadableRoleInfo = dynamic({
  loader: () => import('./RoleInfo'),
  loading: LoadingComponent,
});
```
`import('./RoleInfo')`  引入组件
`LoadingComponent`  是全局使用的loading效果

通过调用dynamic重新生成一个新的组件，这个组件只会在被调用时，才会异步去取`./RoleInfo`文件

[umi-dynamic](https://umijs.org/zh/api/#umi-dynamic)

## React组件规范

参考 _Airbnb React/JSX Style Guide_ [英文](https://github.com/airbnb/javascript/tree/master/react) | [中文](https://github.com/JasonBoy/javascript/tree/master/react)

## 其他

推荐开发工具 [__Vistual Studio Code__](https://code.visualstudio.com/)
