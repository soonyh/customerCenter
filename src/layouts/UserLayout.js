import React, { Fragment } from "react";
import Link from "umi/link";
import { Icon } from "antd";
import defaultSettings from '@/defaultSettings';
import styles from "./UserLayout.less";
import logo from "./img/logo.png";
import zhengQi from "./img/pic_zhengqi.png";

class UserLayout extends React.PureComponent {
    // @TODO title
    // getPageTitle() {
    //   const { routerData, location } = this.props;
    //   const { pathname } = location;
    //   let title = 'Ant Design Pro';
    //   if (routerData[pathname] && routerData[pathname].name) {
    //     title = `${routerData[pathname].name} - Ant Design Pro`;
    //   }
    //   return title;
    // }

    render() {
        const { children } = this.props;
        return (
            // @TODO <DocumentTitle title={this.getPageTitle()}>
            <div className="login">
                <div className="login-container">
                    <div className="login-top">
                        <div className="login-logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="login-content clearfix">
                        <div className="login-left">
                            <div className="login-por-img">
                                <img src={zhengQi} alt="" />
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
                <div className="login-footer">
                    {defaultSettings.footer}
                </div>
            </div>
        );
    }
}

export default UserLayout;
