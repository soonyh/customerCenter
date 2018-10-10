import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "redirect": "/user/login",
    "exact": true,
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/",
    "redirect": "/log/analysis",
    "exact": true,
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/user",
    "component": require('../../layouts/UserLayout').default,
    "routes": [
      {
        "path": "/user/login",
        "component": require('../User2/Login').default,
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/user/register",
        "component": require('../User/Register').default,
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/user/register-result",
        "component": require('../User/RegisterResult').default,
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      }
    ],
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/",
    "component": require('../../layouts/BasicLayout').default,
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "component": require('../Dashboard').default,
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/form",
        "name": "form",
        "icon": "form",
        "routes": [
          {
            "path": "/form/basic-form",
            "component": require('../Form/BasicForm').default,
            "name": "basicform",
            "authority": [
              "user"
            ],
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/step-form",
            "component": require('../Form/StepForm').default,
            "name": "stepform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/advanced-form",
            "component": require('../Form/AdvancedForm').default,
            "name": "advancedform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/log",
        "name": "log",
        "icon": "form",
        "authority": [
          "admin"
        ],
        "routes": [
          {
            "path": "/log/analysis",
            "component": require('../Log/Analysis/BaseView').default,
            "name": "analysis",
            "routes": [
              {
                "path": "/log/analysis/menu",
                "component": require('../Log/Analysis/Menu').default,
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/analysis/business",
                "component": require('../Log/Analysis/Business').default,
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/analysis/login",
                "component": require('../Log/Analysis/Login').default,
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              }
            ],
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/log/detail",
            "component": require('../Log/Detail/Time').default,
            "name": "detail",
            "routes": [
              {
                "path": "/log/detail/time",
                "component": require('../Log/Detail/Time').default,
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              }
            ],
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      }
    ],
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
