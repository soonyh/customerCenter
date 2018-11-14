import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { FormattedMessage } from 'umi/locale';
import { Menu, Icon, Tabs } from 'antd-x';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from '../log.less';
import FunctionOperation from './FunctionOperation';
import Exception from './Exception';
import UserClick from './UserClick';
import LoginDetailPage from './LoginDetailPage';

const { Item } = Menu;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

@connect(({ user }) => ({
  currentUser: user.currentUser,
}))
class BaseView extends Component {
  constructor(props) {
    super(props);
    const { match, location } = props;
    const menuMap = {
      userClick: 'userClick',
      functionOperation: 'functionOperation',
      exception: 'exception',
      login: 'login',
    };
    const key = location.pathname.replace(`${match.path}/`, '');
    this.state = {
      mode: 'inline',
      menuMap,
      selectKey: menuMap[key] ? key : 'login',
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
    if (key == 'userClick') {
      return <UserClick />;
    } else if (key == 'exception') {
      return <Exception />;
    } else if (key == 'login') {
      return <LoginDetailPage />;
    } else if (key == 'functionOperation') {
      return <FunctionOperation />;
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
        {/* <Tabs defaultActiveKey="1" tabPosition="left">
          <TabPane tab="登录日志" key="1">
            <LoginDetailPage />
          </TabPane>
          <TabPane tab="点击日志" key="2">
            <UserClick />
          </TabPane>
          <TabPane tab="功能操作日志" key="3">
            <FunctionOperation />
          </TabPane>
          <TabPane tab="异常日志" key="4">
            <Exception />
          </TabPane>
        </Tabs> */}
        <div className={styles.leftmenu}>
          <Menu mode={mode} selectedKeys={[selectKey]} onClick={this.selectKey}>
            <Menu.Item key="login">登录日志</Menu.Item>
            <Menu.Item key="userClick">点击日志</Menu.Item>
            <Menu.Item key="functionOperation">功能操作日志</Menu.Item>
            <Menu.Item key="exception">异常日志</Menu.Item>
          </Menu>
        </div>
        <div className={styles.right}>{this.getChildren(selectKey)}</div>
      </div>
      // </GridContent >
    );
  }
}

export default BaseView;
