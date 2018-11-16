import { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, Badge, Row, Col, Modal, Button } from 'zeal-cube';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale';
import classNames from 'classnames';
import { connect } from 'dva';
import Link from 'umi/link';
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import Debounce from 'lodash-decorators/debounce';
import styles from './header.less';
import logo from '../assets/portal-logo.png';
import title from '../assets/pic_001.png';
import avatar from '../assets/user-head.png';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/log/analysis">客户资料管理</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/log/analysis">客户资料合户管理</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/log/analysis">客户资料分发管理</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/log/analysis">客户经理管理</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/log/analysis">政企自然客户视图</Link>
    </Menu.Item>
  </Menu>
);

const dropdown2 = (
  <div className="topbar-info-dropdown-memu animated fadeInRight">
    <ul className="dropdown-memu-row row clearfix">
      <Row gutter={16}>
        <Col xs={8}>
          <li className="col-sm-3 dropdown-memu-col user-info-col">
            <div className="panel panel-default ">
              <div className="panel-heading">
                <span className="panel-title">我的信息</span>
              </div>
              <div className="panel-body cv-income-info">
                <div className="user-info-cont">
                  <div className="user-info-icon">
                    <i className="iconfont icon-gene-recent-actors" />
                  </div>
                  <dl className="user-info-dl">
                    <dt className="user-info-dt">
                      <Icon type="credit-card" style={{marginRight:5,color:'#fa9022'}}/>
                      工号：
                    </dt>
                    <dd className="user-info-dd">hefei</dd>
                  </dl>
                  <dl className="user-info-dl">
                    <dt className="user-info-dt">
                    <Icon type="audit" style={{marginRight:5,color:'#72d1f0'}}/>
                      部门：
                    </dt>
                    <dd className="user-info-dd">政企信息部[6810634]</dd>
                  </dl>
                  <dl className="user-info-dl">
                    <dt className="user-info-dt">
                    <Icon type="desktop" style={{marginRight:5,color:'#40fb99'}}/>
                      IP地址：
                    </dt>
                    <dd className="user-info-dd">127.0.0.1</dd>
                  </dl>
                </div>
              </div>
            </div>
          </li>
        </Col>
        <Col xs={8}>
          <li className="col-sm-5 dropdown-memu-col">
            <div className="panel panel-default ">
              <div className="panel-heading">
                <span className="panel-title">角色切换</span>
              </div>
              <div className="panel-body cv-role-info">
                <ul>
                  <li
                    className="active"
                    data-role="manager"
                    menu_url="modules/main/views/IdxContentView"
                  >
                    <a href="#">客户经理</a>
                  </li>
                  <li data-role="info" menu_url="modules/main/views/IdxContentView">
                    <a href="#">资料管理员</a>
                  </li>
                  <li data-role="ops" menu_url="modules/operationIndex/views/operationIndex">
                    <a href="#">运维人员</a>
                  </li>
                  <li data-role="audit" menu_url="modules/main/views/IdxContentView">
                    <a href="#">审核人员</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </Col>
        <Col xs={8}>
          <li className="col-sm-4 dropdown-memu-col">
            <div className="toper-user-menu">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <span className="panel-title">我的菜单</span>
                </div>
                <div className="panel-body">
                  <ul className="topbar-user-entrance-list">
                    <li>
                      <a id="collection-menu-config">
                        <span className="entrance-tit">菜单收藏</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="entrance-tit">布局设置</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="entrance-tit">公告发布</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="entrance-tit">密码修改</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="entrance-tit">密码重置</span>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <span className="entrance-tit">下载中心</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </Col>
      </Row>
    </ul>
  </div>
);

class HeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noticeNumber: 33,
      avatar: avatar,
      active: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // if (!props.autoHideHeader && !state.visible) {
    //   return {
    //     visible: true,
    //   };
    // }
    return {
      ...props,
    };
  }

  handleLogout = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    Modal.confirm({
      title: formatMessage({ id: 'logoutConfirm' }),
      onOk() {
        dispatch({
          type: 'login/logout',
        });
      },
    });
  };

  render() {
    return (
      <Header className={styles.wrapper}>
        <div className="pull-left">
          <div className={styles.logo}>
            <a href="javascript:;">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className={styles.projectName}>
            <img
              src={title}
              alt="政企客户中心"
              style={{ paddingTop: '20px', verticalAlign: 'top' }}
            />
          </div>

          <div className={styles.allMenu}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
                常用菜单 <Icon type="down" />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="pull-right">
          <div className={`${styles.notice} ${styles.item}`}>
            <a href="#">
              <Badge count={this.state.noticeNumber}>
                <Icon type="mail" />
              </Badge>
            </a>
          </div>
          <Trigger
            popupPlacement="bottomLeft"
            action={['hover']}
            popupAlign={{
              overflow: {
                adjustX: 1,
                adjustY: 1,
              },
            }}
            mouseEnterDelay={0}
            // popupClassName="point-popup"
            builtinPlacements={{
              bottomLeft: {
                points: ['tl', 'bl'],
              },
            }}
            popupTransitionName="slide-up"
            popup={dropdown2}
            onPopupVisibleChange={isVisible =>
              isVisible ? this.setState({ active: true }) : this.setState({ active: false })
            }
            onPopupAlign={(popupDomNode, align) =>
              $(popupDomNode).css({ left: '0', top: '60px', right: '0', position: 'fixed' })
            }
          >
            <div className={`${styles.avatar} ${styles.item}`}>
              <a
                href="javascript:;"
                className={classNames('topbar-info-user-a', 'js-info-user', {
                  [styles.active]: this.state.active,
                })}
                style={{ color: '#666' }}
              >
                <img alt="" src={avatar} width="36" height="36" /> {this.state.currentUser.name}
              </a>
            </div>
          </Trigger>
          <div className={`${styles.logout} ${styles.item}`}>
            <a href="#" onClick={this.handleLogout}>
              <Icon type="poweroff" />
            </a>
          </div>
        </div>
      </Header>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(HeaderView);
