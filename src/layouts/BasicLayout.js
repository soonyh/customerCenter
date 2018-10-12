// import 'raf/polyfill';
import React from 'react';
import { connect } from 'dva';
import { StickyContainer, Sticky } from 'react-sticky';
import { Layout, Menu, Icon, Tabs, Button } from 'antd';
import DocumentTitle from 'react-document-title';
import pathToRegexp from 'path-to-regexp';

import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import Header from './Header';
import SiderMenu from '@/components/SiderMenu';
import Authorized from '@/utils/Authorized';
import sidebarMenu, { headerMenu } from '../../mock/menu';
import defaultSettings from '@/defaultSettings';
import styles from './layout.less';
import Exception403 from '../pages/Exception/403';
import Exception404 from '../pages/Exception/404';

// require('raf').polyfill(window);
// global.Intl = require('intl');
// window.Intl = require('intl');

// 引入子菜单组件
const { Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

// Conversion router to menu.
function formatter(data, parentPath = '', parentAuthority, parentName) {
  return data.map(item => {
    let locale = 'menu';
    if (parentName && item.name) {
      locale = `${parentName}.${item.name}`;
    } else if (item.name) {
      locale = `menu.${item.name}`;
    } else if (parentName) {
      locale = parentName;
    }
    const result = {
      ...item,
      locale,
      authority: item.authority || parentAuthority,
    };
    if (item.routes) {
      const children = formatter(item.routes, `${parentPath}${item.path}/`, item.authority, locale);
      // Reduce memory usage
      result.children = children;
    }
    delete result.routes;
    return result;
  });
}

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky topOffset={-60}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        style={{
          ...style,
          zIndex: 1,
          background: '#fafafa',
          boxShadow: '0 6px 10px 0 rgba(0,0,0,.04)',
          top: 60,
        }}
      />
    )}
  </Sticky>
);

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    // this.getPageTitle = memoizeOne(this.getPageTitle);
    // this.getBreadcrumbNameMap = memoizeOne(this.getBreadcrumbNameMap, isEqual);
    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
    // this.matchParamsPath = memoizeOne(this.matchParamsPath, isEqual);
  }

  state = {
    collapsed: false,
    // tab模式相关的状态
    currentTabKey: '', // 当前激活的是哪个tab
    tabPanes: [], // 当前总共有哪些tab
  };
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'user/fetchCurrent',
    });
    // dispatch({
    //     type: 'setting/getSetting',
    // });
    this.renderRef = requestAnimationFrame(() => {
      this.setState({
        rendering: false,
      });
    });
    // this.enquireHandler = enquireScreen(mobile => {
    //     const { isMobile } = this.state;
    //     if (isMobile !== mobile) {
    //         this.setState({
    //             isMobile: mobile,
    //         });
    //     }
    // });
  }
  /**
   * 组件挂载之前判断是否要更新tab
   */
  componentWillMount() {
    this.tabTitleMap = this.parseTabTitle();
    this.updateTab(this.props);
    // console.log("this.tabTitleMap");
    // console.log(JSON.stringify(this.tabTitleMap, null, "\t"));
  }
  /**
   * 每次在react-router中切换时也要判断是否更新tab
   */
  componentWillReceiveProps(nextProps) {
    // 如果不是tab模式直接返回
    // if (globalConfig.tabMode.enable !== true) {
    //     return;
    // }

    // FIXME: hack, 在react-router中切换时会触发这个方法两次, 据说是和hashHistory有关, 需要手动处理下
    // const action = this.props.location.action;
    // if (action === "PUSH") {
    //     // action有PUSH、POP、REPLACE等几种, 不太清楚分别是做什么用的
    //     return;
    // }

    // FIXME: hack, 因为要区分react-router引起的re-render和redux引起的re-render
    // if (this.props.collapse === nextProps.collapse) {
    this.updateTab(nextProps);
    // }
  }

  getMenuData() {
    const {
      route: { routes },
    } = this.props;
    return formatter(routes);
  }
  /**
   * 获取面包屑映射
   * @param {Object} menuData 菜单配置
   */
  getBreadcrumbNameMap() {
    const routerMap = {};
    const mergeMenuAndRouter = data => {
      data.forEach(menuItem => {
        if (menuItem.children) {
          mergeMenuAndRouter(menuItem.children);
        }
        // Reduce memory usage
        routerMap[menuItem.path] = menuItem;
      });
    };
    mergeMenuAndRouter(this.getMenuData());
    return routerMap;
  }

  matchParamsPath = pathname => {
    const pathKey = Object.keys(this.breadcrumbNameMap).find(key =>
      pathToRegexp(key).test(pathname)
    );
    return this.breadcrumbNameMap[pathKey];
  };

  getTabTitle = pathname => {
    const currRouterData = this.matchParamsPath(pathname);

    if (!currRouterData) {
      return 'undefined';
    }
    const message = formatMessage({
      id: currRouterData.locale || currRouterData.name,
      defaultMessage: currRouterData.name,
    });
    return `${message}`;
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  /**
   * 解析menu.js中的配置, 找到所有叶子节点对应的key和名称
   *
   * @returns {Map}
   */
  parseTabTitle() {
    const tabTitleMap = new Map();

    const addItem = item => {
      if (item.url) {
        // 对于直接跳转的菜单项, 直接忽略, 只有headerMenu中可能有这种
        return;
      }
      if (item.icon) {
        tabTitleMap.set(
          item.key,
          <span className="ant-layout-tab-text">
            <Icon type={item.icon} />
            {item.name}
          </span>
        );
      } else {
        tabTitleMap.set(item.key, <span className="ant-layout-tab-text">{item.name}</span>);
      }
    };
    const browseMenu = item => {
      if (item.child) {
        item.child.forEach(browseMenu);
      } else {
        addItem(item);
      }
    };

    // 又是dfs, 每次用js写这种就觉得很神奇...
    sidebarMenu.forEach(browseMenu);
    headerMenu.forEach(browseMenu);

    // 最后要手动增加一个key, 对应于404页面
    tabTitleMap.set(
      '*',
      <span className="ant-layout-tab-text">
        <Icon type="frown-o" />
        Error
      </span>
    );
    return tabTitleMap;
  }

  /**
   * 根据传入的props决定是否要新增一个tab
   *
   * @param props
   */
  updateTab(props) {
    let key = props.location.pathname; // react-router传入的key

    // 如果key有问题, 就直接隐藏所有tab, 这样简单点
    if (!key || !this.breadcrumbNameMap.hasOwnProperty(key)) {
      this.state.tabPanes.length = 0;
      return;
    }

    const tabTitle = this.getTabTitle(key);

    // 如果允许同一个组件在tab中多次出现, 每次就必须生成唯一的key
    // if (globalConfig.tabMode.allowDuplicate === true) {
    //     if (!this.tabCounter) {
    //         this.tabCounter = 0;
    //     }

    //     this.tabCounter++;
    //     key = key + this.tabCounter;
    // }

    // 更新当前选中的tab
    this.state.currentTabKey = key;

    // 当前key对应的tab是否已经在显示了?
    let exist = false;
    for (const pane of this.state.tabPanes) {
      if (pane.key === key) {
        exist = true;
        break;
      }
    }

    // 如果key不存在就要新增一个tabPane
    if (!exist) {
      this.state.tabPanes.push({
        key,
        title: tabTitle,
        //content: React.cloneElement(props.children),  // 我本来是想clone一下children的, 这样比较保险, 不同tab不会互相干扰, 但发现似乎不clone也没啥bug
        content: props.children,
      });
    }
  }
  /**
   * 改变tab时的回调
   */
  onTabChange = activeKey => {
    this.setState({ currentTabKey: activeKey });
  };

  /**
   * 关闭tab时的回调
   */
  onTabRemove = targetKey => {
    // 如果关闭的是当前tab, 要激活哪个tab?
    // 首先尝试激活左边的, 再尝试激活右边的
    let nextTabKey = this.state.currentTabKey;
    if (this.state.currentTabKey === targetKey) {
      let currentTabIndex = -1;
      this.state.tabPanes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          currentTabIndex = i;
        }
      });

      // 如果当前tab左边还有tab, 就激活左边的
      if (currentTabIndex > 0) {
        nextTabKey = this.state.tabPanes[currentTabIndex - 1].key;
      }
      // 否则就激活右边的tab
      else if (currentTabIndex === 0 && this.state.tabPanes.length > 1) {
        nextTabKey = this.state.tabPanes[currentTabIndex + 1].key;
      }

      // 其实还有一种情况, 就是只剩最后一个tab, 但这里不用处理
    }

    // 过滤panes
    const newTabPanes = this.state.tabPanes.filter(pane => pane.key !== targetKey);
    this.setState({ tabPanes: newTabPanes, currentTabKey: nextTabKey });
  };

  renderBody(routerConfig) {
    // 如果没有tab可以显示, 就显示欢迎界面
    if (this.state.tabPanes.length === 0) {
      return <div>欢迎</div>;
    } else {
      return (
        <Authorized authority={routerConfig.authority} noMatch={<Exception403 />}>          
          <StickyContainer>
            <Tabs
              activeKey={this.state.currentTabKey}
              renderTabBar={renderTabBar}
              type="editable-card"
              onEdit={this.onTabRemove}
              onChange={this.onTabChange}
              hideAdd
              animated={true}
              className="bss-tabs"
            >
              {this.state.tabPanes.map(pane => (
                <TabPane tab={pane.title} key={pane.key} closable={true}>
                  {pane.content}
                </TabPane>
              ))}
            </Tabs>
          </StickyContainer>
        </Authorized>
      );
    }
  }

  render() {
    const {
      navTheme,
      layout: PropsLayout,
      children,
      location: { pathname },
    } = this.props;

    // console.log("this.props.route.routes");
    // console.log(JSON.stringify(this.props.route.routes, null, "\t"));

    const menuData = this.getMenuData();

    // console.log("menuData after formatter this.props.route.routes");
    // console.log(JSON.stringify(menuData, null, "\t"));

    // console.info("pathname", this.props.location.pathname);

    const routerConfig = this.matchParamsPath(pathname);

    // console.log("this.breadcrumbNameMap 和 menuData有关");
    // console.log(JSON.stringify(this.getBreadcrumbNameMap(), null, "\t"));

    // console.log("routerConfig");
    // console.log(JSON.stringify(this.matchParamsPath(pathname), null, "\t"));

    return (
      <DocumentTitle title={`${this.getTabTitle(pathname)} - ${defaultSettings.name}`}>
        <Layout>
          <Header />
          <Layout className={styles.content}>
            <SiderMenu
              logo={null}
              Authorized={Authorized}
              theme={navTheme}
              onCollapse={false}
              menuData={menuData}
              {...this.props}
            />
            <Layout>{this.renderBody(routerConfig)}</Layout>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default connect(({ global, setting }) => ({
  collapsed: global.collapsed,
  layout: setting.layout,
  ...setting,
}))(BasicLayout);
