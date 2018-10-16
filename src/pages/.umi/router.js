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
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
    "routes": [
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User2/Login'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/user/register",
        "component": dynamic({ loader: () => import('../User/Register'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/user/register-result",
        "component": dynamic({ loader: () => import('../User/RegisterResult'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
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
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user",
      "test"
    ],
    "routes": [
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "authority": [
          "admin",
          "user"
        ],
        "component": dynamic({ loader: () => import('../Dashboard'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/form",
        "name": "form",
        "icon": "form",
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/form/basic-form",
            "component": dynamic({ loader: () => import('../Form/BasicForm'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
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
            "component": dynamic({ loader: () => import('../Form/StepForm'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
            "name": "stepform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/advanced-form",
            "component": dynamic({ loader: () => import('../Form/AdvancedForm'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
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
        "icon": "calendar",
        "authority": [
          "test"
        ],
        "routes": [
          {
            "path": "/log/analysis",
            "component": dynamic({ loader: () => import('../Log/Analysis/BaseView'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
            "name": "analysis",
            "routes": [
              {
                "path": "/log/analysis/menu",
                "component": dynamic({ loader: () => import('../Log/Analysis/Menu'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/analysis/business",
                "component": dynamic({ loader: () => import('../Log/Analysis/Business'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/analysis/login",
                "component": dynamic({ loader: () => import('../Log/Analysis/Login'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
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
            "component": dynamic({ loader: () => import('../Log/Detail/BaseView'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
            "name": "detail",
            "routes": [
              {
                "path": "/log/detail/click",
                "component": dynamic({ loader: () => import('../Log/Detail/Click'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/detail/loginDetailPage",
                "component": dynamic({ loader: () => import('../Log/Detail/LoginDetailPage'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/detail/exception",
                "component": dynamic({ loader: () => import('../Log/Detail/Exception'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/log/detail/function",
                "component": dynamic({ loader: () => import('../Log/Detail/Function'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/components/PageLoading/index').default  }),
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
