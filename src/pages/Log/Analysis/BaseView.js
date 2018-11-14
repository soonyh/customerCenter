import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { FormattedMessage } from 'umi/locale';
import { Menu, Icon } from 'antd-x';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from '../log.less';
import MenuPage from './Menu';
import Business from './Business';
import Login from './Login';

const { Item } = Menu;
const SubMenu = Menu.SubMenu;

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class BaseView extends Component {
  constructor(props) {
    super(props);
    const { match, location } = props;
    const menuMap = {
      menu: 'menu',
      business: 'business',
      login: 'login',
    };
    const key = location.pathname.replace(`${match.path}/`, '');
    this.state = {
      mode: 'inline',
      menuMap,
      selectKey: menuMap[key] ? key : 'menu',
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   const { match, location } = props;
  //   let selectKey = location.pathname.replace(`${match.path}/`, '');
  //   selectKey = state.menuMap[selectKey] ? selectKey : 'menu';
  //   if (selectKey !== state.selectKey) {
  //     return { selectKey };
  //   }
  //   return null;
  // }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  getmenu = () => {
    const { menuMap } = this.state;
    return Object.keys(menuMap).map(item => <Item key={item}>{menuMap[item]}</Item>);
  };

  getRightTitle = () => {
    const { selectKey, menuMap } = this.state;
    return menuMap[selectKey];
  };

  selectKey = ({ key }) => {
    // router.push(`/log/analysis/${key}`);
    this.setState({
      selectKey: key,
    });
  };

  getChildren = key => {
    if (key == 'menu') {
      return <MenuPage />;
    } else if (key == 'business') {
      return <Business />;
    } else if (key == 'login') {
      return <Login />;
    }
  };

  resize = () => {
    if (!this.main) {
      return;
    }
    requestAnimationFrame(() => {
      let mode = 'inline';
      const { offsetWidth } = this.main;
      if (this.main.offsetWidth < 641 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      if (window.innerWidth < 768 && offsetWidth > 400) {
        mode = 'horizontal';
      }
      this.setState({
        mode,
      });
    });
  };

  render() {
    const { children, currentUser } = this.props;
    if (!currentUser.userid) {
      return '';
    }
    const { mode, selectKey } = this.state;
    return (
      // <GridContent>
      <div
        className={`${styles.main} clearfix`}
        ref={ref => {
          this.main = ref;
        }}
      >
        <div className={styles.leftmenu}>
          <Menu
            mode={mode}
            selectedKeys={[selectKey]}
            onClick={this.selectKey}
            defaultOpenKeys={['sub1', 'sub2']}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <span>行为分析</span>
                </span>
              }
            >
              <Menu.Item key="menu">菜单点击分析</Menu.Item>
              <Menu.Item key="business">业务功能点击分析</Menu.Item>
              <Menu.Item key="login">登录分析</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <span>页面加载时间分析</span>
                </span>
              }
            >
              <Menu.Item key="timer">耗时统计日志分析</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className={styles.right}>{this.getChildren(selectKey)}</div>
      </div>
      // </GridContent >
    );
  }
}

export default BaseView;
