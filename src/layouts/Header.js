import { Component } from "react";
import { Layout, Menu, Dropdown, Icon, Badge, Row, Col } from "antd";
import classNames from "classnames";
import Link from "umi/link";
import Trigger from "rc-trigger";
import Debounce from "lodash-decorators/debounce";
import styles from "./header.less";
import logo from "../assets/portal-logo.png";
import title from "../assets/pic_001.png";
import avatar from "../assets/user-head.png";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <SubMenu title="工作台管理">
      <Menu.Item>客户视图功能模块配置</Menu.Item>
      <Menu.Item>客户视图模板配置</Menu.Item>
      <Menu.Item>用户功能模块配置</Menu.Item>
      <Menu.Item>用户模板配置</Menu.Item>
      <Menu.Item>角色功能模块配置</Menu.Item>
      <Menu.Item>角色模板配置</Menu.Item>
      <Menu.Item>信息项管理</Menu.Item>
      <Menu.Item>信息块管理</Menu.Item>
      <Menu.Item>信息项与信息块的关系管理</Menu.Item>
    </SubMenu>
    <SubMenu title="登录管理">
      <Menu.Item>登录状态管理</Menu.Item>
    </SubMenu>
    <SubMenu title="权限管理">
      <Menu.Item>权限管理</Menu.Item>
    </SubMenu>
    <SubMenu title="员工管理">
      <Menu.Item>工号管理</Menu.Item>
    </SubMenu>
    <SubMenu title="角色管理">
      <Menu.Item>角色管理</Menu.Item>
    </SubMenu>
    <SubMenu title="待办管理">
      <Menu.Item>待办/待阅</Menu.Item>
    </SubMenu>
    <SubMenu title="菜单管理">
      <Menu.Item>菜单管理</Menu.Item>
    </SubMenu>
    <SubMenu title="日志管理">
      <Menu.Item>日志管理</Menu.Item>
    </SubMenu>
    <SubMenu title="组织管理">
      <Menu.Item>组织管理</Menu.Item>
    </SubMenu>
    <SubMenu title="监控管理">
      <Menu.Item>异常监控</Menu.Item>
      <Menu.Item>开关管理</Menu.Item>
      <Menu.Item>组织机构代码刷新</Menu.Item>
    </SubMenu>
  </Menu>
);

export default class HeaderView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWorkspace: false
    };
  }
  @Debounce(100)
  toggleDropdownMenu(e) {
    this.state.showWorkspace
      ? this.setState({ showWorkspace: false })
      : this.setState({ showWorkspace: true });
  }

  handle() {
    console.log(111111);
  }
  render() {
    return (
      <Header className={styles.wrapper}>
        <div className="pull-left">
          <div className={styles.logo}>
            <a href="">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className={styles.projectName}>
            <img
              src={title}
              alt="政企客户中心"
              style={{ paddingTop: "20px", verticalAlign: "top" }}
            />
          </div>

          <div className={styles.allMenu}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" href="#">
              常用菜单 <Icon type="down" />
              </a>
            </Dropdown>
          </div>

          {/* <div
            className={styles.allMenu}
            onMouseEnter={e => this.toggleDropdownMenu(e)}
            onMouseOut={e => this.toggleDropdownMenu(e)}
          >
            <a href="#" className="js-all-menu">
              客户中心
              <Icon type="down" style={{fontSzie:"12px"}}/>
            </a>
          </div> */}
        </div>
        <div className="pull-right">
          <div className={`${styles.notice} ${styles.item}`}>
            <a href="#">
              <Badge count={100}>
                <Icon type="mail" />
              </Badge>
            </a>
          </div>

          <div className={`${styles.avatar} ${styles.item}`}>
            <a href="#" className="topbar-info-user-a js-info-user">
              <img alt="" src={avatar} width="36" height="36" />
            </a>
          </div>

          <div className={`${styles.logout} ${styles.item}`}>
            <a href="#">
              <Icon type="poweroff" />
            </a>
          </div>
        </div>
        <div
          className="topbar-dropdown-box js-alldd-box fadeInDown animated"
          style={{
            height: "auto",
            display: this.state.showWorkspace ? "block" : "none"
          }}
        >
          <div className="y-row">
            <div className="topbar-menu-content">
              <div className="topbar-menu-category clearfix">
                <div className="topbar-product-all-item row">
                  <Row>
                    <Col {...{ xs: 24, sm: 12, md: 6, lg: 4 }}>
                      <dl>
                        <dt className="ng-title">工作台管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="custViewManage"
                              menu_name="客户视图功能模块配置"
                              menu_url="modules/demo/workbenchmgr/customerViewModuleManage/views/CustomerViewModuleManageView"
                            >
                              <a href="#">客户视图功能模块配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="custTplManage"
                              menu_name="客户视图模板配置"
                              menu_url="modules/demo/workbenchmgr/customerViewTplManage/views/CustomerViewTplManageView"
                            >
                              <a href="#">客户视图模板配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="userViewManage"
                              menu_name="用户功能模块配置"
                              menu_url="modules/demo/workbenchmgr/userModuleManage/views/UserModuleManageView"
                            >
                              <a href="#">用户功能模块配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="userTplManage"
                              menu_name="用户模板配置"
                              menu_url="modules/demo/workbenchmgr/userTplManage/views/UserTplManageView"
                            >
                              <a href="#">用户模板配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="rolefunManage"
                              menu_name="角色功能模块配置"
                              menu_url="modules/demo/workbenchmgr/rolefunmodulemanage/views/RoleFunManageView"
                            >
                              <a href="#">角色功能模块配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="roletplManage"
                              menu_name="角色模板配置"
                              menu_url="modules/demo/workbenchmgr/roletplmanage/views/RoleTplManageView"
                            >
                              <a href="#">角色模板配置</a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="infoItemManagement"
                              menu_name="信息项管理"
                              menu_url="modules/demo/infoItemManagement/views/infoItemManagement"
                            >
                              <a href="javascript:;" isremote="true">
                                信息项管理
                              </a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="infoBlockManagement"
                              menu_name="信息块管理"
                              menu_url="modules/demo/infoBlockManagement/views/infoBlockManagement"
                            >
                              <a href="javascript:;" isremote="true">
                                信息块管理
                              </a>
                            </li>
                            <li
                              className="ng-item"
                              menu_id="infoBlockitemRelManagement"
                              menu_name="信息项与信息块的关系管理"
                              menu_url="modules/demo/infoBlockItemRelManage/views/InfoBlockItemRelManageView"
                            >
                              <a href="#">信息项与信息块的关系管理</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt className="ng-title">登录管理</dt>
                        <dd>
                          <ul>
                            <li className="ng-item">
                              <a href="#">登录状态管理</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </Col>
                    <Col {...{ xs: 24, sm: 12, md: 6, lg: 4 }}>
                      <dl>
                        <dt className="ng-title">权限管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="propertyManagement"
                              menu_name="权限管理"
                              menu_url="modules/demo/propertyManagement/views/propertyManagement"
                            >
                              <a href="javascript:void(0);" isremote="true">
                                权限管理
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt className="ng-title">员工管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="jobNumberManagement"
                              menu_name="工号管理"
                              menu_url="modules/demo/jobNumberManagement/views/jobNumberManagementView"
                              isremote="true"
                            >
                              <a href="javascript:;">工号管理</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </Col>
                    <Col {...{ xs: 24, sm: 12, md: 6, lg: 4 }}>
                      <dl>
                        <dt className="ng-title">角色管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="roleManagement"
                              menu_name="角色管理"
                              menu_url="modules/demo/roleManagement/views/roleManagement"
                              isremote="true"
                            >
                              <a className="">
                                <span className="nav-title">角色管理</span>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt className="ng-title">待办管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="upcomingManagement"
                              menu_name="待办管理"
                              menu_url="modules/demo/upcomingManagement/views/upcomingManagementView"
                              isremote="true"
                            >
                              <a className="">
                                <span className="nav-title">待办/待阅</span>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </Col>
                    <Col {...{ xs: 24, sm: 12, md: 6, lg: 4 }}>
                      <dl>
                        <dt className="ng-title">菜单管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="menuManagement"
                              menu_name="菜单管理"
                              menu_url="modules/demo/menuManagement/views/menuManagement"
                              isremote="true"
                            >
                              <a className="">
                                <span className="nav-title">菜单管理</span>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt className="ng-title">日志管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="logManagement"
                              menu_name="日志管理"
                              menu_url="modules/demo/logManagement/views/logManagementView"
                              isremote="true"
                            >
                              <a href="javascript:;">日志管理</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </Col>

                    <Col {...{ xs: 24, sm: 12, md: 6, lg: 4 }}>
                      <dl>
                        <dt className="ng-title">组织管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="organizationalManagement"
                              menu_name="组织管理"
                              menu_url="modules/demo/organizationalManagement/views/IndexView"
                              isremote="true"
                            >
                              <a className="">
                                <span className="nav-title">组织管理</span>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt className="ng-title">监控管理</dt>
                        <dd>
                          <ul>
                            <li
                              className="ng-item"
                              menu_id="monitorManagement"
                              menu_name="异常监控"
                              menu_url="modules/demo/monitorManagement/views/monitorManagementView"
                              isremote="true"
                            >
                              <a href="javascript:;">异常监控</a>
                            </li>
                            <li className="ng-item">
                              <a href="#">开关管理</a>
                            </li>
                            <li className="ng-item">
                              <a href="#">组织机构代码刷新</a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
