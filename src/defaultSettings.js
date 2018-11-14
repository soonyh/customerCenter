module.exports = {
  name: '政企客户中心', // 项目的名字
  language: 'zh-CN',
  timeout: 1000 * 60, //1分钟超时
  footer: '中国联通网络通信有限公司版权所有', // footer中显示的字, 可以嵌入html标签
  siderWidth: 200, //侧边栏宽度
  fixSiderbar: true, // sticky siderbar
  delay: 300, //mock接口延迟返回的时长，单位毫秒
  breakpoint: 'xxl', // 根据视窗宽度,自动收起侧边栏的发展，还支持：xs: '480px', sm: '576px',md: '768px',lg: '992px',xl: '1200px',xxl: '1600px'
  navTheme: 'dark', // theme for nav menu
  primaryColor: '#fa9022', // primary color of ant design
  // borderRadiusBase:'2px',
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fluid', // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  autoHideHeader: false, // auto hide header
};